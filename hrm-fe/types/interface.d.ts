// employee.ts

export interface Employee {
  id?: string;
  name?: string;
  seniority?: string;
  email?: string;
  phone?: string;
  address?: string;
  birthplace?: string;
  position?: string;
}

export interface Payroll {
  id?: number;
  employeeName?: string;
  department?: string;
  salary?: number;
  deductions?: number;
  netPay?: number;
  status?: "Paid" | "Pending";
}
