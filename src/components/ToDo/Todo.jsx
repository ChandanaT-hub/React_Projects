import React from 'react'
import { useState } from 'react'
const Todo = () => {
const[todos,setTodos] = useState([])
const[input,setInput] = useState('')
const handleChange=(e)=>{
    setInput(e.target.value)
    }
const handleClick=(e)=>{
    e.preventDefault()
    setTodos([...todos,input])
    setInput('')

}
 const handleDelete=(index)=>{
    console.log("clicked")
    const newTodos = [...todos];
    newTodos.splice(index,1);
    setTodos(newTodos);
 };
  return (
   <>
    <h1>TO DO LIST</h1>
    <form>
        <input type='text' onChange={handleChange} value={input} placeholder='what is yet to do'></input>
        <button onClick={handleClick}>Add</button>
    </form>
    <ul>{todos.map((todo,index)=>
        <li key={index}>{todo}
         <button onClick={()=> handleDelete(index)}>Delete</button> 
        </li>
)}</ul>
   </>
    
  )
}

export default Todo