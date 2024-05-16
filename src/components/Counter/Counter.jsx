import React from 'react'
import { useState } from 'react'
const Counter = () => {
    const[count,setCount] = useState(0)
  const handleincrement=()=>{
    setCount(count+1)
  }
  const handledecrement=()=>{
    setCount(count-1)
  }
  return (
    
    <>

    <h1>Counter</h1>
    <button onClick={handleincrement} className='incr-button'>+</button>&nbsp;
   <h6 className='incr-button'>{count}</h6>&nbsp;
   <button onClick={handledecrement} className='incr-button'>-</button>
    </>
  )
}

export default Counter