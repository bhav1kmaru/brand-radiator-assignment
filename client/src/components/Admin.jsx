import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { api } from '../api'
import './Admin.css'

const Admin = () => {
  const [data,setData]=useState([])
  const getData=async()=>{
    try {
      let response=await axios.get(`${api}/forms`)
      console.log(response.data)
      setData(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getData()
  },[])
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
        <h1>Brand Radiator | Admin Dashboard</h1>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item)=><tr>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.email}</td>
              <td>{item.message}</td>
              <td>{item.time}</td>
            </tr>)}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Admin