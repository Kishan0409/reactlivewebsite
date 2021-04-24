import React from 'react';
import {useParams,useLocation,useHistory} from 'react-router-dom';

const User =  () => {
    const {name} = useParams();
    const location = useLocation();
    console.log(location);
    const history = useHistory();
    console.log(history);
 
    const display = () => {
       // alert("You are awesome cool")
       //history.goBack()
       history.push("/")
    } 

    return(
        <>
            <h1>Hello, I am a  User {name} page</h1>
            <p> My current Location is {location.pathname}</p>
            {location.pathname === `/user/Rai` ? (
                <button onClick={display}>Click Me</button>
            ) :null }
        </>
    )

}
export default User;
