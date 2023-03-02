export async function getall(){
    const response = await fetch('api/todo-api', {
      method: 'GET'
    })
    const tasks = await response.json()
    const Data =tasks.reverse()
     return(Data) 
  } 