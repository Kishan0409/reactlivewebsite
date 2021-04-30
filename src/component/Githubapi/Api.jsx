import React, { useEffect, useState } from 'react';

const Api = () =>{
    const[users,setUsers]=useState([]);


    const getUsers = async() =>{
        try{
            const response= await fetch("https://jsonplaceholder.typicode.com/comments")
         setUsers(await response.json());
         console.log(response);
 
        }catch(error) {
            console.log("My error is" + error)
        }
    
      
    }

    useEffect(() =>{
        getUsers();
    },[])


    return (
        <>
        <div className="text-center">
        <div className="card" style={{width: "18rem"}}>
  <div className="card-body">
  {
      users.map((curElem)=>{
          return (
              <div className=""  key={curElem.id} >
              <h5 className="card-title">{curElem.name}</h5>
              <p className="card-text">{curElem.body}.</p>
              </div>
          )
      })
  }
  </div>
</div>
</div>
   
        </>
    )
}
export default Api;