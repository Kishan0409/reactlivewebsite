
import React, { useState } from 'react';

const UseStateArray = () => {

    const bioData =[
        {
            id:0,myName:"kishan",Age:23
        },
        {
            id:1,myName:"kumar",Age:24
            
        },
        {
            id:1,myName:"Rai",Age:24
            
        },
        {
            id:1,myName:"Janesh",Age:24
            
        },
        
        
    ]
    const[myArray,setArray] = useState(bioData)

    console.log(bioData)

    const clearArray = () => {
        setArray([])

    }

    const removeElem = (id) => {
        
        const mynewArray = myArray.filter((curElem) => {

            return curElem.id != id


          })
          setArray(mynewArray)
        


    }


    

    return (
        <>
        {
            myArray.map((curElem) => {
                return (
                    <h1 className="h1style" key = {curElem.id}>Name:{curElem.myName}&Age:{curElem.Age}
                    <button className="btnInner" onClick={ () =>removeElem(curElem.id)}>remove</button>
                    </h1>
                );

            })
        }   
        <button className="btn" onClick={clearArray}>Clear</button>
        </>
    )}

    export default UseStateArray;
