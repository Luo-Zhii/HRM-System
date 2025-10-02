"use client";

import { useState } from "react";

export default function EmployeeToolbar() {
  const [query, setQuery] = useState("");

  return (
    <div className="flex gap-4">
      <input
        type="text"
        placeholder="Search employees..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border rounded-lg px-3 py-2 w-72"
      />
      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
        + Add Employee
      </button>
    </div>
  );
}
