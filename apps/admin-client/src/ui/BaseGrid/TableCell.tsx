import { flexRender } from "@tanstack/react-table";

export default function TableDataCell({ cell }: any) {
  return (
    <td className={`py-2 px-2`}>
      {flexRender(cell.column.columnDef.cell, cell.getContext())}
    </td>
  );
}
