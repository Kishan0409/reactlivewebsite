import React, { useRef, useState } from 'react';

const Uncontrolled = () => {

    const luckyname = useRef(null);
    const[show,setShow] = useState(false);

    const submitform = (e) => {
        e.preventDefault();
        const name = luckyname.current.value;

        name === "" ? alert('plz fill the data') : setShow(true);


        
    }


    return(
        <div>
            <form action="" onSubmit={submitform}>
                <div>
                    <label htmlFor="lucky name">Enter your lucky name</label>
                    <input type="text" id="lucky name"  ref={luckyname}/>
                    <br/>
                    <button>Submit</button>
                </div>
            </form>
            <p>{show ? `Your lucky name is ${luckyname.current.value}`:""}</p>
        </div>
    )

}
export default Uncontrolled;