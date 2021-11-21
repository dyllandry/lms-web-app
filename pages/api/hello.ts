// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import type { User } from '@prisma/client'

const prisma = new PrismaClient()

type Data = User[]

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const allUsers = await prisma.user.findMany()
  res.status(200).json(allUsers)
}
