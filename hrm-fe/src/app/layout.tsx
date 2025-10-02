import Sidebar from "@/component/layout/Sidebar";

export const metadata = { title: "HRM - Dashboard" };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="h-screen flex">
          <Sidebar />
          <main className="flex-1 bg-gray-50 p-6 overflow-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
