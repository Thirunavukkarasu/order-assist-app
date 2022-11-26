import TableRow from "./TableRow";

export default function TableBody({ table }: any) {
  return (
    <tbody>
      {table.getRowModel().rows.map((row: any, idx: any) => (
        <TableRow key={idx} row={row} idx={idx} />
      ))}
    </tbody>
  );
}
