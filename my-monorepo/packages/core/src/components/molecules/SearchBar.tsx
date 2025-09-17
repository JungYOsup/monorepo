import { Icon } from "../atoms/Icon";
import { Input } from "../atoms/Input";

export interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  onSearch?: () => void;
}

export function SearchBar({
  value,
  onChange,
  placeholder = "검색...",
  onSearch,
}: SearchBarProps) {
  return (
    <Input
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.currentTarget.value)}
      leftSection={<Icon name="search" size={16} />}
      onKeyPress={(e) => e.key === "Enter" && onSearch?.()}
    />
  );
}
