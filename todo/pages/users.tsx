"use client"
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function UserPage() {
    const [userName, setUser] = useState('')
    const router = useRouter()
    const storeUser=()=>{
        if(userName!==''){
            localStorage.setItem('user',userName) 
            router.reload()
            setUser('')      
            
        }
        else{
            alert('Please Enter a user name')
        }
        console.log(localStorage.getItem('user'))
    }
    return (
        <div className="flex center bg-slate-50 items-center justify-center h-screen">
            <div className=" flex flex-col rounded-xl p-8 w-auto h-4/6 justify-center items-center  bg-white shadow-lg shadow-slate-400">
                <input
                className=" border-2 rounded-md p-2
                 focus:outline-none
                 focus:border-none
                 focus:outline-blue-500"
                 value={userName}
                 onChange={e=>setUser(e.target.value)}
                 type="text"
                  placeholder="Please enter user name "
                   />
                  
                <button
                    className="p-2 w-full text-center border-2
                     bg-gradient-to-l text-lg font-medium from-blue-500  via-sky-400 to-blue-500
                     rounded-lg m-8" 
                     onClick={()=>storeUser()}>
                       Register
                        </button>
              </div>

        </div>
    )

}