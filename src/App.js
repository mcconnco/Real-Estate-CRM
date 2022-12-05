import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './pages';
import Clients from './pages/clients';
import Licensees from './pages/licensees';
import Properties from './pages/properties';
import Transactions from './pages/transactions';

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route exact path='/' element={<Home />} />
		<Route path='/clients' element={<Clients/>} />
		<Route path='/licensees' element={<Licensees/>} />
		<Route path='/properties' element={<Properties/>} />
		<Route path='/transactions' element={<Transactions/>} />
	</Routes>
	</Router>
	<div>
		Test!
	</div>
);
}

export default App;