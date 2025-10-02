import OverviewCard from "@/component/OverviewCard";
import PayrollTable from "./component/PayrollTable";
import { getPayrolls } from "../../../lib/api";
import PayrollToolbar from "./component/PayrollToolbar";

export default async function PayrollPage() {
  const payrolls = await getPayrolls();

  return (
    <section className="p-6">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-gray-800 text-2xl font-bold">Payroll Management</h1>
        <PayrollToolbar />
      </header>

      <div className="text-gray-800 grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <OverviewCard title="Total Employees Paid" value={payrolls.length} />
        <OverviewCard title="Total Payroll (This Month)" value={"$120,000"} />
        <OverviewCard title="Pending Approvals" value={3} />
      </div>

      <PayrollTable data={payrolls} />
    </section>
  );
}
