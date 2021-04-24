import React from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
         
         <NavLink to="/">Home</NavLink>
         <br />
         <br />
         <NavLink to="/about">About</NavLink>
         <br />
         <NavLink to="/service">Service</NavLink>
         <br />
         <NavLink to="/user/Rai">User</NavLink>
         <br />
         <NavLink to="/search">Search</NavLink>

        </>
    )

}
export default Navbar;
