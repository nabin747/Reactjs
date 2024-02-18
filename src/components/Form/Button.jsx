import React from 'react'

const Button = ({value,type,onClick}) => {
  return (
    <div>
        <button onClick={onClick} type={type}>{value}</button>
    </div>
  )
}

export default Button
