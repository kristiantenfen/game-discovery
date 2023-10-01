interface IPagination {
  page?: number;
  pageSize?: number;
  onChange: (meta: { page: number; page_size: number }) => void;
}

export default function Pagination({
  page = 1,
  pageSize: page_size = 10,
  onChange,
}: IPagination) {
  return (
    <div
      className="flex justify-between w-full"
      data-testid="pagination-component"
    >
      <select
        aria-label="Items per page"
        className="p-2 dark:bg-slate-950 border border-gray-300 dark:border-gray-800 rounded-lg text-gray-500"
        onChange={(e) => onChange({ page_size: Number(e.target.value), page })}
      >
        <option value="10" aria-label="10">
          10
        </option>
        <option value="25" aria-label="25">
          25
        </option>
        <option value="50" aria-label="50">
          50
        </option>
        <option value="100" aria-label="100">
          100
        </option>
      </select>
      <div className="flex mx-2 gap-2">
        <button
          aria-label="Previous page"
          disabled={page < 2}
          className="p-2 border rounded-lg border-gray-300 dark:border-gray-800 text-gray-500"
          onClick={() => onChange({ page_size, page: page - 1 })}
        >
          PREVIOUS
        </button>
        <button
          aria-label="Next page"
          className="p-2 border rounded-lg border-gray-300 dark:border-gray-800 text-gray-500"
          onClick={() => onChange({ page_size, page: page + 1 })}
        >
          NEXT
        </button>
      </div>
    </div>
  );
}
