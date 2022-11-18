import { useState, useMemo, useEffect, FC } from "react";
import {
  PaginationState,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  FaChevronLeft,
  FaChevronRight,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from "react-icons/fa";
import axios from "axios";

type BaseGridProps = {
  columns: any;
  gridUrl: string;
};

const Pagination = ({ table }: any) => {
  return (
    <div className="flex items-center pt-4 bg-white">
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
          <FaAngleDoubleLeft className="h-5 w-5" aria-hidden="true" />
        </div>
        <div
          className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
          onClick={() => table.previousPage()}
        >
          <span className="sr-only">Previous</span>
          <FaChevronLeft className="h-5 w-5" aria-hidden="true" />
        </div>
        <div
          className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
          onClick={() => table.nextPage()}
        >
          <span className="sr-only">Next</span>
          <FaChevronRight className="h-5 w-5" aria-hidden="true" />
        </div>
        <div
          className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
        >
          <span className="sr-only">Last</span>
          <FaAngleDoubleRight className="h-5 w-5" aria-hidden="true" />
        </div>
      </div>
      <select
        value={table.getState().pagination.pageSize}
        onChange={(e) => {
          table.setPageSize(Number(e.target.value));
        }}
        style={{ width: "200px", height: "40px" }}
      >
        {[10, 20, 30, 40, 50].map((pageSize) => (
          <option key={pageSize} value={pageSize}>
            Show {pageSize}
          </option>
        ))}
      </select>
    </div>
  );
};

const Table = ({ table }: any) => {
  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-800 dark:text-gray-400">
        {table.getHeaderGroups().map((headerGroup: any) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header: any) => (
              <th key={header.id} scope="col" className="py-3 px-6">
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row: any) => (
          <tr key={row.id} className="bg-white border-b">
            {row.getVisibleCells().map((cell: any) => (
              <td key={cell.id} className="py-4 px-6">
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const BaseGrid: FC<BaseGridProps> = ({ columns, gridUrl }) => {
  const [gridData, setGridData] = useState([]);
  const [pageCount, setPageCount] = useState(-1);
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const pagination = useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize]
  );
  const columnHelper = createColumnHelper<any>();

  const finalColumns = columns.map((col: any) => {
    let options: any = {};

    options.header = col.header;
    if (col.formatter) {
      options.cell = col.formatter;
    }
    return columnHelper.accessor(col.dataIndex, options);
  });

  const table = useReactTable({
    data: gridData,
    columns: finalColumns,
    pageCount: pageCount || -1,
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    manualPagination: true,
  });

  useEffect(() => {
    async function fetchGridData() {
      const response = await axios({
        url: `${gridUrl}?limit=${pageSize}&page=${pageIndex + 1}`,
        method: "get",
      });
      const pages =
        response?.data?.total &&
        Math.ceil(
          Number(response?.data?.total) / Number(response?.data?.limit)
        );
      setGridData(response?.data?.docs);
      setPageCount(pages);
    }

    fetchGridData();
  }, [pageIndex, pageSize, gridUrl]);

  return (
    <div className="overflow-x-auto relative">
      <Table table={table} />
      <Pagination table={table} />
    </div>
  );
};

export default BaseGrid;
