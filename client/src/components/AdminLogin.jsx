import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { api } from '../api'
import { AuthContext } from '../contexts/AuthContext'
import { useNavigate } from 'react-router'

const AdminLogin = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigate=useNavigate()
    const {isAuth,login}=useContext(AuthContext)
    const handleSubmit=async()=>{
        try {
            let response=await axios.post(`${api}/admin/login`,{email,password})
            if(response.data.token){
                alert(response.data.message)
                login()
            }
        } catch (error) {
            console.log(error.message)
            alert(error.message)
        }
    }

    useEffect(()=>{
        if(isAuth){
            navigate('/admin')
        }
    },[isAuth])

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
        <h1>Brand Radiator | Admin Login</h1>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="email address" />
        <br />
        <br />
        <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="password" />
        <br />
        <br />
        <button onClick={handleSubmit} style={{cursor:"pointer",backgroundColor:"black",padding:"10px",color:"white",borderRadius:"10px",border:"none"}}>Login</button>
      </div>
    </div>
  );
}

export default AdminLogin