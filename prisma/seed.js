import prisma from "../libs/PrismaClient.js";
import { faker } from "@faker-js/faker";

// logica del seed
async function main() {
  console.log("Seeding start");

  /**
   *  CREAZIONE DI CATEGORIE (10x)
   *
   * 1. uso libreria fakerjs.dev che crea automaticamente dati casuali
   * 2. uso uniqueArray perchè mi serve un array univoco di categorie
   * 3. uso map() perchè createMany() si aspetta di ricevere un array di oggetti con una struttura come quella del modello
   * 4. utilizzo createMany() per inserire le categorie nel database
   * 5. scipDuplicates inserisce le categorie nuove e ignora quelle che violano un vincolo di unicità
   * 6. uso findMany() in modo da verificare che siano inserite nel db e poterle usare in futuro, perchè sono in variabile
   * */

  const categoriesNames = faker.helpers
    .uniqueArray(faker.book.genre, 10)
    .map((name) => ({ title: name })); // forma abbreviata di map()

  await prisma.category.createMany({
    data: categoriesNames,
    skipDuplicates: true,
  });

  const categories = await prisma.category.findMany();

  console.log(categories);
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
