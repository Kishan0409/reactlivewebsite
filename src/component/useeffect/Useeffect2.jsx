//Clean up function
import React, { useEffect, useState } from 'react';

const Useeffect2 = () => {

    const[width,setWidth] = useState(window.screen.width)

    const actualWidth = () => {
        setWidth(window.innerWidth);
    }

    useEffect( ()=>{
        window.addEventListener("resize",actualWidth);
        return () => {
            window.removeEventListener("resize",actualWidth);
        }

    })


    return (
        <div>
            <p>The actual size of the window is </p>
            <h1>{width}</h1>
        </div>
    )

}
export default Useeffect2;