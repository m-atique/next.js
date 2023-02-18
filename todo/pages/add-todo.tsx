"use client"

import { relative } from "path"
import { useState } from "react"


export default function AddTodo(){
    //----------------------------------------------setting states to get user dtata
    const [userTAsk,setUserTask] = useState('')
    //-------------------------------------------rendreing html
    return(
        <div className="sm:w-3/4 mb:w-full p-2 my-6 justify-center items-center">
       <div className="sm:ml-16 mb:ml-0">
        <input type="text" className="  border-2 sm:rounded-r-none p-2 pl-8 focus:outline-none  focus:border-blue-400  sm:w-5/6 mb:w-full mb:rounded-full" 
        placeholder="Write new todo here"
        value ={userTAsk} 
        onChange={e=>setUserTask(e.target.value)} />
       <button className=" text-white h-10 sm:w-10  mb:rounded-full mb:mt-3  mb:w-full sm:rounded-l-none outline-blue-600 outline outline-2 bg-blue-600 t-4
        hover:font-extrabold text-center
       ">+</button>
        </div>
        </div>
    )
}