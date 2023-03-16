import React, {useEffect} from 'react';
import './pages.css';
const { myHttpGet, myHttpGetVal } = require('../service/httpService');
const { myHttpPost } = require('../service/httpService');

const Account = () => {
    function getUserData(myIdAgent){
        var params = {
			"id_user" : myIdAgent
		}
        myHttpGetVal('User/getUser', params).then(data => {
			console.log("User data: " + JSON.stringify(data));
			fillTable(data);
		}).catch(error => {
			alert("An error has ocurred: " + error);
		});
    }

    function fillTable(data) {
        /*console.log("First Name: " + data.first_name)
        var t = ""
        t += data.first_name
        document.getElementById("first_name").innerHTML += t*/
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
						<p>
							This page will have a set of account settings for the user to modify.
						</p>
                        
                        <h1>
                            Account Info
                        </h1>
                        <ul>
                            <li id="email">Email: ****@gmail.com</li>
                            <li>Username: ****</li>
                            <li>Password: ****</li>
                            <li id="first_name">Agent Name: </li>
                            <li id="last_name">Last Name: B****</li>
                        </ul>
                        
                        <h1>
                            Public Methods of Contact
                        </h1>
                        <ul>
                            <li id="email">Email: ****@gmail.com</li>
                            <li id="phone_number">Phone Number: 555-***-****</li>
                            <li>Office Address: ****</li>
                        </ul>
                        <h1>
                            Account Birthday:
                        </h1>
                        <p id="birthday">June 27th</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Account