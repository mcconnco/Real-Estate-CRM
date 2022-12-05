import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
		<NavLink to="/" activeStyle>
			<img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210420155809/gfg-new-logo.png"/>
		</NavLink>
		<NavLink to="/clients" activeStyle>
			Clients
		</NavLink>
		<NavLink to="/licensees" activeStyle>
			Licensees
		</NavLink>
		<NavLink to="/properties" activeStyle>
			Properties
		</NavLink>
		<NavLink to="/transactions" activeStyle>
			Transactions
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
