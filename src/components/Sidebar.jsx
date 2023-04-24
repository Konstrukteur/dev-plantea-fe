import React from 'react';
import { useState } from "react";
import { slide as Menu } from 'react-burger-menu';
import { NavLink } from "react-router-dom";
import '../stylesheets/Sidebar.css';

export default Sidebar => {
    const [menuState, setMenuState] = useState(false);

    // This keeps your state in sync with the opening/closing of the menu
    // via the default means, e.g. clicking the X, pressing the ESC key etc.
    const handleStateChange = (menuState) => {
        setMenuState({ menuOpen: menuState.isOpen })
    }

    // This can be used to close the menu, e.g. when a user clicks a menu item
    const closeMenu = () => {
        setMenuState({ menuOpen: false })
    }

    return (
        <Menu right
            isOpen={ menuState.menuOpen }
            onStateChange={(menuState) => handleStateChange(menuState)}
        >
            <NavLink to='/' onClick={() => closeMenu()}>Home </NavLink>
            <NavLink to='/plants' onClick={() => closeMenu()}>Plants </NavLink>
            <NavLink to='/recipes' onClick={() => closeMenu()}>Recipes </NavLink>
            <NavLink to='/bodies' onClick={() => closeMenu()}>Bodies </NavLink>
            <NavLink to='/favorites' onClick={() => closeMenu()}>Favorites </NavLink>
        </Menu>
    );
};