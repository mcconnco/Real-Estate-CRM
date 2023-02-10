import React from "react";
import '../App.css';

const Header = () => {
    return (
        <div className="navBar">
            <a href="/dash"><img src="https://1000logos.net/wp-content/uploads/2021/07/Oregon-State-Beavers-logo-500x281.png" width="50px" /></a>
            <a href="/">Login</a>
        </div>
    );
};

export default Header;