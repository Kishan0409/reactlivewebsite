import React, { useState } from 'react';

const Pform = () => {

    const[name,setName] = useState()
    const[fullname,setFullName] = useState()


    const inputevent = (e) => {
        setName(e.target.value)

    }

    return (
        <>
        <div className="searchbar">
          <h1>Hello, my name is {fullname} </h1>

            <input type="text" placeholder="Enter your name" 
                onChange={inputevent} value={name}
            />
            </div>
            <button onClick={() => {setFullName(name)}}>Click Me</button>
        </>
    )

}
export default Pform;