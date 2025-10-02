export default function OrgToolbar() {
  return (
    <div className="flex gap-2">
      <button className="px-4 py-2 bg-blue-600 text-white rounded">
        Add Department
      </button>
      <button className="px-4 py-2 border rounded">Rearrange</button>
      <button className="px-4 py-2 border rounded">Export Chart</button>
    </div>
  );
}
