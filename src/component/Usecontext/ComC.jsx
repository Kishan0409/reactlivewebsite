import React, { useContext } from 'react';
import {BioData} from './ComA';

const ComC = () => {

    const  Name = useContext(BioData);
    return (
        <>
            <h1>My name is {Name}</h1>
        </>
    )

}
export default ComC;