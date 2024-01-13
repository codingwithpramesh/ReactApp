import React, { useState } from "react";
import ReactDom from "react-dom/client";



function MyFrom(){
  const [name, setName] =useState("Hii");

  return (
    <div>
      <form>
        <label> Enter the name :</label>
        <input type="text" value={name}/>
      </form>

      <h1> {name}</h1>
    </div>
  )
}

/*function Person (){

  const callName = (name) =>{
    alert("Hello "+ name)
  }
  return (
    <button onClick={callName("Pramesh")}>Call Me</button>
  )
}
*/

 /*const ListExample =() =>{
  const fruits =["Apple","banana","Orange"];

  return (
    <ul>
      {fruits.map((fruits, index) =>(
        <li key ={index}>{fruits}</li>
      ))};
    </ul>
  )
} */



const root = ReactDom.createRoot(document.getElementById("root"))
root.render(
<MyFrom/>
);