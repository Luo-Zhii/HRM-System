"use client";
import { useEffect, useState } from "react";
// import { employeeService } from "../../../lib/services/employeeService";
import { Employee } from "../../../types/interface";
import EmployeeTable from "./component/EmployeeTable";
import { getEmployees } from "../../../lib/api";

export default function EmployeesPage() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        // const data = await employeeService.list();
        const data = await getEmployees();
        setEmployees(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <section>
      <h1 className="text-gray-800 text-2xl font-bold ">Employee Directory</h1>

      <EmployeeTable loading={loading} employees={employees} />
    </section>
  );
}
