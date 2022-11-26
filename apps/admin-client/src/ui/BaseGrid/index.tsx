import { useState, useMemo, useEffect, FC } from "react";
import {
  PaginationState,
  createColumnHelper,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  SortingState,
} from "@tanstack/react-table";
import axios from "axios";
import { get } from "lodash";

import Table from "./Table";
import Pagination from "./Pagination";
import IndeterminateCheckbox from "./IndeterminateCheckbox";

type BaseGridProps = {
  columns: any;
  gridUrl: string;
};

const addChekboxColumn = () => {
  const checkboxColumn = {
    id: "select",
    header: ({ table }: any) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }: any) => (
      <div className="px-1">
        <IndeterminateCheckbox
          {...{
            checked: row.getIsSelected(),
            indeterminate: row.getIsSomeSelected(),
            onChange: row.getToggleSelectedHandler(),
          }}
        />
      </div>
    ),
  };

  return checkboxColumn;
};

const BaseGrid: FC<BaseGridProps> = ({ columns, gridUrl }) => {
  const [gridData, setGridData] = useState([]);
  const [pageCount, setPageCount] = useState(-1);
  const [sorting, setSorting] = useState<SortingState>([
    {
      id: "createdAt",
      desc: true,
    },
  ]);
  const [rowSelection, setRowSelection] = useState({});
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
    columns: [addChekboxColumn(), ...finalColumns],
    pageCount: pageCount || -1,
    state: {
      pagination,
      sorting,
      rowSelection,
    },
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    manualPagination: true,
  });

  useEffect(() => {
    async function fetchGridData() {
      const sortColumn = get(sorting, "0.id");
      const sortOrder = get(sorting, "0.desc") ? -1 : 1;
      const response = await axios({
        url: gridUrl,
        method: "post",
        data: {
          limit: pageSize,
          page: pageIndex + 1,
          sort: [[sortColumn, sortOrder]],
        },
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
  }, [pageIndex, pageSize, gridUrl, sorting]);

  return (
    <div className="overflow-x-auto relative">
      <Table table={table} />
      <Pagination table={table} />
    </div>
  );
};

export default BaseGrid;
