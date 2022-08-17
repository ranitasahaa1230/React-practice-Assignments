import React from 'react'

const Square = ({color,setColor}) => {
  return (
    <div className="square" style={{backgroundColor:color}}>
        {color ?  color: 'Enter value'}
    </div>
  )
}

Square.defaultProps={
    color:'Empty color value'
}

export default Square