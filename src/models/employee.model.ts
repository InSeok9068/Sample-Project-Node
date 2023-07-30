import { prisma } from "../configs";

const getEmployeeDB = async (id: number) => {
  return prisma.employee.findUnique({
    where: { id },
  });
};

export { getEmployeeDB };
