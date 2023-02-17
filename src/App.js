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
            <Dash />
          </Route>
          <Route path="/clients">
            <Clients />
          </Route>
          <Route path="/licensees">
            <Licensees />
          </Route>
          <Route path="/properties">
            <Properties />
          </Route>
          <Route path="/transactions">
            <Transactions />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/account">
            <Account />
          </Route>
        </div>

        <div className="column side">
        
        </div>
      </div>
      <Footer />
    </div>
  );
};