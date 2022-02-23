import React from 'react'
import { NavLink } from "react-router-dom"
import './Header.css'



// Header in app

export default function Header() {
  return (
    <nav className="nav-header">
        <div className="nav-header__menu">
            <NavLink className="nav-header__link" to='/'> Create Todo </NavLink>
            <NavLink className="nav-header__link" to='/TodoList'> Todo List </NavLink>
        </div>
    </nav>
  )
}
