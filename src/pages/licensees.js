import React, { useEffect, useState } from 'react';
import PopupNewAgent from './Popup';
import PopupDeactivateAgent from './PopupDeleteAgent';
import './pages.css';
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
	const [tableData, setTableData] = useState([]);

	function handleCloseModal(event, data) {
		setIsOpen(false);
	}

	function handleAfterOpen(event, data) {
		console.log(event, data);
	}

	function getUsersData() {
		myHttpGet('User/getAllUsers').then(data => {
			console.log("All user data: " + JSON.stringify(data));
			setTableData(data.users);
		}).catch(error => {
			alert("An error has ocurred: " + error);
		});
	}

	function searchAgent() {
		var myAgentNumber = document.getElementById('id_licensee_input').value;
		var params = {
			"agent_number": myAgentNumber
		};
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
	}, []);

	return (
		<div>
			<section>
				<div>
					<div>
						<h1>
							Licensees
						</h1>
						<label for="fname">Licensee Number:</label>
						<input type="text" id="id_licensee_input" placeholder="Unique Agent Number"></input>
						<button className="search-btn rounded-pill" onClick={searchAgent}>Search</button>
						<MyModalComponent
							dynData={modalData}
							agent_data={myAgentData}
							IsModalOpened={modalIsOpen}
							onCloseModal={handleCloseModal}
							onAfterOpen={handleAfterOpen}
						/>
						<div>
							{currentUser.id_agent && <PopupNewAgent/>}
						</div>
						<div>
							<PopupDeactivateAgent/>
						</div>
						<table className="licensee_table table table-bordered table-striped" id="licensee_table">
							<thead>
								<tr>
									<th scope="col">User ID</th>
									<th scope="col">First Name</th>
									<th scope="col">Last Name</th>
									<th scope="col">Is Active</th>
									<th scope="col">Is Admin</th>
									<th scope="col">Creation Date</th>
								</tr>
							</thead>
							<tbody>
								{tableData.map((user)=>(
									<tr key ={user.id_user}>
										<td>{user.id_user}</td>
										<td>{user.first_name}</td>
										<td>{user.last_name}</td>
										<td>{user.sw_active === 1 ? 'YES': 'NO'}</td>
										<td>{user.sw_admin === 1 ? 'YES': 'NO'}</td>
										<td>{user.datetime_create}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</section>
		</div>
	);
};



export default Licensees;