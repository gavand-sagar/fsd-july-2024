import React, { useState } from 'react'

export default function StateDemo() {


  // ywaaak variable 
  // let value = 10;  

  // let name = "Sagar";;
  // let [name, setName] = useState("Sagar");

  // let age = 79;
  let [age, setAge] = useState(79)

  // state variable
  // let value = 10;  
  let [value,setValue] = useState(10)

  
  function someFunction() {
    // value = value + 1
    setValue(value + 1);
  }


  //first time rendering
  return (
    <div>
      <h1>Click Demo  {value} </h1>
      <h2>Age {age}</h2>
      <button onClick={() => someFunction()}>Click me</button>
    </div>
  )
}
