import prisma from "..libs/PrismaClient.js";

// logica del seed
async function main() {
  console.log("Seeding start");
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
