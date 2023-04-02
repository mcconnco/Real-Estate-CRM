import React, { useState } from "react";
import '../App.css';

const Header = () => {
    
    const [navbarOpen, setNavbarOpen] = useState(false)
    
    const toggleMenu = () =>{
        setNavbarOpen(!navbarOpen)
        
    }
    /*const closeMenu = () =>{
        setNavbarOpen(false)
    }*/

    const handleLogout = () => {
        localStorage.clear()
    }

    return (
        
        <div className="navBar">
            
            <a href = "/dash"><img src="https://1000logos.net/wp-content/uploads/2021/07/Oregon-State-Beavers-logo-500x281.png" width="50px"/></a>
            <button className = "account-button-container">
                <a href = "/account"><img className = "account-button" src="https://cdn4.iconfinder.com/data/icons/e-commerce-181/512/477_profile__avatar__man_-60.png"></img></a>
            </button>
            <nav className = "navBar">
                <button onClick={toggleMenu}>
                    <img src="https://i.ibb.co/LJTPSJt/menu-burger-2.png" alt="menu-burger-2"></img>
                    {navbarOpen}
                </button>
                <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                    <a href = "/clients" className = "burger-option">Clients</a>
                    <a href = "/licensees" className = "burger-option">Licensees</a>
                    {/*<a href = "/properties" className = "burger-option">Properties</a>*/}
                    {/*<a href = "/transactions" className = "burger-option">Transactions</a>*/}
                    <a 
                    style={{
                        position: navbarOpen ? 'fixed' : ' ',
                    }}
                    href = "/" className = "burger-footer">About</a>
                    <a 
                    style={{
                        position: navbarOpen ? 'fixed' : ' ',
                    }}
                    href = "/dash" className = "burger-logout" onClick = {handleLogout}>Logout</a>
                </ul>

            </nav>
           
        </div>
        
    );
};

export default Header;