import React, { useEffect } from 'react';
import './pages.css';
const { myHttpGet } = require('../service/httpService');
const { myHttpPost } = require('../service/httpService');

const Licensees = () => {

	function createLicensee() {
		var id_user = document.getElementById('id_user_input').value
		var agent_number = document.getElementById('licensee_input').value
		createAgent(id_user, agent_number);

	}

	function createAgent(id_user, agent_number) {
		var data = {
			"id_user": id_user,
			"agent_number": agent_number,
		}
		myHttpPost('Agent/addAgent', data).then(result => {
			console.log("All user data: " + JSON.stringify(result));
			if (result.success){
				alert(result.message);
			} else {
				alert("An error has ocurred: " + result.message);
			}
			
		}).catch(error => {
			alert("An error has ocurred: " + error);
		});
	}
	function getUsersData() {
		myHttpGet('User/getAllUsers').then(data => {
			console.log("All user data: " + JSON.stringify(data));
			fillTable(data);
		}).catch(error => {
			alert("An error has ocurred: " + error);
		});
	}

	function fillTable(data) {
		var t = "";
		for (var i = 0; i < data.users.length; i++) {
			var tr = "<tr>";
			tr += "<td>" + data.users[i].id_user + "</td>";
			tr += "<td>" + data.users[i].first_name + "</td>";
			tr += "<td>" + data.users[i].last_name + "</td>";
			tr += "<td>" + (data.users[i].sw_active = 1 ? "YES" : "NO") + "</td>";
			tr += "<td>" + (data.users[i].sw_admin = 1 ? "YES" : "NO") + "</td>";
			tr += "<td>" + (data.users[i].sw_agent = 1 ? "YES" : "NO") + "</td>";
			tr += "<td>" + data.users[i].datetime_create + "</td>";
			t += tr;
		}
		document.getElementById("licensee_table").innerHTML += t;
	}
	return (
		<div>
			<section>
				<div>
					<div>
						<h1>
							Licensees
						</h1>
						<p>
							Licensees page will contain a list of licensed realtors and their contact information with the ability to add/remove/edit licensees and their information.
						</p>

						<label for="fname">User:</label>
						<input type="text" id="id_user_input" placeholder="User ID"></input><br />
						<label for="fname">Licencee Number:</label>
						<input type="text" id="licensee_input" placeholder="Unique Agent Number"></input><br />
						<button onClick={createLicensee}>
							Create Licensee
						</button>
						<button onClick={getUsersData}>
							Get Users
						</button>
						<table class="licensee_table" id="licensee_table">
							<tr>
								<th>User ID</th>
								<th>First Name</th>
								<th>Last Name</th>
								<th>Is Active</th>
								<th>Is Admin</th>
								<th>Is Agent</th>
								<th>Creation Date</th>
							</tr>
						</table>
					</div>
				</div>
			</section>
		</div>
	);
};



export default Licensees