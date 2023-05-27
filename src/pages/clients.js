import './pages.css';
import PopupUpdateClient from './PopupUpdateClient';
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

	/* helper function used to clear the current client table*/
	function clearTable(){

		document.getElementById("clientTable").innerHTML = "";
		var th = "";
		th += "<th>Client ID</th>";
		th += "<th>First Name</th>";
		th += "<th>Last Name</th>";
		th += "<th>Address</th>";
		th += "<th>City</th>";
		th += "<th>Email</th>";
		th += "<th>Phone Number</th>";
		th += "<th>Last Contact</th>";
		th += "<th>Is Active</th>";

		document.getElementById("clientTable").innerHTML += th;

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
		document.getElementById("clientTable").innerHTML += t;
	}


	function getClient(data, agentName){
		var t = "";
		//found determines if the letters from the input name match a name in the database
		var found = false;
		//printed determines if a client got printed from this search
		var printed = false;
		for(var i = 0; i<data.agentClients.length; i++){
			//search through each letter of the input to see if the name continues to match one from data
			for(var j = 0; j<agentName.length; j++){
				if(agentName[j].toLowerCase() === data.agentClients[i].first_name[j].toLowerCase()){
					found = true;
				}else{					
					found = false;
				}
			}
			if(found){
				clearTable();
				t += "<tr>";
				t += "<td>" + data.agentClients[i].id_client + "</td>";
				t += "<td>" + data.agentClients[i].first_name + "</td>";
				t += "<td>" + data.agentClients[i].last_name + "</td>";
				t += "<td>" + data.agentClients[i].address + "</td>";
				t += "<td>" + data.agentClients[i].city + "</td>";
				t += "<td>" + data.agentClients[i].email + "</td>";
				t += "<td>" + data.agentClients[i].phone_num + "</td>";
				t += "<td>" + data.agentClients[i].last_contact + "</td>";
				t += "<td>" + (data.agentClients[i].sw_active = 1 ? "YES" : "NO") + "</td>";
				document.getElementById("clientTable").innerHTML += t;
				printed = true;
			}
		}

		if(!printed){
			alert("Client not found.");
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

	function searchAllClientsButton(){
		var currentAgent = JSON.parse(atob(localStorage.getItem("user_details")))
		console.log('Current Agent ID: ' + currentAgent.id_agent)
		clearTable();
		getClientsData(currentAgent.id_agent); //Modify this so that the value comes from localstorage
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
							<label for="fname">First name:</label>
							<input type="text" id="first_name" placeholder="Client first name"></input><br />
							<label for="fname">Last name:</label>
							<input type="text" id="last_name" placeholder="Client last name"></input><br />
							<label for="fname">Address:</label>
							<input type="text" id="address" placeholder="Client address"></input><br />
							<label for="fname">City:</label>
							<input type="text" id="city" placeholder="City"></input><br />
							<label for="fname">Email:</label>
							<input type="text" id="email" placeholder="you@example.com"></input><br />
							<label for="fname">Phone number:</label>
							<input type="text" id="phone" placeholder="+1(999)999-9999"></input><br />
						</div>

						<button className="createClient rounded-pill" onClick={createClient}>
							Create Client
						</button>
						<div>
							<PopupUpdateClient />
						</div>
						<ul className="list-group list-group-horizontal">
							<li className="list-group-item">
								<button className="SeeClients rounded-pill"  onClick={searchAllClientsButton}>See all clients</button>
							</li>
							<li className="list-group-item">
								<div>
									<label for="fname">Search Client:</label>
									<input type="text" id="id_client_input" placeholder="Client Name"></input>
									<button className="searchClient rounded-pill" onClick={searchClient}>Search</button>
								</div>
							</li>
						</ul>
						<table class="table table-bordered table-striped" id="clientTable">
							{/*Code moved to clearTable and fillTable functions*/}
						</table>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Clients