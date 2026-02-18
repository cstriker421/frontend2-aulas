import { useMemo } from "react";

type FilteredListProps = {
  items: string[];
  filter: string;
};

export default function FilteredList({ items, filter }: FilteredListProps) {
  const filteredItems = useMemo(() => {
    return items.filter((item) =>
      item.toLowerCase().includes(filter.toLowerCase())
    );
  }, [items, filter]);

  return (
    <ul>
      {filteredItems.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
