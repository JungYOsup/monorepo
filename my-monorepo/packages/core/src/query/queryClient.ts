import {
  MutationCache,
  QueryCache,
  QueryClient,
  type DefaultOptions,
} from "@tanstack/react-query";

type Meta = {
  suppressGlobalError?: boolean;
  errorMessage?: string;
  suppressGlobalSuccess?: boolean;
  successMessage?: string;
  suppressGlobalLoading?: boolean;
};

function handleGlobalError(error: unknown, meta?: Meta) {
  const message =
    (meta && meta.errorMessage) ||
    (error as any)?.message ||
    "요청 처리 중 오류가 발생했습니다.";
  // Minimal global handling: log nicely. Apps can add UI listening to this event.
  // eslint-disable-next-line no-console
  console.error("[ReactQuery][GlobalError]", message, error);
  // Dispatch a custom event apps can listen to for UI notifications (browser only)
  const w = globalThis as any;
  if (w && typeof w.dispatchEvent === "function" && typeof w.CustomEvent === "function") {
    try {
      w.dispatchEvent(new w.CustomEvent("react-query-error", { detail: { error, meta, message } }));
    } catch {
      // ignore
    }
  }
}

function handleGlobalSuccess(data: unknown, meta?: Meta) {
  const message = (meta && meta.successMessage) || "요청이 성공적으로 처리되었습니다.";
  // eslint-disable-next-line no-console
  console.info("[ReactQuery][GlobalSuccess]", message, data);
  const w = globalThis as any;
  if (w && typeof w.dispatchEvent === "function" && typeof w.CustomEvent === "function") {
    try {
      w.dispatchEvent(
        new w.CustomEvent("react-query-success", { detail: { data, meta, message } })
      );
    } catch {
      // ignore
    }
  }
}

export function createAppQueryClient(options?: { defaultOptions?: DefaultOptions }) {
  const queryCache = new QueryCache({
    onError: (error, query) => {
      const meta = (query.meta ?? {}) as Meta;
      if (meta.suppressGlobalError) return;
      const observers: any[] = (query as any).observers || [];
      const hasLocalHandler = observers?.some(
        (o: any) => typeof o?.options?.onError === "function"
      );
      if (hasLocalHandler) return; // local takes priority
      handleGlobalError(error, meta);
    },
    onSuccess: (data, query) => {
      const meta = (query.meta ?? {}) as Meta;
      if (meta.suppressGlobalSuccess) return;
      const observers: any[] = (query as any).observers || [];
      const hasLocalHandler = observers?.some(
        (o: any) => typeof o?.options?.onSuccess === "function"
      );
      if (hasLocalHandler) return;
      handleGlobalSuccess(data, meta);
    },
  });

  const mutationCache = new MutationCache({
    onError: (error, _variables, _context, mutation) => {
      const meta = ((mutation.options as any)?.meta ?? {}) as Meta;
      if (meta.suppressGlobalError) return;
      // When a local onError exists on this mutation, skip global
      const hasLocalHandler = typeof mutation.options?.onError === "function";
      if (hasLocalHandler) return;
      handleGlobalError(error, meta);
    },
    onSuccess: (data, variables, context, mutation) => {
      const meta = ((mutation.options as any)?.meta ?? {}) as Meta;
      if (meta.suppressGlobalSuccess) return;
      const hasLocalHandler = typeof mutation.options?.onSuccess === "function";
      if (hasLocalHandler) return;
      handleGlobalSuccess(data, meta);
    },
  });

  const client = new QueryClient({
    queryCache,
    mutationCache,
    defaultOptions: {
      queries: {
        retry: 1,
      },
      mutations: {},
      ...(options?.defaultOptions ?? {}),
    },
  });

  // Global loading broadcaster
  const w = globalThis as any;
  const emitLoading = () => {
    const queries: any[] = client.getQueryCache().getAll();
    const fetching = queries.filter((q) => {
      const meta = (q.meta ?? {}) as Meta;
      if (meta.suppressGlobalLoading) return false;
      return q.state?.fetchStatus === "fetching";
    });
    const mutations: any[] = client.getMutationCache().getAll();
    const mutating = mutations.filter((m) => {
      const meta = (((m.options as any) ?? {}).meta ?? {}) as Meta;
      if (meta.suppressGlobalLoading) return false;
      return m.state?.status === "pending";
    });
    const detail = {
      isFetching: fetching.length > 0,
      isMutating: mutating.length > 0,
      fetchingCount: fetching.length,
      mutatingCount: mutating.length,
      total: fetching.length + mutating.length,
    };
    if (w && typeof w.dispatchEvent === "function" && typeof w.CustomEvent === "function") {
      try {
        w.dispatchEvent(new w.CustomEvent("react-query-loading-change", { detail }));
      } catch {
        // ignore
      }
    }
  };

  // Subscribe to cache changes to update loading state
  queryCache.subscribe(() => {
    // microtask to batch frequent updates
    Promise.resolve().then(emitLoading);
  });
  mutationCache.subscribe(() => {
    Promise.resolve().then(emitLoading);
  });
  // Initial emit
  emitLoading();

  return client;
}

export type { DefaultOptions as QueryClientDefaultOptions };
