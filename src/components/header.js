import React from "react";
import '../App.css';

const Header = () => {
    return (
        <div className="navBar">
            <a href="/"><img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210420155809/gfg-new-logo.png" /></a>
            <a href="/clients">Clients</a>
            <a href="/licensees">Licensees</a>
            <a href="/properties">Properties</a>
            <a href="/transactions">Transactions</a>
        </div>
    );
};

export default Header;