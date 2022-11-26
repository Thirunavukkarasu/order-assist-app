import { flexRender } from "@tanstack/react-table";

export default function TableDataCell({ cell }: any) {
  return (
    <td className={`py-4 px-6`}>
      {flexRender(cell.column.columnDef.cell, cell.getContext())}
    </td>
  );
}
