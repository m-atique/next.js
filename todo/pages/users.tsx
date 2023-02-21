"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function UserPage() {


    const [userName, setUser] = useState('')
    const [userId, setId] = useState(0)
    let allUsers:string[]=[]
    const router = useRouter()
    //----------------------------------getting all
    const getallUsers= async()=>{
        const response = await fetch('api/add-user', {
            method: 'GET'
          })
          const users:[] = await response.json()
          
          setId(users.length)
        users.map((item)=>{allUsers.push(item['name'])})
        

        }
    
    //------------------------adding new user
    const storeUser= async()=>{
        if(userName!==''){
//--------------------------------------
     if(allUsers.includes(userName)){
        alert('User already exists')
     }
     else{

         //-----------------------------adding to local storage as current user
         localStorage.setItem('user',userName) 
         //---------------------------------------------------ading user to prisma
         const data = await fetch('api/add-user',{
             method:'POST',
             body:JSON.stringify({
                 user:{
                     id:userId+1,
                     name:userName
                    }
                }),
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            //------------------------------------------reloading home page
            router.reload()
            setUser('')      
        }
            
        }
        else{
            alert('Please Enter a user name')
        }
    }
    //--------------------------------------------calling useEffect
    useEffect(()=>{
        getallUsers() 
          
    },[allUsers])
    //-------------------------------------rendering component
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