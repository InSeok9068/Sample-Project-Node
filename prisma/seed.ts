import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  // 회사(Company) 생성
  const company = await prisma.company.upsert({
    where: { id: 1 },
    update: {},
    create: { name: "Sample Company" },
  });

  // 부서(Department) 생성
  const department1 = await prisma.department.upsert({
    where: { id: 1 },
    update: {},
    create: { name: "Department A" },
  });
  const department2 = await prisma.department.upsert({
    where: { id: 2 },
    update: {},
    create: { name: "Department B" },
  });

  // 직급(Position) 생성
  const position1 = await prisma.position.upsert({
    where: { id: 1 },
    update: {},
    create: { name: "Manager" },
  });
  const position2 = await prisma.position.upsert({
    where: { id: 2 },
    update: {},
    create: { name: "Developer" },
  });

  // 직원(Employee) 생성
  const employee1 = await prisma.employee.upsert({
    where: { id: 1 },
    update: {},
    create: {
      firstName: "John",
      lastName: "Doe",
      companyId: company.id,
      departmentId: department1.id,
      positionId: position1.id,
    },
  });
  const employee2 = await prisma.employee.upsert({
    where: { id: 2 },
    update: {},
    create: {
      firstName: "Jane",
      lastName: "Smith",
      companyId: company.id,
      departmentId: department2.id,
      positionId: position2.id,
    },
  });

  // 급여(Salary) 생성
  const salary1 = await prisma.salary.upsert({
    where: { id: 1 },
    update: { amount: 50000 },
    create: { amount: 50000, employeeId: employee1.id },
  });
  const salary2 = await prisma.salary.upsert({
    where: { id: 2 },
    update: { amount: 60000 },
    create: { amount: 60000, employeeId: employee2.id },
  });

  console.log({
    company,
    department1,
    department2,
    position1,
    position2,
    employee1,
    employee2,
    salary1,
    salary2,
  });

  console.log("Example data upsert successfully!");
}

seed()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
