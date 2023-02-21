// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'   
import { Prisma,PrismaClient } from '@prisma/client'


const prisma= new PrismaClient()
export default async function handler(req: NextApiRequest,res: NextApiResponse) {
  if(req.method === 'GET'){
    const user =await prisma.user.findMany()
    res.status(200).json(user)
  }
  else if (req.method === 'POST'){
    const newUser:Prisma.UserCreateInput = req.body.user
    const savedUser = await prisma.user.create({data:newUser})
    res.status(201).json(savedUser)
  }
}
