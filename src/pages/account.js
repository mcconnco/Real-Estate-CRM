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
        document.getElementById("public_email").value = t
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

    function updateUser(){
        alert("functionality not implemented");     
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
                                <label for="exampleInputEmail1">First name</label>
                                <input type="email" class="form-control" id="first_name" placeholder="Enter first name" />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Last name</label>
                                <input type="email" class="form-control" id="last_name" placeholder="Enter last name" />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email</label>
                                <input type="email" class="form-control" id="email" placeholder="Enter Email" />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Username</label>
                                <input type="email" class="form-control" id="username" placeholder="Enter Username" />
                            </div>
                            <li>Password: ****</li>
                            <li id="active">Account Status: </li>
                        </ul>

                        <h1>
                            Public Methods of Contact
                        </h1>
                        <ul>
                        <div class="form-group">
                                <label for="exampleInputEmail1">Public Email</label>
                                <input type="email" class="form-control" id="public_email" placeholder="Enter public email" />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Phone Number</label>
                                <input type="email" class="form-control" id="phone_number" placeholder="Enter Phone Number" />
                            </div>
                            <li>Office Address: ****</li>
                        </ul>
                        <button onClick={updateUser} className="login-btn rounded-pill">Update Account (Not Finished)</button>
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