import { Icon } from "@core/components/atoms/Icon";
import { useEquipmentsEquipmentsGetQuery } from "@core/hooks/api/equipments/useEquipmentsQuery";
import { ActionIcon, Autocomplete, AutocompleteProps } from "@mantine/core";
import { useDebouncedValue } from "@mantine/hooks";
import { useEffect, useMemo, useRef, useState } from "react";

type AutocompleteItem<T> = { value: string; label: string; __item?: T };

export type EquipmentsGetAutocompleteProps<T = any> = {
  onSelect?: (item: T) => void;
  value?: string; // controlled code
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

export function EquipmentsGetAutocomplete<T = any>({
  onSelect,
  value: codeValue,
  onChange,
  defaultValue,
  label = "Equipments 검색",
  description,
  placeholder = "코드/이름으로 검색",
  pageSize = 10,
  minLength = 0,
  autocompleteProps,
  onClear,
  searchFields = ["code", "name"],
}: EquipmentsGetAutocompleteProps<T>) {
  const LOAD_MORE_VALUE = "__LOAD_MORE__" as const;
  const LOAD_MORE_LABEL = "더 보기…" as const;
  const [value, setValue] = useState<string>(defaultValue ?? "");
  const [debounced] = useDebouncedValue(value, 300);
  const [page, setPage] = useState(1);
  const [items, setItems] = useState<T[]>([]);
  const [hasMore, setHasMore] = useState(false);
  const [dropdownOpened, setDropdownOpened] = useState(false);
  const loadingMoreRef = useRef(false);

  const enabled = debounced.trim().length >= minLength;

  const { data: res, isFetching } = useEquipmentsEquipmentsGetQuery({
    search: enabled ? debounced : undefined,
    page: enabled ? page : 1,
    pageSize: enabled ? pageSize : pageSize,
    searchFields: enabled ? searchFields : undefined,
  } as any);

  useEffect(() => {
    setPage(1);
    setItems([]);
  }, [debounced]);

  useEffect(() => {
    const rows: T[] = ((res as any)?.data?.rows ?? []) as T[];
    if (!rows) return;
    setItems((prev) => (page === 1 ? rows : [...prev, ...rows]));
    setHasMore(Array.isArray(rows) && rows.length >= pageSize);
    loadingMoreRef.current = false;
  }, [res, pageSize, page]);

  useEffect(() => {
    if (typeof codeValue === "string") {
      setValue((prev) => (prev !== codeValue ? codeValue : prev));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [codeValue]);

  useEffect(() => {
    if (!codeValue) return;
    const found = (items as any[]).find(
      (r: any) => String(r?.code ?? r?.id ?? "") === String(codeValue)
    );
    if (found) {
      const label =
        found?.code && found?.name
          ? String(found.code) + " - " + String(found.name)
          : String(found?.code ?? found?.name ?? String(found?.id ?? ""));
      setValue(label);
    }
  }, [items, codeValue]);

  const data: AutocompleteItem<T>[] = useMemo(() => {
    const mapped: AutocompleteItem<T>[] = items.map((r: any) => {
      const label =
        r?.code && r?.name
          ? String(r.code) + " - " + String(r.name)
          : (r?.code ?? r?.name ?? String(r?.id ?? ""));
      const value = String(r?.code ?? r?.id ?? label);
      return { value, label, __item: r as T } as AutocompleteItem<T>;
    });
    if (enabled && hasMore)
      mapped.push({
        value: LOAD_MORE_VALUE,
        label: LOAD_MORE_LABEL,
      } as AutocompleteItem<T>);
    return mapped;
  }, [items, enabled, hasMore]);

  return (
    <Autocomplete
      label={label}
      description={
        description ?? (isFetching && enabled ? "불러오는 중…" : undefined)
      }
      placeholder={placeholder}
      value={value}
      onChange={(v) => {
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
          setTimeout(() => setValue((prev) => prev), 0);
          return;
        }
        const found = (data as AutocompleteItem<T>[]).find((d) => d.value === val);
        if (found?.__item && onSelect) onSelect(found.__item);
        onChange?.(val);
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
        ...(() => {
          const { value: _v, onChange: _oc, ...rest } = (autocompleteProps ?? {}) as any;
          return rest;
        })()
      }
    />
  );
}

// Sync external code to label display
// 1) when external value changes, set input to code to trigger search
// 2) when items update, map code -> label for display
// Note: placed at end to keep component concise
