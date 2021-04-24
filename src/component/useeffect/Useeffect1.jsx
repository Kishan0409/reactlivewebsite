import React, { useEffect, useState } from 'react';

const UseEffect1 = () => {

    const[countn,setCountn]= useState(0);

    useEffect(() => {
        if(countn >= 1){
            document.title =` chat[${countn}]`

        }else {
            document.title = `chats`
        }

    },[countn]);
    console.log("Hello i am a kishan kumar Rai")
   return (
       
    <div>
        <h1>{countn}</h1>
        <button className="btn" onClick={() => {
            setCountn(countn+1);
        }}>Click me</button>
    </div>
   )

}
export default UseEffect1;