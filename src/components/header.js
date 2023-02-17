import React, { useState } from "react";
import { Nav, NavLink, NavMenu} from "./NavbarElements";
import '../App.css';

const Header = () => {
    
    const [navbarOpen, setNavbarOpen] = useState(false)
    
    const toggleMenu = () =>{
        setNavbarOpen(!navbarOpen)
    }
    const closeMenu = () =>{
        setNavbarOpen(false)
    }

    return (
        
        <div className="navBar">
            <a href="/"><img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210420155809/gfg-new-logo.png" /></a>
            <a href="/clients">Clients</a>
            <a href="/licensees">Licensees</a>
            <a href="/properties">Properties</a>
            <a href="/transactions">Transactions</a>
            <nav className = "navBar">
                <button onClick={toggleMenu}>{navbarOpen ? "Close" : "Open"}</button>
                <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                    <a href="/clients" className = "burger-option">Clients</a>
                    <a href = "/licensees" className = "burger-option">Licensees</a>
                    <a href = "/properties" className = "burger-option">Properties</a>
                    <a href = "/transactions" className = "burger-option">Transactions</a>
                    <a href = "/settings" className = "burger-footer">Settings</a>
                    <a href = "/login" className = "burger-logout">Logout/Change User</a>
                </ul>

            </nav>
        </div>
        
    );
};

export default Header;