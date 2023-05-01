import React, { useState } from "react";
import '../App.css';
import Login from "../pages/login";

const Header = () => {
    
    /*const [navbarOpen, setNavbarOpen] = useState(false)*/
    
    /*const toggleMenu = () =>{
        setNavbarOpen(!navbarOpen)
        
    }
    /*const closeMenu = () =>{
        setNavbarOpen(false)
    }*/

    const handleLogout = () => {
        localStorage.clear()
    }
    
    function handleLogin () {
        <Login />
    }

    var currentUser = []

    if (localStorage.getItem("user_details")) {
        currentUser = JSON.parse(atob(localStorage.getItem("user_details")))
      }


    return (
        
        <div className="navBar">
            <a href = "/"><img src="https://1000logos.net/wp-content/uploads/2021/07/Oregon-State-Beavers-logo-500x281.png" width="50px"/></a>
            <button className = "account-button-container">
                <a href = "/account"><img className = "account-button" src="https://cdn4.iconfinder.com/data/icons/e-commerce-181/512/477_profile__avatar__man_-60.png"></img></a>
            </button>
            <nav className = "navBar1">
                {/*<button onClick={toggleMenu}>
                    <img src="https://i.ibb.co/LJTPSJt/menu-burger-2.png" alt="menu-burger-2"></img>
                    {navbarOpen}
                </button>
                <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                    <a href = "/clients" className = "burger-option">Clients</a>
                    <a href = "/licensees" className = "burger-option">Licensees</a>
                    
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
                */}
                <a href="/clients">Clients</a>
                <a href="/licensees">Licensees</a>
                {currentUser && currentUser.id_role === 1 ? (
                    <a href = "/" id = "login-logout-button" onClick = {handleLogout}>Logout</a>
                ) : (
                    <a href = "/login" id = "login-logout-button" onClick = {handleLogin()}>Login</a>
                )}
            </nav>
           
        </div>
        
    );
};

export default Header;