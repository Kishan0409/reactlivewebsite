import React, { useState } from 'react';

const Login = () => {
     
    const[userregistration,setUserRegistration] = useState({
        username:"",
        email:"",
        phone:"",
        password:""

    });
    const[records,setRecords]=useState([]);
      
    const handleInput = (e) => {
        const name = e.target.name
        const value = e.target.value
        //console.log(name,value);
        setUserRegistration({...userregistration ,[name]: value});

    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const newRecord = {...userregistration};
        setRecords([...records,newRecord]);
        setUserRegistration({username:"",email:"",phone:"",password:""})

        
    }

    return (
        <>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">FullName</label>
                    <input type="text" 
                    value={userregistration.username}  onChange={handleInput}
                    autoComplete="off"
                    name="username" id="username" />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text"
                     value={userregistration.email} onChange={handleInput}
                     autoComplete="off"
                    name="email" id="email" />
                </div>
                <div>
                    <label htmlFor="phone">Phone no.</label>
                    <input type="text"
                     value={userregistration.phone} onChange={handleInput}
                     autoComplete="off"
                    name="phone" id="phone" />
                </div>
                <div>
                    <label htmlFor="password">password</label>
                    <input type="password"
                     value={userregistration.password} onChange={handleInput}
                     autoComplete="off"
                    name="password" id="password" />
                </div>
                <button type="submit">Registration</button>
            </form>
            <div>
                {
                    records.map((curElem) => {
                        return (
                            <div className="showDataStyle" key={curElem.id}>
                               <p>{curElem.username}</p>
                               <p>{curElem.email}</p>
                               <p>{curElem.phone}</p>
                               <p>{curElem.password}</p>

                            </div>

                        )
                    })
                }
                    
                      

                
            </div>
        </>
    )

}
export default Login;