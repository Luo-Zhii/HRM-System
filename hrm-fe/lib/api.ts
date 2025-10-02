import { Employee, Payroll } from "../types/interface";

export async function getEmployees(): Promise<Employee[]> {
  return [
    {
      id: "1",
      name: "Tran Vien",
      seniority: "6 years 8 months 11 days",
      email: "ceo.baseinc@gmail.com",
      phone: "0906343477",
      address: "01 Ba Giang 10, Da Nang",
      birthplace: "Ho Chi Minh City",
      position: "HR",
    },
    {
      id: "2",
      name: "Nguyen Mai Phuong",
      seniority: "4 years 6 months 23 days",
      email: "trinh.baseinc@gmail.com",
      phone: "0790139700",
      address: "07 Xo Viet Nghe Tinh, Quang Ngai",
      birthplace: "Quang Ngai",
      position: "CTO",
    },
    {
      id: "3",
      name: "Phan Ken",
      seniority: "4 years 1 month 22 days",
      email: "ken.baseinc@gmail.com",
      phone: "0908728589",
      address: "224A Bach Dang, Quy Nhon",
      birthplace: "Quy Nhon",
      position: "CFO",
    },
  ];
}

// Tạo dữ liệu fake
export const getPayrolls = async (): Promise<Payroll[]> => {
  // Fake data mẫu
  const payrolls: Payroll[] = [
    {
      id: 1,
      employeeName: "Nguyen Van A",
      department: "IT",
      salary: 15000000,
      deductions: 2000000,
      netPay: 13000000,
      status: "Paid",
    },
    {
      id: 2,
      employeeName: "Tran Thi B",
      department: "HR",
      salary: 12000000,
      deductions: 1500000,
      netPay: 10500000,
      status: "Pending",
    },
    {
      id: 3,
      employeeName: "Le Van C",
      department: "Finance",
      salary: 18000000,
      deductions: 3000000,
      netPay: 15000000,
      status: "Paid",
    },
  ];

  return payrolls;
};
