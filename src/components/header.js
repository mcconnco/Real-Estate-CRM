import React from "react";
import '../App.css';

const Header = () => {
    
    /*const [navbarOpen, setNavbarOpen] = useState(false)*/
    
    /*const toggleMenu = () =>{
        setNavbarOpen(!navbarOpen)
        
    }
    /*const closeMenu = () =>{
        setNavbarOpen(false)
    }*/

    /*Logs user out*/
    const handleLogout = () => {
        localStorage.clear()
    }

    /*variable to store current user login status*/
    var currentUser = []

    /*takes in user login status and saves to variable*/
    if (localStorage.getItem("user_details")) {
        currentUser = JSON.parse(atob(localStorage.getItem("user_details")))
      }


    return (

        /*Creates first part of navbar with profile button and home button*/
        <nav className="header navbar sticky-top navbar-expand">
            {/*Creates home button and assigns functionality*/}
            <button type="button" className="btn btn-lg" >
            <a href = "/"><img src="https://i.ibb.co/wNt6jv6/logo.png" width="50px"/></a>
            </button>
    
            <ul className="navbar-nav">
                {/*Assign funcitonality to all secondary navbar elements*/}
                <li className="nav-item">
                    <a className="nav-link text-dark" href="/clients">Clients</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-dark" href="/licensees">Licensees</a>
                </li>

                {/*If user is logged in, button is logout with funcitonality. 
                If user is logged out, button is login with functionality*/}
                <li className="nav-item">
                {currentUser && currentUser.id_role === 1 ? (
                    <a className="nav-link text-dark" href = "/" id="login-logout-button" onClick = {handleLogout}>Logout</a>
                ) : (
                    <a className="nav-link text-dark" href = "/login" id="login-logout-button">Login</a>
                )}
                </li>

                {/*Creates profile button and assigns functionality*/}
                <button className="btn btn-orange">
                    <a href = "/account"><img src="https://cdn4.iconfinder.com/data/icons/e-commerce-181/512/477_profile__avatar__man_-60.png"></img></a>
                </button>

            </ul>
           
        </nav>
        
    );
};

export default Header;