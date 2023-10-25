import React from 'react'

function Nav() {
  return (
    <div>
    <div className="navBar">
        <div><img className="navLogo" src="images/logo1.png" alt="logo"></img></div>
        
        <ul className="links">
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservations</li>
          <li>OrderOnline</li>
          <li>Login</li>
        </ul>
        
        </div>
    </div>
  )
}

export default Nav;