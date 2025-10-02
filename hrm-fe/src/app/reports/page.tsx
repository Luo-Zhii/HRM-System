import ReportTable from "./component/ReportTable";
import ReportToolbar from "./component/ReportToolbar";

export default function ReportsPage() {
  return (
    <section className="p-6">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-gray-800 text-2xl font-bold">Reports</h1>
        <ReportToolbar />
      </header>
      <ReportTable />
    </section>
  );
}
