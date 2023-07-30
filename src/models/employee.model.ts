import { prisma } from "../configs";

const getEmployeeDB = async (id: number) => {
  console.log(id);
  const employee = await prisma.employee.findUnique({
    where: { id },
  });

  console.log(employee);

  return employee;
};

export { getEmployeeDB };
