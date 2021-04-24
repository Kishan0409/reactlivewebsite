import React, { useReducer, useState } from "react";


const initialState = 0;

const reducer = (state ,action) => {
    if(action.type === "INCREMENT") {
      return state + 1;
    }
    if(action.type === "DECREMENT") {
      return state - 1;
    }
      
  return state;
}
const UseReducer = () => {

  const [state,dispatch] = useReducer(reducer,initialState);

  
     return <>
     <p> {state}</p>
     <button onClick={() => {dispatch({type:"INCREMENT"})}}>INCREMENT</button>
     <button onClick={() => {dispatch({type:"DECREMENT"})}}>DECREMENT</button>
     
   </>

}
export default UseReducer;