import React, { useState } from 'react'
import styles from './styles.module.css'
const Calculator = () => {
    const [result,setResult]=useState(0)
    const number =['C','()','%','/',7,8,9,'*',4,5,6,'-',1,2,3,'+',0,'.','='];
    const handleClick=(val)=>{
         console.log({val})
         if (typeof val === 'number' || val === '.') {
            // If the clicked value is a number or decimal point
            setResult((prevResult) => {
              if (prevResult === '0' || prevResult === 'Error') {
                return val.toString();
              } else {
                return prevResult + val.toString();
              }
            });
          } else if (val === 'C') {
            // If the clicked value is 'C' (clear)
            setResult('0');
          } else if (val === '=') {
            // If the clicked value is '=' (equals)
            try {
              // Use eval() with caution, it's not recommended for production use
              const evalResult = eval(result);
              setResult(evalResult.toString());
            } catch (error) {
              setResult('Error');
            }
          } else if (val==='*'){
            setResult((prevResult)=> prevResult + '*');
          }
          else {
            // If the clicked value is an operator (+, -, *, /)
            setResult((prevResult) => prevResult + val);
          }
        };
    
  return (
    <>
    <h1>Calculator</h1>
    <div className={styles.flex}>
    <textarea className={styles.textarea} value = {result}></textarea>
        <div className={styles.div}>
       {number.map((val,index)=>{
        return <button key={index} onClick={()=>handleClick(val)} className={styles.btn}>{val}</button>
       })}
    </div>
    </div>
    </>
  )
}

export default Calculator;