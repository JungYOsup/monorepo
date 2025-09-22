import { ActionIcon, Autocomplete, AutocompleteProps } from "@mantine/core";
import { useMemo, useState } from "react";
import { Icon } from "../atoms/Icon";

export type FindApiItem = {
  path: string;
  tag?: string;
  summary?: string;
};

export type FindApiAutocompleteProps = {
  items: FindApiItem[];
  onSelect?: (item: FindApiItem) => void;
  placeholder?: string;
  label?: string;
  description?: string;
  limit?: number;
  autocompleteProps?: Partial<AutocompleteProps>;
  onClear?: () => void;
};

export function FindApiAutocomplete({
  items,
  onSelect,
  placeholder = "Search GET endpoints...",
  label = "GET API",
  description,
  limit = 20,
  autocompleteProps,
  onClear,
}: FindApiAutocompleteProps) {
  const [value, setValue] = useState("");

  const data = useMemo(() => {
    const unique = new Set<string>();
    const sorted = [...items]
      .sort((a, b) => a.path.localeCompare(b.path))
      .map((i) => i.path)
      .filter((p) => {
        if (unique.has(p)) return false;
        unique.add(p);
        return true;
      });
    return sorted;
  }, [items]);

  const itemByPath = useMemo(() => {
    const map = new Map<string, FindApiItem>();
    for (const i of items) map.set(i.path, i);
    return map;
  }, [items]);

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
        const item = itemByPath.get(val);
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
