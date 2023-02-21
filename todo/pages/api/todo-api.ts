// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'   
import { Prisma,PrismaClient } from '@prisma/client'


const prisma= new PrismaClient()
export default async function handler(req: NextApiRequest,res: NextApiResponse) {
  if(req.method === 'GET'){
    const todos =await prisma.todos.findMany()
    res.status(200).json(todos)
  }
  else if (req.method === 'POST'){
    const newTodo:Prisma.TodosCreateInput = req.body.todo
    const savedTodo = await prisma.todos.create({data:newTodo})
    res.status(201).json(savedTodo)
  }
}
