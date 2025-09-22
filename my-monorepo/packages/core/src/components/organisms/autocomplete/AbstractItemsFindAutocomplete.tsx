import { useAbstractItemsAbstractItemsFindPostQuery } from "@core/hooks/api/abstract-items/useAbstractItemsQuery";
import { ActionIcon, Autocomplete, AutocompleteProps } from "@mantine/core";
import { useDebouncedValue } from "@mantine/hooks";
import { useMemo, useState } from "react";
import { Icon } from "../../atoms/Icon";

export type AbstractItemsFindAutocompleteProps<T = any> = {
  onSelect?: (item: T) => void;
  label?: string;
  description?: string;
  placeholder?: string;
  limit?: number;
  minLength?: number;
  autocompleteProps?: Partial<AutocompleteProps>;
  onClear?: () => void;
};

export function AbstractItemsFindAutocomplete<T = any>({
  onSelect,
  label = "AbstractItems 검색",
  description,
  placeholder = "코드/이름으로 검색",
  limit = 20,
  minLength = 1,
  autocompleteProps,
  onClear,
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
      description={description}
      placeholder={placeholder}
      value={value}
      onChange={setValue}
      data={data}
      limit={limit}
      onOptionSubmit={(val) => {
        const item = map.get(val);
        setValue(val);
        if (item && onSelect) onSelect(item);
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
              onClear?.();
            }}
          >
            <Icon name="close" size={14} />
          </ActionIcon>
        ) : undefined
      }
      rightSectionPointerEvents="all"
      {...autocompleteProps}
    />
  );
}
