"use client";

export default function ReportTable() {
  const reports = [
    { id: 1, title: "Monthly Payroll Report", date: "Sep 2025" },
    { id: 2, title: "Employee Turnover Report", date: "Q3 2025" },
  ];

  return (
    <table className="text-gray-800 w-full bg-white shadow-sm">
      <thead>
        <tr>
          <th className="p-2 text-left">Title</th>
          <th className="p-2 text-left">Date</th>
          <th className="p-2 text-left">Action</th>
        </tr>
      </thead>
      <tbody>
        {reports.map((r) => (
          <tr key={r.id} className="border-t">
            <td className="p-2">{r.title}</td>
            <td className="p-2">{r.date}</td>
            <td className="p-2">
              <button className="text-blue-600 hover:underline">View</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
