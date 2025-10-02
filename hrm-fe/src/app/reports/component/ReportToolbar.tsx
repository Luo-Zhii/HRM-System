"use client";

export default function ReportToolbar() {
  return (
    <div className="flex gap-2">
      <button className="px-4 py-2 bg-blue-600 text-white rounded">
        Generate Report
      </button>
      <button className="px-4 py-2 border rounded">Filter</button>
      <button className="px-4 py-2 border rounded">Export PDF</button>
    </div>
  );
}
