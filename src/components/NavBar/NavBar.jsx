import React from 'react'
import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
  return (
    <nav>
      <section id='nav-container'>
        <div id='logo-container'>
            <img src="./dp-logo.jpg" alt="Logo" />
        </div>
        <div id='menu-container'>
            <ul>
                <li><a href="">Minorista</a></li>
                <li><a href="">Mayorista</a></li>
                <li><a href="/cart"><CartWidget /></a></li>
            </ul>
        </div>
      </section>
    </nav>
  )
}

export default NavBar