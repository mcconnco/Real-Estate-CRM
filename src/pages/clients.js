import React, { useEffect } from 'react';
import './pages.css';
const { myHttpGetVal } = require('../service/httpService');
const { myHttpPost } = require('../service/httpService');

const Clients = () => {
	var currentUser = JSON.parse(atob(localStorage.getItem("user_details")));
	function createClient() {
		var first_name = document.getElementById('first_name').value;
		var last_name = document.getElementById('last_name').value;
		var address = document.getElementById('address').value;
		var city = document.getElementById('city').value;
		var email = document.getElementById('email').value;
		var phone_number = document.getElementById('phone').value;

		addClient(first_name, last_name, address, city, email, phone_number)
	}

	function addClient(first_name, last_name, address, city, email, phone_number) {
		var currentAgent = JSON.parse(atob(localStorage.getItem("user_details")));
		var data = {
			"id_agent": currentAgent.id_agent,
			"first_name": first_name,
			"last_name": last_name,
			"address": address,
			"city": city,
			"email": email,
			"phone_num": phone_number
		}
		myHttpPost('Agent/addClient', data).then(result => {
			console.log("All user data: " + JSON.stringify(result));
			if (result.success) {
				alert(result.message);
				window.location.reload()
			} else {
				alert("An error has ocurred: " + result.message);
			}

		}).catch(error => {
			alert("An error has ocurred: " + error);
		});
	}
	function getClientsData(myIdAgent) {
		var params = {
			"id_agent": myIdAgent
		}
		myHttpGetVal('Client/getAllClients', params).then(data => {
			console.log("All user data: " + JSON.stringify(data));
			if (data.success){
				fillTable(data);
			}
			
		}).catch(error => {
			alert("An error has ocurred: " + error);
		});
	}

	function fillTable(data) {
		var t = "";
		for (var i = 0; i < data.agentClients.length; i++) {
			var tr = "<tr>";
			tr += "<td>" + data.agentClients[i].id_client + "</td>";
			tr += "<td>" + data.agentClients[i].first_name + "</td>";
			tr += "<td>" + data.agentClients[i].last_name + "</td>";
			tr += "<td>" + data.agentClients[i].address + "</td>";
			tr += "<td>" + data.agentClients[i].city + "</td>";
			tr += "<td>" + data.agentClients[i].email + "</td>";
			tr += "<td>" + data.agentClients[i].phone_num + "</td>";
			tr += "<td>" + data.agentClients[i].last_contact + "</td>";
			tr += "<td>" + (data.agentClients[i].sw_active = 1 ? "YES" : "NO") + "</td>";
			t += tr;
		}
		document.getElementById("client_table").innerHTML += t;
	}

	function getClient(data, agentName){
		var response = "";
		var found = false;
		for(var i = 0; i<data.agentClients.length; i++){
			if(agentName === data.agentClients[i].first_name){
				response += "Id: " + data.agentClients[i].id_client + "\n";
				response += "First Name: " + data.agentClients[i].first_name + "\n";
				response += "Last Name: " + data.agentClients[i].last_name + "\n";
				response += "Address: " + data.agentClients[i].address + "\n";
				response += "City: " + data.agentClients[i].city + "\n";
				response += "Email: " + data.agentClients[i].email + "\n";
				response += "Phone: " + data.agentClients[i].phone_num + "\n";
				response += "Last Contact: " + data.agentClients[i].last_contact;
				alert(response);
				found = true;
			}

		}
		if(!found){
			alert("Client not found.")
		}
	}

	/*Right now this function uses the same Client/getAllClients call as the table filling uses, it searches using the name with getClient()*/
	function searchClient () {
		var agentName = document.getElementById('id_client_input').value;
		var params = {
			"id_agent": currentUser.id_agent
		}

		myHttpGetVal('Client/getAllClients', params).then(data => {
			if (data.success){
				getClient(data, agentName);
			}else {
				alert("Clients not found!");
			}
		}).catch(error => {
			alert("An error has ocurred: " + error);
		});
	}
	useEffect(() => {
		var currentAgent = JSON.parse(atob(localStorage.getItem("user_details")))
		console.log('Current Agent ID: ' + currentAgent.id_agent)
		getClientsData(currentAgent.id_agent); //Modify this so that the value comes from localstorage
	})
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
						<div>
							<label for="fname">Search Client:</label>
							<input type="text" id="id_client_input" placeholder="Client Name"></input>
							<button onClick={searchClient}>Search</button>
						</div>
						<table class="client_table" id="client_table" style={{ marginTop: '20px' }}>
							<tr>
								<th>Client ID</th>
								<th>First Name</th>
								<th>Last Name</th>
								<th>Address</th>
								<th>City</th>
								<th>Email</th>
								<th>Phone Number</th>
								<th>Last contact</th>
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