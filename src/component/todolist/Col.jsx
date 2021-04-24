import React,{useState} from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

const Col = (props) => {

    const[line,setLine]= useState(false)

    const cutIt = () => {
        setLine(true);
    }
    return (
     <>
     <div className="todo_Style">
         <span onClick={cutIt}>
         <DeleteIcon className=" DeleteIcon"/>

         </span>
         <li style={{textDecoration:line?"line-through":"none"}}>
         {props.text}
         </li>
     </div>
    </>
    );
};
export default Col;
   

