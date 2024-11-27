import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [task,setTask]=useState("")
  const [todo,setTodo]=useState([])
  let [count,setCount]=useState(0)

 


  const addTask=async(e)=>{
    try {
      // console.log(task);
      const res= await fetch("http://localhost:3000/api/add",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({task})
       

      })
      setCount(count+=1)
      setTask(" ")
      // console.log(res);
      
    } catch (error) {
      
    }

  }

  useEffect(()=>{
    fetchData()
  },[count])

  const fetchData=async()=>{
    const res = await fetch("http://localhost:3000/api/display")
    // console.log(res);
    const data = await res.json()
    // console.log(data);
    setTodo([...data])
  }

  const deleteTask=async(_id)=>{
    // console.log(_id);
    await fetch(`http://localhost:3000/api/delete/${_id}`,{
      method:"DELETE"
    })
    setCount(count+=1)

    
  }

//  console.log(todo);
 
  
  return (
    <>
      <div className="main">
        <div className="box">
          <h2>TO-DO APP</h2>
          <input type="text" placeholder='ADD TASK' value={task} onChange={(e)=>setTask(e.target.value)} />
          <button className='add-btn' onClick={addTask}>ADD</button>
          {todo.map((data,index)=>
           
            <div className="task" key={index}>{data.task}  <button className='delete-btn' onClick={()=>deleteTask(data._id)}>DELETE</button></div>
           
          )}
        </div>
      </div>
    </>
  )
}

export default App
