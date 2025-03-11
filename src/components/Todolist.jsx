import React, { useState } from 'react'

export default function Todolist() {
  let isLoggedIn = false 
  // let darkmode = false
  const[darkmode , setDarkmode] = useState(false);
  const[show, setShow] = useState(false);
  return (
    <div
    style={{
      color: darkmode ? "white" : "black",
      backgroundColor: darkmode ? "black" : "white"
    }}
    
    >
      {isLoggedIn && <p>Siz satti kirdiniz</p>}
      {isLoggedIn ?
      <p>Siz satti kirdiniz</p>
      :
      <p>Okinishke orai kiru bolmady</p>
      }
      {darkmode ? 
      <p>Qarangy rejimi qosuly</p> 
      : 
      <p>Zharyq rejimi qosuly</p>}
      
      <button onClick={()=> setDarkmode(!darkmode)}>
        {darkmode ? "light Mode" : "Dark Mode"}
      </button>

      <button onClick={() => setShow(!show)}>
        {show ? "Aqparat zhasyru" : "Aqparat zhasyryldy"}
      </button>
      {show && <p>Bul qosymsha</p>}
      
    </div>
  )
}

