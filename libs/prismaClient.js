import "dotenv/config";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "../generated/prisma/index.js";

// creo l'oggetto adapter che grazie alla classe PrismaMariaDb riesce a collegarsi tramite il .env al database
const adapter = new PrismaMariaDb(process.env.DATABASE_URL);

// creo l'oggetto prisma che permette al Client, grazie all'uso di un adapter, di interagire con il db
const prisma = new PrismaClient({
  adapter: adapter, // posso scrivere solo adapter
});

export default prisma;
