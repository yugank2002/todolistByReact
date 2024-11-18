"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")

  const [mainTask, setmainTask] = useState([])

  const submitHandeler = (e) =>{
    e.preventDefault()
    setmainTask([...mainTask,{title,desc}])
    settitle("")
    setdesc("")
  }
const deleteHandler = (i) =>{
  const updatedTask = mainTask.filter((task, index) => index !== i)
  setmainTask(updatedTask)

}

  let renderTask = <h2>No Task Avaliable</h2>

  if(mainTask.length>0){
    renderTask = mainTask.map((t,i)=>{
      return (
        
         <>
         <li key={i} className='flex bg-red items-center justify-between mb-5'>
           <div className='items-center w-2/3 '>
            
            <h5 className='text-xl font-semibold px-8 '>{i+1}-  {t.title}</h5>
            <p className='mx-8'>{t.desc}</p>
            
        </div>
        <button
        onClick={()=>{
          deleteHandler(i)
        }}
        className='bg-red-400 px-4 py-2 rounded text-white'>Delete</button>
         </li>
         <hr/>
         </>
        
      )
    })
  }
  return (
    <>
    <h1 className="bg-black text-white p-5 text-5xl font-bold ">My TODO List</h1>
    <form onSubmit={submitHandeler}>
      <input type="text" 
      placeholder="Enter your task" 
      className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2 "
      value={title}
      onChange={(e)=>{
        settitle(e.target.value)
      }}
      />
      <input type="text" 
      placeholder="Enter task Description" 
      className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2"
      value={desc}
      onChange={(e)=>{
        setdesc(e.target.value)
      }}
      />
      <button className='bg-black text-white border-4 px-4 py-2 text-2xl font-bold rounded m-5'>ADD TASK</button>
    </form>
    <hr/>
    <div className='p-5 ml-10 mr-10 '>
     <ul>{renderTask}</ul> 
    </div>
    </>
  )
}

export default page