import TableBody from "./TableBody";
import TableDataRow from "./TableRow";
import TableHead from "./TableHead";

export default function Table({ table }: any) {
  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <TableHead table={table} />
      <TableBody table={table} />
    </table>
  );
}
