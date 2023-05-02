import React, { useEffect } from 'react';
import PopupNewAgent from './Popup';
import PopupDeactivateAgent from './PopupDeleteAgent';
import './pages.css';
import { Alert, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyModalComponent from '../components/mymodal.component';

const { myHttpGet } = require('../service/httpService');
const { myHttpGetVal } = require('../service/httpService');

/*Get data needed from Agents table in database to populate Agents table in website*/
const Licensees = () => {
	var currentUser = JSON.parse(atob(localStorage.getItem("user_details")));
	var modalData = {
		title: 'Agent Data',
		body: {
			agent_number: "",
			first_name: "",
			last_name: "",
			email: "",
			phone_num: ""
		}
	};
	const [modalIsOpen, setIsOpen] = React.useState(false);
	const [myAgentData, setAgentData] = React.useState(false);
	function openFromParent() {
		setIsOpen(true);
	}

	function handleCloseModal(event, data) {
		// console.log(event, data);
		// alert(JSON.stringify(data));
		setIsOpen(false);
	}

	function handleAfterOpen(event, data) {
		console.log(event, data);
	}

	function getUsersData() {
		myHttpGet('User/getAllUsers').then(data => {
			console.log("All user data: " + JSON.stringify(data));
			fillTable(data);
		}).catch(error => {
			alert("An error has ocurred: " + error);
		});
	}
	/*Applies all retrieved data to the table on the Agents page*/
	function fillTable(data) {
		var t = "";
		/*Until we reach the end of the data, place the user id, first name, last name, active status, admin flag, and account creation
		to the table*/
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
		// document.getElementById("licensee_table").innerHTML += t;

	}

	function searchAgent() {
		var myAgentNumber = document.getElementById('id_licensee_input').value;
		var params = {
			"agent_number": myAgentNumber
		}
		myHttpGetVal('Agent/getAgentByNumber', params).then(data => {
			console.log("Agent data: " + JSON.stringify(data));
			if (data.success){
				setAgentData(data.agent)
				setIsOpen(true);
			}else {
				alert("Agent not found!");
			}
		}).catch(error => {
			alert("An error has ocurred: " + error);
		});
	}
	useEffect(() => {
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
						<input type="text" id="id_user_input" placeholder="User ID"></input><br />
						<label for="fname">Licensee Number:</label>
						<input type="text" id="id_licensee_input" placeholder="Unique Agent Number"></input>
						<button onClick={searchAgent}>Search</button>
						<MyModalComponent
							dynData={modalData}
							agent_data={myAgentData}
							IsModalOpened={modalIsOpen}
							onCloseModal={handleCloseModal}
							onAfterOpen={handleAfterOpen}
						/>
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