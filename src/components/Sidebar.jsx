import React from 'react';
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu';
import SearchBar from './SearchBar';
import '../stylesheets/Sidebar.css';

const Sidebar = () => {
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
            {/* put location pin instead of text */}
            <NavLink to='/location' onClick={() => closeMenu()}>Location</NavLink>
            <SearchBar />
            <NavLink to='/' onClick={() => closeMenu()}>Home</NavLink>
            <NavLink to='/recipes' onClick={() => closeMenu()}>Recipes</NavLink>
            <NavLink to='/plants' onClick={() => closeMenu()}>Plants</NavLink>
            <NavLink to='/effects' onClick={() => closeMenu()}>Effects</NavLink>
            <NavLink to='/favorites' onClick={() => closeMenu()}>Favorites</NavLink>
        </Menu>
    );
};

export default Sidebar;