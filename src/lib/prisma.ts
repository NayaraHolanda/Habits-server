import { PrismaClient } from '@prisma/client'

// Conexão com o BD
export const prisma = new PrismaClient({
  // log: ['query']
})
