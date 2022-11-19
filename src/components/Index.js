import React from "react";
import { Link, Outlet } from "react-router-dom";

const Index = () => {
    return (
        <>
        
            
            <Link to='/home' >Home</Link><br/>
            <Link to='/about' >About</Link><br/>
            <Link to='/shop' >Shop </Link>
            <hr></hr>
            <Outlet />
        </>
    )
}

export default Index;