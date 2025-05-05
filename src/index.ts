import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


async function main() {
  const allUsers = await prisma.user.create({
    data : {
        Username: 'Alice',
        email: 'adada@example.com',
        password: '123'
    }
  });
  console.log(allUsers);
}

main();