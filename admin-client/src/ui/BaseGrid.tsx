import { useState, useMemo, useEffect, FC } from "react";
import { Table, Pagination } from "react-bootstrap";
import {
  PaginationState,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import axios from "axios";

type BaseGridProps = {
  columns: any;
  gridUrl: string;
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
      setGridData(response?.data?.docs);
      setPageCount(response?.data?.pages);
    }

    fetchGridData();
  }, [pageIndex, pageSize, gridUrl]);

  return (
    <>
      <Table bordered striped hover>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
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
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="d-flex flex-row">
        <span className="d-flex items-center p-2">
          <div className="px-1">Page</div>
          <strong className="px-1">
            {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </strong>
          <div>Records</div>
        </span>
        <Pagination>
          <Pagination.First
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          />
          <Pagination.Prev
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          />
          <Pagination.Next
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          />
          <Pagination.Last
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          />
        </Pagination>
        <select
          className="form-select"
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
    </>
  );
};

export default BaseGrid;
