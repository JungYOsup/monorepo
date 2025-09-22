import { useLocationsLocationsGetQuery } from "@core/hooks/api/locations/useLocationsQuery";
import { ActionIcon, Autocomplete, AutocompleteProps } from "@mantine/core";
import { useDebouncedValue } from "@mantine/hooks";
import {
  type LocationsGet200Response,
  type LocationsGet200ResponseRowsInner,
  type MasterApiLocationsGetRequest,
} from "@sizlcorp/sizl-api-document/dist/models";
import { useEffect, useMemo, useRef, useState } from "react";
import { Icon } from "../../atoms/Icon";

type AutocompleteItem<T> = { value: string; label: string; __item?: T };

export type LocationsGetAutocompleteProps<
  T = LocationsGet200ResponseRowsInner,
> = {
  onSelect?: (item: T) => void;
  // Controlled code value: when provided, component displays mapped label
  value?: string;
  onChange?: (code: string) => void;
  defaultValue?: string;
  label?: string;
  description?: string;
  placeholder?: string;
  pageSize?: number;
  minLength?: number;
  autocompleteProps?: Partial<AutocompleteProps>;
  onClear?: () => void;
  searchFields?: string[];
};

export function LocationsGetAutocomplete<T = LocationsGet200ResponseRowsInner>({
  onSelect,
  value: codeValue,
  onChange,
  defaultValue,
  label = "Locations 검색",
  description,
  placeholder = "코드/이름으로 검색",
  pageSize = 10,
  minLength = 0,
  autocompleteProps,
  onClear,
  searchFields = ["code", "name"],
}: LocationsGetAutocompleteProps<T>) {
  const LOAD_MORE_VALUE = "__LOAD_MORE__" as const;
  const LOAD_MORE_LABEL = "더 보기…" as const;
  // Input display value (label or raw code while resolving)
  const [value, setValue] = useState<string>(defaultValue ?? "");
  const [debounced] = useDebouncedValue(value, 300);
  const [page, setPage] = useState(1);
  const [items, setItems] = useState<T[]>([]);
  const [hasMore, setHasMore] = useState(false);
  const [dropdownOpened, setDropdownOpened] = useState(false);
  const loadingMoreRef = useRef(false);

  const enabled = debounced.trim().length >= minLength;

  const { data: res, isFetching } = useLocationsLocationsGetQuery({
    search: enabled ? debounced : undefined,
    page: enabled ? page : 1,
    pageSize: enabled ? pageSize : pageSize,
    searchFields: enabled ? searchFields : undefined,
  } as MasterApiLocationsGetRequest);

  useEffect(() => {
    setPage(1);
    setItems([]);
  }, [debounced]);

  useEffect(() => {
    const rows: T[] = ((
      res as unknown as {
        data: LocationsGet200Response;
      }
    )?.data.rows ?? []) as T[];
    if (!rows) return;
    setItems((prev) => (page === 1 ? rows : [...prev, ...rows]));
    setHasMore(Array.isArray(rows) && rows.length >= pageSize);
    loadingMoreRef.current = false;
  }, [res, pageSize, page]);

  // If external code value is provided, set input to that code first
  useEffect(() => {
    if (typeof codeValue === "string") {
      setValue((prev) => (prev !== codeValue ? codeValue : prev));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [codeValue]);

  // When items (options) change, and an external code is provided, map to label for display
  useEffect(() => {
    if (!codeValue) return;
    const found: any = items.find(
      (r: any) => String(r?.code ?? r?.id ?? "") === String(codeValue)
    );
    if (found) {
      const label =
        found?.code && (found as any)?.name
          ? String((found as any).code) + " - " + String((found as any).name)
          : String(
              (found as any)?.code ??
                (found as any)?.name ??
                String((found as any)?.id ?? "")
            );
      setValue(label);
    }
  }, [items, codeValue]);

  const data: AutocompleteItem<T>[] = useMemo(() => {
    const mapped: AutocompleteItem<T>[] = items.map((r: any) => {
      const label =
        r?.code && r?.name
          ? String(r.code) + " - " + String(r.name)
          : (r?.code ?? r?.name ?? String(r?.id ?? ""));
      // Use code (fallback to id/label) as the option value
      const value = String(r?.code ?? r?.id ?? label);
      return { value, label, __item: r as T } as AutocompleteItem<T>;
    });
    if (enabled && hasMore) {
      mapped.push({
        value: LOAD_MORE_VALUE,
        label: LOAD_MORE_LABEL,
      } as AutocompleteItem<T>);
    }
    return mapped;
  }, [items, enabled, hasMore]);

  return (
    <Autocomplete
      label={label}
      placeholder={placeholder}
      value={value}
      onChange={(v) => {
        // Prevent load-more label from being applied to input value
        if (v === LOAD_MORE_LABEL) return;
        setValue(v);
        if (!dropdownOpened) setDropdownOpened(true);
      }}
      data={data as any}
      dropdownOpened={dropdownOpened}
      onDropdownOpen={() => setDropdownOpened(true)}
      onDropdownClose={() => setDropdownOpened(false)}
      filter={({ options, limit }) => options.slice(0, limit)}
      onOptionSubmit={(val) => {
        if (val === LOAD_MORE_VALUE) {
          if (!loadingMoreRef.current && hasMore) {
            loadingMoreRef.current = true;
            setPage((p) => p + 1);
            setTimeout(() => setDropdownOpened(true), 0);
          }
          // keep input text unchanged when clicking load more
          setTimeout(() => setValue((prev) => prev), 0);
          return;
        }
        const found = (data as AutocompleteItem<T>[]).find(
          (d) => d.value === val
        );
        if (found?.__item && onSelect) onSelect(found.__item);
        // Notify external change with selected code value
        onChange?.(val);
        // Display the mapped label in the input
        setValue(found?.label ?? val);
      }}
      rightSection={
        value ? (
          <ActionIcon
            size="sm"
            variant="subtle"
            color="gray"
            aria-label="Clear selection"
            onClick={() => {
              setValue("");
              setItems([]);
              setPage(1);
              onChange?.("");
              onClear?.();
            }}
          >
            <Icon name="close" size={14} />
          </ActionIcon>
        ) : undefined
      }
      rightSectionPointerEvents="all"
      {
        // Prevent external overriding of value/onChange which are managed here
        ...(() => {
          const {
            value: _v,
            onChange: _oc,
            ...rest
          } = (autocompleteProps ?? {}) as any;
          return rest;
        })()
      }
      description={
        description ?? (isFetching && enabled ? "불러오는 중…" : undefined)
      }
    />
  );
}

// Sync external code value -> display label mapping
// Do this after the component to leverage hooks order above
// Note: kept within same module for minimal changes
