import { NextApiRequest,NextApiResponse } from "next";
import { Prisma,PrismaClient } from "@prisma/client";


export default async function handler(req:NextApiRequest,res:NextApiResponse){
    
   const {todoId}= req.query
   
//    if(req.method==='GET'){
//        const id = todos.find((todoItem)=>todoItem.id === parseInt(todoId))
//        res.status(200).json(id)
//        console.log(id)
//     }
//     else if (req.method === 'DELETE'){
//         const index = todos.findIndex((todoItem)=>todoItem.id === parseInt(todoId))
//         todos.splice(index,1)
//         res.status(203).json(todos[todoId])
//     }
//     else if(req.method === 'PATCH'){
//         const index = todos.findIndex((todoItem)=>todoItem.id === parseInt(todoId))
//         todos[index]['task'] = req.body
//         res.status(200).json(index)
//     }

const prisma = new PrismaClient()
const dataId = parseInt(todoId)
//------------------------------------------------------------get unique
if(req.method==='GET'){
   const todo:object|null = await prisma.todos.findUnique({
    where:{
        id:dataId
    }
   })
   res.status(200).json(todo)
   }
//----------------------------------------------------UPDATE
else if (req.method === 'PATCH'){
        if(req.body !== false && req.body !== true){
            const updateTask = await prisma.todos.update({
                where:{
                    id:dataId
                },
                data:{
                    task:req.body
                }
            })
            res.status(200).json(updateTask)
        }
        else {
            const updateTask = await prisma.todos.update({
                where:{
                    id:dataId
                },
                data:{
                    status:req.body
                }
            })
            res.status(200).json(updateTask)
        }

        }
//-----------------------------------------------------------------------

//-----------------------------------------------------------------DELETE
else if (req.method === 'DELETE'){
    const updateTask = await prisma.todos.delete({
        where:{
            id:dataId
        }
    })
    res.status(203).json(updateTask)
    }

}