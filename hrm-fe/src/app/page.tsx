import { getEmployees } from "../../lib/api";
import EmployeeTable from "./employees/component/EmployeeTable";
import EmployeeToolbar from "./employees/component/EmployeeToolbar";

export default async function HomePage() {
  const employees = await getEmployees();

  return (
    <section className="p-6">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-gray-800 text-2xl font-bold">Employee Directory</h1>
        <EmployeeToolbar />
      </header>

      <EmployeeTable employees={employees} loading={false} />
    </section>
  );
}
