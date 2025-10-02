"use client";
import Link from "next/link";
import { Payroll } from "../../../../types/interface";

export default function PayrollTable({ data }: { data: Payroll[] }) {
  return (
    <table className="text-gray-800 w-full bg-white shadow-sm">
      <thead>
        <tr>
          <th className="p-2 text-left">Employee</th>
          <th className="p-2 text-left">Department</th>
          <th className="p-2 text-left">Salary</th>
          <th className="p-2 text-left">Deductions</th>
          <th className="p-2 text-left">Net Pay</th>
          <th className="p-2 text-left">Status</th>
          <th className="p-2 text-left">Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((p) => (
          <tr key={p.id} className="border-t">
            <td className="p-2">{p.employeeName}</td>
            <td className="p-2">{p.department}</td>
            <td className="p-2">${p.salary}</td>
            <td className="p-2">${p.deductions}</td>
            <td className="p-2 font-semibold">${p.netPay}</td>
            <td className="p-2">{p.status}</td>
            <td className="p-2">
              <Link
                href={`/payroll/${p.id}`}
                className="text-blue-600 hover:underline"
              >
                View
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
