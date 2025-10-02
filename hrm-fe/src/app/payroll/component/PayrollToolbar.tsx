"use client";

export default function PayrollToolbar() {
  return (
    <div className="flex gap-2">
      <button className="px-4 py-2 bg-green-600 text-white rounded">
        Run Payroll
      </button>
      <button className="px-4 py-2 border rounded">View History</button>
      <button className="px-4 py-2 border rounded">Export Report</button>
    </div>
  );
}
