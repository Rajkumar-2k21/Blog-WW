import React, { useState,useEffect } from 'react'


function App() {
const[data,setData] = useState([{}])
useEffect(()=>{
  fetch("/").then(
    res=>res.json()
    ).then(
      data=>{
        setData(data)
        console.log(data);
      }
    )
},[])
  return (
    <div>
        <h1>Hi, friends</h1>
        
    </div>
  )
}

export default App
