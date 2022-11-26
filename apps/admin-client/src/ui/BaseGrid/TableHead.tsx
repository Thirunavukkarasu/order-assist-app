import { flexRender } from "@tanstack/react-table";

export default function TableHead({ table }: any) {
  return (
    <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-800 dark:text-gray-400">
      {table.getHeaderGroups().map((headerGroup: any) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header: any) => (
            <th
              key={header.id}
              scope="col"
              className="py-3 px-6"
              colSpan={header.colSpan}
            >
              {header.isPlaceholder ? null : (
                <div
                  {...{
                    className: header.column.getCanSort()
                      ? "cursor-pointer select-none"
                      : "",
                    onClick: header.column.getToggleSortingHandler(),
                  }}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                  {{
                    asc: " 🔼",
                    desc: " 🔽",
                  }[header.column.getIsSorted() as string] ?? null}
                </div>
              )}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
}
