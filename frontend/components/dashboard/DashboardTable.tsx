import type { TableColumn, TableRow } from "@/components/dashboard/dashboard-data";

type DashboardTableProps = {
  title: string;
  columns: TableColumn[];
  rows: TableRow[];
};

export function DashboardTable({ title, columns, rows }: DashboardTableProps) {
  return (
    <section className="rounded-2xl border border-[#d3d3d3] bg-white p-2">
      <h2 className="px-4 py-2 text-lg text-black">{title}</h2>

      <div className="overflow-x-auto px-4 pb-4">
        <div className="min-w-[430px]">
          <div className="flex gap-8 border-b border-transparent px-2 py-2 text-[15px] text-black">
            {columns.map((column) => (
              <span key={column.key} className={`shrink-0 ${column.className ?? ""}`}>
                {column.label}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-1">
            {rows.map((row, index) => (
              <div
                key={`${row.cveId}-${index}`}
                className="flex gap-8 rounded-2xl px-2 py-3.5 text-sm text-black"
              >
                {columns.map((column) => (
                  <span
                    key={column.key}
                    className={`shrink-0 ${column.className ?? ""}`}
                  >
                    {row[column.key]}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
