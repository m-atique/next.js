"use client"
import { useEffect, useState } from "react"
import { getall } from "./functions/getall"

import IconCheck from "./components/tickicon"
import IconEdit from "./components/editIcon"
import IconDelete from "./components/deleteIcon"
import IconBxUndo from "./components/undoIcon"



export default function TodoList() {
    //----------------------------------------------setting states to get user dtata
    const [allTodos, setAlltodos] = useState([])
    const [newTask, setTask] = useState('')
    const [editIcon,setEditicon]= useState(<IconEdit />)

    //------------------------------------------getting all todos
  const getall = async () => {
    const response = await fetch('api/todo-api', {
      method: 'GET'
    })
    const tasks = await response.json()
    const Data =tasks.reverse()
    setAlltodos(Data) 
  } 
//-----------------------------------------------------------update todo
const updateTodo = async (todoId: number) => {
    const data = await fetch(`api/${todoId}`, {
      method: 'PATCH',
      body: JSON.stringify(newTask),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    getall()
  }
//---------------------------------------------------complted
const doneTodo = async (todoId: number) => {
    const data = await fetch(`api/${todoId}`, {
      method: 'PATCH',
      body: JSON.stringify(false),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    getall()
   
  }
  //-----------------------------------------------------------------undone
  
  const unDone = async (todoId: number) => {
    const data = await fetch(`api/${todoId}`, {
      method: 'PATCH',
      body: JSON.stringify(true),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    getall()
   
  }
    
  //----------------------------------------------------------del todo
    const delTodo = async (todoId: number) => {
      const response = await fetch(`api/${todoId}`, {
        method: 'DELETE',
      })
      getall()
    }
  
  
    
    //------------------------------------input enableing
  
    const enableInput = (id: number) => {
      const input = document.getElementById(`${id}`)
      if (input) {
        input.removeAttribute('disabled')
      }
      const editBtn = document.getElementById(`${id}` + "edit")
      if (editBtn) {
        if (editBtn.innerText === 'Edit'){

            editBtn.innerText = 'Update'
        }
  
        else {
          editBtn.innerText = 'Edit'
          updateTodo(id)
          
          if (input) {
            input.setAttribute('disabled', 'true')
  
          }
        }
      }
    }
  
    
    //--------------------------------------change text of input conditionally
    const changehandler = (newTask: string, index: number) => {
  
      const newData = [...allTodos]
      if (newData) {
        newData[index]['task'] = newTask
        setAlltodos(newData)
      }
    }
  
  
  
    //--------------------------------------------use efffect

    useEffect(()=>{
        getall()
    },[])    



    //-------------------------------------------rendreing html
           return (
            <>
         <div className="shadow-lg shadow-gray-500 rounded-md border-[1px] border-gray-200 mb:w-full sm:w-3/5 p-2 mb-6 overflow-y-scroll h-2/5">
          
            {allTodos.map((item, index) => {
                if(item.status ===true){

                    return (
                        <div className="flex flex-row my-2  ">
                        <button className="hover:font-extrabold rounded-l-full w-7 h-7  bg-teal-500 pl-1 hover:text-xl hover:text-white"
                        onClick={()=>doneTodo(item['id'])}>
                            <IconCheck />
                        </button>
                        <input  disabled  type="text" className="pl-2  border-2 border-b-teal-600 outline-none disabled:bg-gray-200 disabled:border-b-0 w-full" 
                        key={index}
                        value={item['task']}
                        onChange={(e) => changehandler(e.target.value, index)}
                        onMouseLeave={(e)=>setTask(e.target.value)}
                        id={item['id']}/>
                        <button className="hover:font-extrabold w-7 h-7  pl-1 bg-yellow-300"
                        id={item['id'] + "edit"} onClick={() => enableInput(item['id'])}>
                            {/* {editIcon} */}
                            Edit
                        </button>
                        <button className="hover:font-extrabold rounded-r-full w-7 h-7 text-white bg-red-600 pl-[2px]"
                        id={item['id']} onClick={() => delTodo(item['id'])}>
                        <IconDelete />
                        </button>
                    </div>
                )
            }
            })}
            </div>
                <div className=" bg-gray-800 shadow-lg  shadow-slate-700 rounded-md border-[1px] border-black mb:w-full sm:w-3/5 p-2  h-1/4 overflow-y-scroll">
            {allTodos.map((item, index) => {
                if(item.status ===false){
                return(
                    <div className="flex flex-row my-2 ">
                    <button className="hover:font-extrabold rounded-l-full w-7 h-7 pl-1  bg-blue-500 "
                    onClick={()=>unDone(item['id'])}>
                        <IconBxUndo />
                    </button>
                    <input key = {index} disabled type="text"   className="pl-1  border-2 border-gray-900 bg-gray-900 text-white line-through w-full"
                    id={item['id']}  value={item['task']} />
                    <button className=" hover:font-extrabold relative rounded-r-full w-7 h-7 text-white bg-red-500 pl-1"
                    id={item['id']} onClick={() => delTodo(item['id'])}>
                       <IconDelete />
                    </button>
                </div>
                )
                }
            })}
                </div>
        </>
        
    )
}











// // <div className="sm:w-3/4 mb:w-full p-2 justify-center items-center">
// <div className="ml-8 mb:ml-0">
// <button className=" h-5 w-5  mb:rounded-md mb:mt-3  mb:w-full sm:rounded-r-none outline-green-500 outline outline-1 bg-green-500 t-4">*</button>
// <input type="text" className=" h-5 border-1 sm:rounded-r-none p-1 focus:outline-none  focus:border-blue-400  sm:w-5/6 mb:w-full mb:rounded-md"
//     value={item.task}
// />
// <button className=" h-5 w-5  mb:rounded-md mb:mt-3  mb:w-full  outline-blue-500 outline outline-2 bg-blue-500 t-4">E</button>
// <button className=" h-5 w-5  mb:rounded-md mb:mt-3  mb:w-full sm:rounded-l-none outline-red-500 outline outline-1 bg-red-500 t-4">D</button>
// </div>
// // </div>