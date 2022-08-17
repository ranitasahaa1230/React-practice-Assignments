import React from 'react'

const Input = ({color,setColor}) => {
  return (
    <div>
        <input type="text" value={color} placeholder="Enter color" onChange={(e)=>setColor(e.target.value)}/>
    </div>
  )
}

export default Input