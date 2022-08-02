import React from 'react'

export default function List(props) {
  return (
    <>
    <button onClick={()=>{
        props.onSelect(props.id)
    }}>X</button>
    <li >my name is {props.text} and my age is  {props.text2} years</li>
    
    
    
    </>
  )
}
