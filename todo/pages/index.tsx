"use client"
import { useEffect, useState } from "react"
import UserPage from "./users"
import { useRouter } from "next/router"
import AddTodo from "./add-todo"
import TodoList from "./list-todo"


export default function Home() {

  const [userName, setUser] = useState('')
  
  useEffect(()=>{
   
    const user =localStorage.getItem('user')
    if(user){
      setUser(user)
    }
  },[])

  if(userName !== ''){
    
    return (
      <div className="flex   h-screen bg-gray-50 justify-center items-center">
      <div className="flex flex-col relative overflow-hidden items-center bg-white  rounded-lg shadow-2xl h-5/6 w-3/4"> 
      <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-blue-400"></div>
      <div className="absolute -left-32 top-5 h-28 w-40 rotate-45   rounded-full bg-yellow-400"></div>
      
      <div className="absolute -right-24 -bottom-20 h-40 w-40 rounded-full bg-violet-500"></div>
      <div className="absolute -right-20 bottom-14 h-24 rotate-45 w-28   rounded-full bg-yellow-400"></div>
      
      <AddTodo  />
      <br />
      <TodoList/>
      </div>
      </div>
     )
  }
  else{
return(
  <UserPage />
)
   
  }
  
 
}
