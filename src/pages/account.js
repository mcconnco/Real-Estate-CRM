import React, { useEffect } from 'react';
import './pages.css';
const { myHttpGetVal } = require('../service/httpService');


const Account = () => {
    function getUserData(myIdAgent) {
        var params = {
            "id_user": myIdAgent
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
        document.getElementById("first_name").value = t
        t = data.user.last_name
        document.getElementById("last_name").value = t
        t = data.user.email
        document.getElementById("email").value = t
        document.getElementById("public_email").innerHTML = t
        t = data.user.phone_num
        document.getElementById("phone_number").value = t
        t = data.user.username
        document.getElementById("username").value = t
        t = data.user.datetime_create
        document.getElementById("birthday").innerHTML += t
        

        t = data.user.sw_active
        if (t === 1) {
            document.getElementById("active").innerHTML += "Active"
        } else {
            document.getElementById("active").innerHTML += "Inactive"
        }
        t = data.user.sw_admin
        if (t === 1) {
            document.getElementById("admin_status").innerHTML += "Admin"
        } else {
            document.getElementById("admin_status").innerHTML += "Agent"
        }

    }
    function handleSubmit(){
        var name = document.getElementById("first_name").value;
        var last = document.getElementById("last_name").value;
        var email = document.getElementById("email").value;
        var username = document.getElementById("username").value;
        var phone = document.getElementById("phone_number").value;
        var currentAgent = JSON.parse(atob(localStorage.getItem("user_details")));
        //a key part for the api/User/update call to work is that the user_mod_id matches the user_id in the request
        updateUser(currentAgent.id_user, name, last, username, email, phone, currentAgent.id_user);

    }

    function updateUser(user_id, first_name, last_name, username, email, phone_num, user_mod_id, pass, sw_active, sw_change_pass){  
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json', },
            body: JSON.stringify({
                "id_user": user_id,
                "first_name": first_name,
                "last_name": last_name,
                "username": username,
                "email": email,
                "phone_num": phone_num,
                "sw_change_pass": 0,
                "sw_active": 1,
                "id_user_mod": user_mod_id,
            })
        };
        fetch('https://localhost:44334/api/User/update', requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    console.log("User/Update success")
                    alert("User Change Success!");
    
                }
                else {
                    alert("User Change Failure");
                }
    
            window.location.reload()
            });
    }

    useEffect(() => {
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
                            <div class="form-group">
                                <label>First name</label>
                                <input type="email" class="form-control" id="first_name" placeholder="Enter first name" />
                            </div>
                            <div class="form-group">
                                <label>Last name</label>
                                <input type="email" class="form-control" id="last_name" placeholder="Enter last name" />
                            </div>
                            <div class="form-group">
                                <label>Email</label>
                                <input type="email" class="form-control" id="email" placeholder="Enter Email" />
                            </div>
                            <div class="form-group">
                                <label>Username</label>
                                <input type="email" class="form-control" id="username" placeholder="Enter Username" />
                            </div>
                            <div class="form-group">
                                <label>Password(not working)</label>
                                <input type="email" class="form-control" id="password" placeholder="Enter New Password" />
                            </div>
                            <li id="active">Account Status: </li>
                        </ul>

                        <h1>
                            Public Methods of Contact
                        </h1>
                        <ul>
                        <div class="form-group">
                                <label>Public Email</label>
                                <p id="public_email" ></p>
                            </div>
                            <div class="form-group">
                                <label>Phone Number</label>
                                <input type="email" class="form-control" id="phone_number" placeholder="Enter Phone Number" />
                            </div>
                        </ul>
                        <button onClick={handleSubmit} className="login-btn rounded-pill">Update Account</button>
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