import React, {useEffect} from 'react';
import './pages.css';
const { myHttpGetVal } = require('../service/httpService');


const Account = () => {
    function getUserData(myIdAgent){
        var params = {
			"id_user" : myIdAgent
		}
        myHttpGetVal('User/getUser', params).then(data => {
			console.log("User data: " + JSON.stringify(data));
			fillAccountPage(data);
		}).catch(error => {
			alert("An error has ocurred: " + error);
		});
    }

    function fillAccountPage(data) {
        console.log("First Name: " + data.user.first_name)
        var t = ""
        t = data.user.first_name
        document.getElementById("first_name").innerHTML += t
        t = data.user.last_name
        document.getElementById("last_name").innerHTML += t
        t = data.user.email
        document.getElementById("email").innerHTML += t
        document.getElementById("public_email").innerHTML += t        
        t = data.user.phone_num
        document.getElementById("phone_number").innerHTML += t
        t = data.user.username
        document.getElementById("username").innerHTML += t
        t = data.user.datetime_create
        document.getElementById("birthday").innerHTML += t

        t=data.user.sw_active
        if(t===1){
            document.getElementById("active").innerHTML += "Active"
        }else{
            document.getElementById("active").innerHTML += "Inactive"
        }
        t=data.user.sw_admin
        if(t===1){
            document.getElementById("admin_status").innerHTML += "Admin"
        }else{
            document.getElementById("admin_status").innerHTML += "Agent" 
        }

    }
    useEffect(()=>{
        var currentAgent = JSON.parse(atob(localStorage.getItem("user_details")))
        console.log('Current Agent ID: ' + currentAgent.id_user)
        getUserData(currentAgent.id_user); //Modify this so that the value comes from localstorage
    })
	return (
		<div>
			<section>
				<div>
					<div>
						<h1>
							Account Page
						</h1>
						<p id="admin_status">Account Permissions: </p>
                        
                        <h1>
                            Account Info
                        </h1>
                        <ul>
                            <li id="first_name">Agent Name: </li>
                            <li id="last_name">Last Name: </li>
                            <li id="email">Email: </li>
                            <li id="username">Username: </li>
                            <li>Password: ****</li>
                            <li id="active">Account Status: </li>
                        </ul>
                        
                        <h1>
                            Public Methods of Contact
                        </h1>
                        <ul>
                            <li id="public_email">Public Email: </li>
                            <li id="phone_number">Phone Number: </li>
                            <li>Office Address: ****</li>
                        </ul>
                        <h1>
                            Account Birthday:
                        </h1>
                        <p id="birthday"></p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Account