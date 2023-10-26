import React from 'react'
import {Link} from "react-router-dom";

function Nav() {
  return (
    
    <div>
    <div className="navBar">
        <div><img className="navLogo" src="images/logo1.png" alt="logo"></img></div>
        
        <ul className="links">
     <Link to="/">Home</Link>
     <Link to="/about">About</Link>
     <Link to="/menu">Menu</Link>
     <Link to="/reservation">Reservation</Link>
     <Link to="/order-online">Order Online</Link>
     <Link to="/login">Login</Link>
     
        </ul>


        </div>
    </div>
  )
}

export default Nav;