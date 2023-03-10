import React from 'react';
import './pages.css';
const { myHttpGet } = require('../service/httpService');
const { myHttpPost } = require('../service/httpService');

const Clients = () => {

	function createClient() {
		var id_agent =  document.getElementById('id_agent').value;
		
		var first_name = document.getElementById('first_name').value;
		var last_name = document.getElementById('last_name').value;
		var address = document.getElementById('address').value;
		var city = document.getElementById('city').value;
		var email = document.getElementById('email').value;
		var phone_number = document.getElementById('phone').value;


	}

	function getUserData(){

	}
	return (
		<div>
			<section>
				<div>
					<div>
						<h1>
							Clients
						</h1>
						<p>
							Client page will contain a list of clients for the logged in user with the ability to add/remove/edit clients
						</p>
						<div style={{ marginBottom: '20px' }}>
							<label for="fname">ID Agent, since login still not implemented:</label>
							<input type="text" id="id_agent" placeholder="DB id agent"></input><br />
							<label for="fname">First name:</label>
							<input type="text" id="first_name" placeholder="Your first name"></input><br />
							<label for="fname">Last name:</label>
							<input type="text" id="last_name" placeholder="Your last name"></input><br />
							<label for="fname">Address:</label>
							<input type="text" id="address" placeholder="Your address"></input><br />
							<label for="fname">City:</label>
							<input type="text" id="city" placeholder="City"></input><br />
							<label for="fname">Email:</label>
							<input type="text" id="email" placeholder="you@example.com"></input><br />
							<label for="fname">Phone number:</label>
							<input type="text" id="phone" placeholder="+1(999)999-9999"></input><br />
						</div>

						<button onClick={createClient}>
							Create Client
						</button>
						<table class="licensee_table" id="licensee_table" style={{ marginTop: '20px' }}>
							<tr>
								<th>Client ID</th>
								<th>First Name</th>
								<th>Last Name</th>
								<th>Address</th>
								<th>City</th>
								<th>Email</th>
								<th>Phone Number</th>
								<th>Is Active</th>
							</tr>
						</table>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Clients