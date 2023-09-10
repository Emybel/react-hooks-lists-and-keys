import React from 'react'

function ColorItem(props) {
    console.log(props)
  return (
    <li style={props.color} >{props.color}</li>
  )
}
export default ColorItem