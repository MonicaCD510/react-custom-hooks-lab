import usePagination from "../hooks/usePagination";

export default function PaginationDemo() {
  const items = Array.from({ length: 100 }, (_, index) => `Item ${index + 1}`);

  const { startIndex, endIndex } = usePagination(items.length, 10);

  const currentItems = items.slice(startIndex, endIndex + 1);

  return (
    <div>
      <h2>Pagination Demo</h2>

      {currentItems.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
}