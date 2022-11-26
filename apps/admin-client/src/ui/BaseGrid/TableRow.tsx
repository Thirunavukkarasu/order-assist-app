import TableCell from "./TableCell";

export default function TableDataRow({ row, idx }: any) {
  const cls = "bg-white border-b hover:bg-gray-50";
  const bgCls = (idx + 1) % 2 === 0 ? "bg-slate-50" : "bg-white";

  return (
    <tr className={`${cls} ${bgCls}`}>
      {row.getVisibleCells().map((cell: any) => (
        <TableCell key={cell.id} cell={cell} />
      ))}
    </tr>
  );
}
