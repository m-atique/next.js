"use client"
import { useEffect, useState } from "react"
import { todos } from "./store/data"
import { getAll } from "./functions/getall"
import IconCheck from "./components/tickicon"
import IconEdit from "./components/editIcon"
import IconDelete from "./components/deleteIcon"
import IconBxUndo from "./components/undoIcon"


export default function TodoList() {
    //----------------------------------------------setting states to get user dtata
    const [userTAsk, setUserTask] = useState('')

    useEffect(()=>{
        setUserTask(getAll)
    })    



    //-------------------------------------------rendreing html
    return (
        <>
         <div className="shadow-lg shadow-gray-500 rounded-md border-[1px] border-gray-200 mb:w-full sm:w-3/5 p-2 mb-6 overflow-y-scroll h-2/5">
          
            {todos.map((item, index) => {
                if(item.status ===true){

                    return (
                        <div className="flex flex-row my-2  ">
                        <button className="hover:font-extrabold rounded-l-full w-7 h-7  bg-teal-500 pl-1 hover:text-xl hover:text-white"><IconCheck /></button>
                        <input  disabled type="text" value={item.task}  className="pl-2  border-2 bg-gray-200 w-full" />
                        <button className="hover:font-extrabold w-7 h-7  pl-1 bg-yellow-300">
                            <IconEdit />
                        </button>
                        <button className="hover:font-extrabold rounded-r-full w-7 h-7 text-white bg-red-600 pl-[2px]">
                        <IconDelete />
                        </button>
                    </div>
                )
            }
            })}
            </div>
                <div className=" bg-gray-800 shadow-lg  shadow-slate-700 rounded-md border-[1px] border-black mb:w-full sm:w-3/5 p-2  h-1/4 overflow-y-scroll">
            {todos.map((item, index) => {
                if(item.status ===false){
                return(
                    <div className="flex flex-row my-2 ">
                    <button className="hover:font-extrabold rounded-l-full w-7 h-7 pl-1  bg-blue-500 ">
                        <IconBxUndo />
                    </button>
                    <input  disabled type="text" value={item.task}  className="pl-1  border-2 border-gray-900 bg-gray-900 text-white line-through w-full" />
                    <button className=" hover:font-extrabold relative rounded-r-full w-7 h-7 text-white bg-red-500 pl-1">
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