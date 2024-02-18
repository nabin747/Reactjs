import React from 'react'

const CustomInput = ({name,type,placeholder,lable,onChange}) => {
  return (
    <div>
        <label htmlFor={name}>{lable}</label>
        <input type={type} placeholder={placeholder} onChange={onChange} name={name}/>
    </div>
  )
}

export default CustomInput