import React, { useState } from 'react';

const ShortCirEval = () => {

const[demo,setDemo] =useState("")

    return (
        <div>
            <h1 className="h1style">{demo || "Kishan"} </h1>
            <h1 className="h1style">{demo && "Kumar Rai"}</h1>
        </div>
    )

}
export default ShortCirEval;