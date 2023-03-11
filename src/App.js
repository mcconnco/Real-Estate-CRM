import React from "react";
import './App.css';

import Header from "./components/header";
import Route from "./components/route";
import Footer from "./components/footer";


import Dash from "./pages/index";
import Clients from "./pages/clients";
import Licensees from "./pages/licensees";
import Login from "./pages/login";
import Properties from "./pages/properties";
import Transactions from "./pages/transactions";
import Settings from "./pages/settings";
import Account from "./pages/account"

export default () => {
  var currentUser = []

  if (localStorage.getItem("user_details")) {
    currentUser = JSON.parse(atob(localStorage.getItem("user_details")))
  }

  return (
    <div className="ui-container">
      <Header />
      <div className="row">
        <div className="column side">

        </div>

        <div className="column middle">
          <Route path="/">
            <Login />
          </Route>
          <Route path="/dash">
            {currentUser.id_role === 1 ? <Dash /> : <Login />}
          </Route>
          <Route path="/clients">
            {currentUser.id_role === 1 ? <Clients /> : <Login />}
          </Route>
          <Route path="/licensees">
            {currentUser.id_role === 1 ? <Licensees /> : <Login />}
          </Route>
          <Route path="/properties">
            {currentUser.id_role === 1 ? <Properties /> : <Login />}
          </Route>
          <Route path="/transactions">
            {currentUser.id_role === 1 ? <Transactions /> : <Login />}
          </Route>
          <Route path="/settings">
            {currentUser.id_role === 1 ? <Settings /> : <Login />}
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/account">
            {currentUser.id_role === 1 ? <Account /> : <Login />}
          </Route>

        </div>

        <div className="column side">

        </div>
      </div>
      <Footer />
    </div>
  );
};