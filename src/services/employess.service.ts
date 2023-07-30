import { prisma } from "../configs";

const getEmployess = async (id: number) => {
  return prisma.employee.findUnique({
    where: {
      id,
    },
  });
};

export { getEmployess };
