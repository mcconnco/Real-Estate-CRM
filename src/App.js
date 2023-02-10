import React from "react";
import './App.css';

import Header from "./components/header";
import Route from "./components/route";
import Footer from "./components/footer";
import Hamburger from "./components/hamburger";

import Dash from "./pages/index";
import Clients from "./pages/clients";
import Licensees from "./pages/licensees";
import Login from "./pages/login";
import Properties from "./pages/properties";
import Transactions from "./pages/transactions";

export default () => {
  return (
    <div className="ui-container">
      <Header />
      <div className="row">
        <div className="column side">
          <Hamburger />
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
        </div>

        <div className="column side">
        <h2>Side Right</h2>
        </div>
      </div>
      <Footer />
    </div>
  );
};