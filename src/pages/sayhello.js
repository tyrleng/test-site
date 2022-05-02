import * as React from "react"

const Greeting = (props) => {
  return(
    <p>Hi {props.name}!</p>
  )
}

const SayHello = () => {
  return (
    <div>
      <Greeting name = "Tom"/>
      <Greeting name = "Harry"/>
      <Greeting name = "Dick"/>
    </div>
  )
}

export default SayHello