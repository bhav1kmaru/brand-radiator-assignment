import React from 'react'

const UserCard = ({item}) => {
  return (
    <div>
        <img style={{height:"100px"}} src='https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png' />
        <h1>{item.name}</h1>
        <h2>{item.username}</h2>
        <h3>{item.email}</h3>
    </div>
  )
}

export default UserCard