import OrgChart from "./component/OrgChart";
import OrgToolbar from "./component/OrgToolbar";

export default function OrgPage() {
  return (
    <section className="p-6">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-gray-800 text-2xl font-bold">
          Organization Structure
        </h1>
        <OrgToolbar />
      </header>
      <OrgChart />
    </section>
  );
}
