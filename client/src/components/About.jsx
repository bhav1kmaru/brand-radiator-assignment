import axios from 'axios'
import React, { useEffect, useState } from 'react'
import UserCard from './UserCard'
import { useMediaQuery } from '../hooks/useMediaQuery'

const About = () => {
  const [data,setData]=useState([])
  const isMd=useMediaQuery(960)

  const getData=async()=>{
    try {
      let response = await axios.get(
        `https://jsonplaceholder.typicode.com/users`
      );
      setData(response.data)
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getData()
  },[])

  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          gap:"20px",
          display: "grid",
          gridTemplateColumns: isMd ? "1fr 1fr" : "1fr 1fr 1fr 1fr",
        }}
      >
        {data.map((item) => (
          <UserCard item={item} />
        ))}
      </div>
    </div>
  );
}

export default About