import React, { useEffect } from 'react';
import PopupNewAgent from './Popup';
import PopupDeactivateAgent from './PopupDeleteAgent';
import './pages.css';
const { myHttpGet } = require('../service/httpService');
//const { myHttpPost } = require('../service/httpService');

const Licensees = () => {
	var currentUser = JSON.parse(atob(localStorage.getItem("user_details")));

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

	useEffect(()=>{
		getUsersData()
	})

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
						<input type="text" id="id_user_input" placeholder="User ID"></input><br/>
						<label for="fname">Licensee Number:</label>
						<input type="text" id="id_licensee_input" placeholder="Unique Agent Number"></input><br/>
						<div>
							{currentUser.id_agent && <PopupNewAgent />}
						</div>
						<div>
							<PopupDeactivateAgent />
						</div>
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