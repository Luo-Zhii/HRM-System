import Link from "next/link";
import "../../../styles/globals.css";

const items = [
  { href: "/", label: "Dashboard" },
  { href: "/employees", label: "Employees" },
  { href: "/org", label: "Org Structure" },
  { href: "/payroll", label: "Payroll" },
  { href: "/reports", label: "Reports" },
  { href: "/settings", label: "Settings" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r">
      <div className="p-4 font-bold text-xl text-gray-800">Base HRM</div>
      <nav className="p-4">
        {items.map((i) => (
          <Link
            key={i.href}
            href={i.href}
            className="block py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
          >
            {i.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
