import { useAbstractItemsAbstractItemsFindPostQuery } from "@core/hooks/api/abstract-items/useAbstractItemsQuery";
import { Autocomplete, AutocompleteProps } from "@mantine/core";
import { useDebouncedValue } from "@mantine/hooks";
import { useMemo, useState } from "react";

export type AbstractItemsFindAutocompleteProps<T = any> = {
  onSelect?: (item: T) => void;
  label?: string;
  placeholder?: string;
  limit?: number;
  minLength?: number;
  autocompleteProps?: Partial<AutocompleteProps>;
};

export function AbstractItemsFindAutocomplete<T = any>({
  onSelect,
  label = "AbstractItems 검색",
  placeholder = "코드/이름으로 검색",
  limit = 20,
  minLength = 1,
  autocompleteProps,
}: AbstractItemsFindAutocompleteProps<T>) {
  const [value, setValue] = useState("");
  const [debounced] = useDebouncedValue(value, 300);

  const enabled = debounced.trim().length >= minLength;

  // NOTE: generator cannot infer the exact request type here; use any for template
  const { data: rows } = useAbstractItemsAbstractItemsFindPostQuery({} as any);
  const items: T[] = (rows?.data ?? []) as T[];

  const { data, map } = useMemo(() => {
    const m = new Map<string, T>();
    const d = items.slice(0, limit).map((r: any) => {
      const label = r?.code && r?.name ? (String(r.code) + " - " + String(r.name)) : (r?.code ?? r?.name ?? String(r?.id ?? ""));
      const key = String(label) + "#" + String(r?.id ?? label); // reduce collision risk
      m.set(key, r as T);
      return key;
    });
    return { data: d, map: m };
  }, [rows, limit]);

  return (
    <Autocomplete
      label={label}
      placeholder={placeholder}
      value={value}
      onChange={setValue}
      data={data}
      limit={limit}
      onOptionSubmit={(val) => {
        const item = map.get(val);
        if (item && onSelect) onSelect(item);
      }}
      {...autocompleteProps}
    />
  );
}
