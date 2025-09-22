import { useItemsItemsFindPostQuery } from "@core/hooks/api/items/useItemsQuery";
import { Autocomplete, AutocompleteProps } from "@mantine/core";
import { useDebouncedValue } from "@mantine/hooks";
import type { ItemsGet200ResponseRowsInner } from "@sizlcorp/sizl-api-document/models/src/model/items-get200-response-rows-inner";
import { useMemo, useState } from "react";

export type ItemsFindAutocompleteProps = {
  onSelect?: (item: ItemsGet200ResponseRowsInner) => void;
  label?: string;
  placeholder?: string;
  limit?: number;
  minLength?: number;
  autocompleteProps?: Partial<AutocompleteProps>;
};

export function ItemsFindAutocomplete({
  onSelect,
  label = "품목 검색",
  placeholder = "코드/이름으로 검색",
  limit = 20,
  minLength = 1,
  autocompleteProps,
}: ItemsFindAutocompleteProps) {
  const [value, setValue] = useState("");
  const [debounced] = useDebouncedValue(value, 300);

  const enabled = debounced.trim().length >= minLength;

  const { data: rows } = useItemsItemsFindPostQuery({});
  const items = rows?.data ?? [];

  const { data, map } = useMemo(() => {
    const m = new Map<string, ItemsGet200ResponseRowsInner>();
    const d = items.slice(0, limit).map((r) => {
      const label =
        r.code && r.name
          ? `${r.code} - ${r.name}`
          : (r.code ?? r.name ?? String(r.id));
      const key = `${label}#${r.id}`; // reduce collision risk
      m.set(key, r);
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
