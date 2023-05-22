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
        document.getElementById("birthday").innerHTML = t
        

        t = data.user.sw_active
        if (t === 1) {
            document.getElementById("active").innerHTML = "Active"
        } else {
            document.getElementById("active").innerHTML = "Inactive"
        }
        t = data.user.sw_admin
        if (t === 1) {
            document.getElementById("admin_status").innerHTML = "Admin"
        } else {
            document.getElementById("admin_status").innerHTML = "Agent"
        }

    }

    //Run when the Update Account button is clicked, Will run an updateUser with the data currently in the input fields (except passwords in some cases)
    function handleSubmit(){
        var name = document.getElementById("first_name").value;
        var last = document.getElementById("last_name").value;
        var email = document.getElementById("email").value;
        var username = document.getElementById("username").value;
        var phone = document.getElementById("phone_number").value;
        var pass = document.getElementById("password").value;
        var pass_conf = document.getElementById("password_confirm").value;
        var change_pass = 0;
        if (pass === pass_conf){
            //if the 2 password fields are the same but they are also empty, then nothing gets changed
            if(pass !== ""){
                change_pass = 1;
                alert('Password Change Success!');
            }
        }else{
            alert("Password change failed, fields do not match.");
        }
        var currentAgent = JSON.parse(atob(localStorage.getItem("user_details")));
        //a key part for the api/User/update call to work is that the user_mod_id matches the user_id in the request
        updateUser(currentAgent.id_user, name, last, username, email, phone, currentAgent.id_user, pass, change_pass);

    }

    function updateUser(user_id, first_name, last_name, username, email, phone_num, user_mod_id, pass, sw_change_pass, sw_Active){  
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json', },
            body: JSON.stringify({
                "id_user": user_id,
                "first_name": first_name,
                "last_name": last_name,
                "username": username,
                "password": pass,
                "email": email,
                "phone_num": phone_num,
                "sw_change_pass": sw_change_pass,
                "sw_active": 1,
                "id_user_mod": user_mod_id,
            })
        };
        fetch('https://localhost:44334/api/User/update', requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    console.log("User/Update success");

                }
                else {
                    console.log("User Change Failure");
                }
    
            window.location.reload()
            });
    }

    useEffect(() => {
        var currentAgent = JSON.parse(atob(localStorage.getItem("user_details")))
        console.log('Current Agent ID: ' + currentAgent.id_user)
        getUserData(currentAgent.id_user); 
    })
    return (
        <div>
            <section>
                <div>
                    <div>
                        <h1>
                            Account Page
                        </h1>

                        <label class="fw-bold">Account Permissions:</label>
                        <p id="admin_status"></p>

                        <h1>
                            Account Info
                        </h1>

                        <button onClick={handleSubmit} class="btn btn-outline-primary">Update Account</button>
                        
                        {/*The ul tags are a styling choice to indent elements while keeping them uniform*/ }
                        <ul>
                            <label class="fw-bold">First name</label>
                            <input class="form-control" id="first_name" placeholder="Enter first name" />
                            
                            <label class="fw-bold">Last name</label>
                            <input class="form-control" id="last_name" placeholder="Enter last name" />
                        
                            <label class="fw-bold">Email</label>
                            <input class="form-control" id="email" placeholder="Enter Email" />
                            
                            <label class="fw-bold">Username</label>
                            <input class="form-control" id="username" placeholder="Enter Username" />
                            
                            
                            <label class="fw-bold">Password</label>
                            <input type="password" class="form-control" id="password" placeholder="Enter New Password" />
                            <label class="fw-bold">Confirm Password</label>
                            <input type="password" class="form-control" id="password_confirm" placeholder="Confirm New Password" />
        
                            <label class="fw-bold">Account Status:</label>
                            <p id="active"></p>
                        </ul>

                        <h1>
                            Public Methods of Contact
                        </h1>

                        <ul>
                            <label class="fw-bold">Public Email</label>
                            <p id="public_email" ></p>
                        
                            <label class="fw-bold">Phone Number</label>
                            <input class="form-control" id="phone_number" placeholder="Enter Phone Number" />
                        </ul>
                        
                        <h1>
                            Account Birthday:
                        </h1>
                        <ul>
                            <p id="birthday"></p>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Account