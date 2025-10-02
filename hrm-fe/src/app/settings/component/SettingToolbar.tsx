"use client";

export default function SettingsToolbar() {
  return (
    <div className="flex gap-2">
      <button className="px-4 py-2 bg-blue-600 text-white rounded">Save</button>
      <button className="px-4 py-2 border rounded">Reset</button>
    </div>
  );
}
