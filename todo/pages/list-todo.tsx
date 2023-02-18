"use client"
import { useState } from "react"


export default function TodoList() {
    //----------------------------------------------setting states to get user dtata
    const [userTAsk, setUserTask] = useState('')

    const todos = [
        { id: 1, task: 'todo1', status: true },
        { id: 2, task: 'todo2', status: true },
        { id: 3, task: 'todo3', status: false },
        { id: 4, task: 'todo4', status: true },
        { id: 5, task: 'todo5', status: false },
        { id: 1, task: 'todo1', status: false },
        { id: 2, task: 'todo2', status: true },
        { id: 3, task: 'todo3', status: false },
        { id: 1, task: 'todo1', status: true },
        { id: 2, task: 'todo2', status: true },
        { id: 3, task: 'todo3', status: false },
        { id: 4, task: 'todo4', status: true },
        { id: 5, task: 'todo5', status: false },
        { id: 1, task: 'todo1', status: false },
        { id: 2, task: 'todo2', status: true },
        { id: 3, task: 'todo3', status: false },
       
        
    ]



    //-------------------------------------------rendreing html
    return (
        <>
         <div className="shadow-lg shadow-gray-500 rounded-md border-[1px] border-gray-200 mb:w-full sm:w-3/5 p-2 mb-6 overflow-y-scroll h-2/6">
          
            {todos.map((item, index) => {
                if(item.status ===true){

                    return (
                        <div className="flex flex-row my-2  ">
                        <button className="hover:font-extrabold rounded-l-full w-7 h-7  bg-teal-500 ">O</button>
                        <input  disabled type="text" value={item.task}  className="pl-2  border-2 bg-gray-200 w-full" />
                        <button className="hover:font-extrabold w-7 h-7  bg-yellow-300">E</button>
                        <button className="hover:font-extrabold rounded-r-full w-7 h-7 text-white bg-red-600">D</button>
                    </div>
                )
            }
            })}
            </div>
                <div className=" bg-gray-800 shadow-lg  shadow-slate-700 rounded-md border-[1px] border-black mb:w-full sm:w-3/5 p-2  h-2/6 overflow-y-scroll">
            {todos.map((item, index) => {
                if(item.status ===false){
                return(
                    <div className="flex flex-row my-2 ">
                    <button className="hover:font-extrabold rounded-l-full w-7 h-7  bg-blue-500 ">O</button>
                    <input  disabled type="text" value={item.task}  className="pl-2  border-2 border-gray-900 bg-gray-900 text-white line-through w-full" />
                    <button className=" hover:font-extrabold relative rounded-r-full w-7 h-7 text-white bg-red-500">
                       D
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