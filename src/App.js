import React from "react";
import './App.css';

import Header from "./components/header";
import Route from "./components/route";
import Footer from "./components/footer";


import Dash from "./pages/index";
import Clients from "./pages/clients";
import Licensees from "./pages/licensees";
import Login from "./pages/login";
/*import Properties from "./pages/properties";*/
import About from "./pages/about"
/*import Transactions from "./pages/transactions";*/
import Settings from "./pages/settings";
import Account from "./pages/account"

export default () => {
  /*Create variable for storing user login status*/
  var currentUser = []

  /*Store user login status/info in variable created above*/
  if (localStorage.getItem("user_details")) {
    currentUser = JSON.parse(atob(localStorage.getItem("user_details")))
  }

  return (
    /*Create basic webpage header that is used on all pages*/
    <div className="ui-container">
      {/*Pull information from header.js on what is inside of div for Header*/}
      <Header />
      <div className="row">
        <div className="column side">

        </div>

        <div className="column middle">
          
          {/*Direct user to homepage*/}
          <Route path="/">
            {/*Declare that about.js is our homepage*/}
            <About />
            {/*{currentUser && currentUser.id_role === 1 ? <Dash /> : <Login />}*/}
          </Route>
          
          {/*Direct user to the Clients page*/}
          <Route path="/clients">
            {/*If the user is logged in access Clients page, otherwise direct to login until login successful*/}
            {currentUser && currentUser.id_role === 1 ? <Clients /> : <Login />}
          </Route>
          
          {/*Direct user to the Licensees page*/}
          <Route path="/licensees">
            {/*If the user is logged in access Licensees page, otherwise direct to login until login successful*/}
            {currentUser && currentUser.id_role === 1 ? <Licensees /> : <Login />}
          </Route>

          {/* These pages are potential add ons in the future that will store property data and transaction data.
          They are designed to make our product capable of tracking all important information in a single web page without excess clutter.
          <Route path="/properties">
            {currentUser && currentUser.id_role === 1 ? <Properties /> : <Login />}
          </Route>
          <Route path="/transactions">
            {currentUser && currentUser.id_role === 1 ? <Transactions /> : <Login />}
          </Route>*/}

          {/*Direct user to the Settings page*/}
          <Route path="/settings">
            {/*If the user is logged in access Settings page, otherwise direct to login until login successful*/}
            {currentUser && currentUser.id_role === 1 ? <Settings /> : <Login />}
          </Route>

          {/*Direct user to the Login page*/}
          <Route path="/login">
            {/*Allow user to login if they provide valid credentials*/}
            <Login redirect="/"/>
          </Route>

          {/*Direct user to Account page*/}
          <Route path="/account">
            {/*If the user is logged in access Account page, otherwise direct to login until login successful*/}
            {currentUser && currentUser.id_role === 1 ? <Account /> : <Login />}
          </Route>

        </div>

        <div className="column side">

        </div>
      </div>
      <Footer />
    </div>
  );
};