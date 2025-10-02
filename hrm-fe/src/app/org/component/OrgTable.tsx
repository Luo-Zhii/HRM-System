import Link from "next/link";
import { Employee } from "../../../../types/interface";

export default function EmployeeTable({
  employees,
  loading,
}: {
  employees: Employee[];
  loading: boolean;
}) {
  if (loading) return <div>Loading...</div>;
  return (
    <table className="w-full bg-white shadow-sm">
      <thead>
        <tr>
          <th className="p-2 text-left">Name</th>
          <th className="p-2 text-left">Position</th>
          <th className="p-2 text-left">Email</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((e) => (
          <tr key={e.id} className="border-t">
            <td className="p-2">
              <Link
                href={`/employees/${e.id}`}
                className="text-blue-600 hover:underline"
              >
                {e.name}
              </Link>
            </td>
            <td className="p-2">{e.position || "-"}</td>
            <td className="p-2">{e.email || "-"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
