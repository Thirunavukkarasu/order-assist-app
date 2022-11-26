import {
  FaChevronLeft,
  FaChevronRight,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from "react-icons/fa";

export default function Pagination({ table }: any) {
  return (
    <div className="flex items-center justify-start pt-4 bg-white">
      <span className="flex items-center p-2">
        <div className="px-1">Page</div>
        <strong className="px-1">
          {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
        </strong>
        <div>Records</div>
      </span>
      <div className="flex items-center pr-2">
        <div
          className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
          onClick={() => table.setPageIndex(0)}
        >
          <span className="sr-only">First</span>
          <FaAngleDoubleLeft className="h-4 w-4" aria-hidden="true" />
        </div>
        <div
          className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
          onClick={() => table.previousPage()}
        >
          <span className="sr-only">Previous</span>
          <FaChevronLeft className="h-4 w-4" aria-hidden="true" />
        </div>
        <div
          className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
          onClick={() => table.nextPage()}
        >
          <span className="sr-only">Next</span>
          <FaChevronRight className="h-4 w-4" aria-hidden="true" />
        </div>
        <div
          className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
        >
          <span className="sr-only">Last</span>
          <FaAngleDoubleRight className="h-4 w-4" aria-hidden="true" />
        </div>
      </div>
      <select
        value={table.getState().pagination.pageSize}
        onChange={(e) => {
          table.setPageSize(Number(e.target.value));
        }}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-44 p-2.5"
      >
        {[10, 20, 30, 40, 50].map((pageSize) => (
          <option key={pageSize} value={pageSize}>
            Show {pageSize}
          </option>
        ))}
      </select>
    </div>
  );
}
