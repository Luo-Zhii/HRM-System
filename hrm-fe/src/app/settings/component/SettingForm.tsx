"use client";

export default function SettingsForm() {
  return (
    <form className="text-gray-800 bg-white p-6 shadow rounded space-y-4">
      <div>
        <label className="block text-sm font-medium">System Name</label>
        <input
          type="text"
          defaultValue="HRM-System"
          className="mt-1 w-full border rounded p-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Default Language</label>
        <select className="mt-1 w-full border rounded p-2">
          <option>English</option>
          <option>Vietnamese</option>
        </select>
      </div>

      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Save
      </button>
    </form>
  );
}
