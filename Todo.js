import React from 'react'
import { useState } from 'react';

function Todo() {
const [newtodo,setnewtodo]= useState("");
const [todolist, settodolist]=useState([]);

const handleSubmit= (e)=>{
    e.preventDefault();
    console.log(newtodo);
    if(newtodo){
      settodolist([...todolist,{content:newtodo,completed:false,checked:false}]);
      setnewtodo("");
    }
    localStorage.setItem("list",todolist);
    let a= localStorage.getItem("list");
    console.log(a);
}

const handleDelete= (index)=>{
    const copytodolist= [...todolist];
    const deletedlist = copytodolist.filter((el)=>el!= copytodolist[index]);
    settodolist(deletedlist);


}

const handleChange= (index)=>{
    const copytodolist= [...todolist];
    
        copytodolist[index].completed= ! (copytodolist[index].completed);
    
    settodolist(copytodolist);
    
}
  return (
    <>
      <div>
        <h1>To Do List</h1>
        {/* <h2>HI</h2> */}
      <form  onSubmit={handleSubmit}>
          <input type='text' value={newtodo} onChange={(e)=>setnewtodo(e.target.value)} placeholder='enter Task' />
          <button type='submit'>Add to </button>
   
      </form>

      <ul style={{listStyle:'none'}}>
        {todolist.map((task,index)=>
            <li key={index}>
                <input 
                type='checkbox' 
                checked={task.completed} 
                onChange={()=>handleChange(index)}

                />
                <span  style={{textDecoration: task.completed ?'line-through':'none'}}>{task.content}</span>
                <button onClick={()=>handleDelete(index)}>Delete</button>
            </li>
        )}
      </ul>
      </div>

    </>
  
    
  )
}

export default Todo;