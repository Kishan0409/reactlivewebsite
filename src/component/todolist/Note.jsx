import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Col from './Col';

  const Note = () => {
    const[item , setItem]=useState("");
    const[newitem,setnewItem]=useState([]);

    const itemEvent = (event) => {
        setItem(event.target.value);

    }

    const listofItems = () => {
        setnewItem((prevValue) =>{
            return [...prevValue, item];

        });
        setItem("");

    };
    return(
        <>
        <div className="main_div">
            <div className="center_div">
                <br />
                <h1>ToDo List</h1>
                <br />
                <input type="text" value={item} placeholder="Add a Items" onChange={itemEvent}/>
                <Button className="newBtn" onClick={listofItems}>
                    <AddIcon />
                </Button>
                <br />
                <ol>
                   { newitem.map((val,index) =>{
                        return <Col key={index}
                        text={val} />
                    })}                  
                </ol>
                <br />
            </div>
        </div>
        </>
    )
}
export default Note;


    