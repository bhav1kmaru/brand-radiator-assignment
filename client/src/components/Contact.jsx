import axios from 'axios'
import React, { useState } from 'react'
import { api } from '../api'

const Contact = () => {
    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [email,setEmail]=useState('')
    const [message,setMessage]=useState('')

    const handleSubmit=async()=>{
     
     try {
        let response = await axios.post(`${api}/forms`, {
          firstName,
          lastName,
          email,
          message,
        });
        console.log(response)
        alert(response.data.message)
     } catch (error) {
        console.log(error)
     }
    }
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <h1>Brand Radiator | Contact Us</h1>
        <label>First Name </label>
        <input value={firstName} onChange={(e)=>setFirstName(e.target.value)} type="text" placeholder="eg: John" />
        <br />
        <br />
        <label>Last Name </label>
        <input value={lastName} onChange={(e)=>setLastName(e.target.value)} type="text" placeholder="eg: Doe" />
        <br />
        <br />
        <label>Email Address </label>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="eg: john@example.com" /><br /><br />
        <label>Message </label><br />
        <textarea value={message} onChange={(e)=>setMessage(e.target.value)} style={{height:"100px",width:"200px"}} /> <br /><br />
        <button onClick={handleSubmit} style={{padding:"10px",backgroundColor:"black",color:"white",borderRadius:"10px",cursor:"pointer"}}>Contact Us</button>
      </div>
    </div>
  );
}

export default Contact