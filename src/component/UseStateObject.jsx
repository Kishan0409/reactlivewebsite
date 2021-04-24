import React, { useState } from 'react';

const UseStateObject = () => {

   const[myObject,setMyObject] = useState({
       myName:"kishan",MyAge:22,Degree:"BCA",channel:"kishan"
   });

   const changeObject = () => {
       setMyObject({
           ...myObject,MyAge:30,channel:"Kishan Kumar Rai"
       })
   }

    return (
        <div>
        <h1 className="h1style"> My name is {myObject.myName} my age is {myObject.MyAge} and My degree {myObject.Degree} channel{myObject.channel}</h1>
        <button className ="btn" onClick={changeObject}>Update</button>
        </div>
    )

}
export default UseStateObject;