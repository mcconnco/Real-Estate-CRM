import React, { useState } from "react";
import './pages.css';

const Login = ({redirect}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    //create new account params
    const [agentNum, setAgent] = useState("");
    const [newFName, setFName] = useState("");
    const [newLName, setLName] = useState("");
    const [newUsername, setNewUsername] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setCPassword] = useState("");
    const [newEMail, setEMail] = useState("");
    const [newPhone, setPhone] = useState("");

    const [accountOpen, setAccountOpen] = useState(false)

    const toggleMenu = () => {
        setAccountOpen(!accountOpen)
        setAgent("")
        setFName("")
        setLName("")
        setEMail("")
        setPhone("")
        setNewUsername("")
        setNewPassword("")
        setCPassword("")
    }

    const newAccount = (e) => {
        e.preventDefault();
        const agent = e.target.elements.agentNum.value
        const fname = e.target.elements.fname.value
        const lname = e.target.elements.lname.value
        const email = e.target.elements.email.value
        const phone = e.target.elements.phone.value
        const user = e.target.elements.newusername.value
        const pass = e.target.elements.newpassword.value
        const cpass = e.target.elements.cpassword.value
        if (pass === cpass) {
            createUser(agent, fname, lname, email, phone, user, pass)
            setAccountOpen(!accountOpen)
        } else {
            window.alert("Confirmation Password does not match Desired Password")
        }
    }

    async function createUser(agent, fname, lname, email, phone, user, pass) {
        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            body: JSON.stringify({
                "agent_number": agent,
                "first_name": fname,
                "last_name": lname,
                "username": user,
                "password": pass,
                "email": email,
                "phone_num": phone,
                "id_user_create": 1,
                "sw_admin": 0,
                "sw_agent": 1
            })
        };
        fetch('https://fastlinkcrm.azurewebsites.net/api/User/register', requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    console.log("data: ", data)
                    window.alert("Account Created Successfully")
                } else {
                    console.log("data: ", data)
                    var err = JSON.stringify(data.message)
                    window.alert(err)
                }
            });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform login logic here
        console.log(`Logging in with ${username} and ${password}`);
        login(username, password)
    }

    // Remember to use Authentication: 'Bearer {token}'} (on the header) for controllers other than the Login
    async function login(user, pass) {
        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            body: JSON.stringify({
                "user": user,
                "pwd": pass,
                "id_user": 0,
                "id_role": 0
            })
        };
        fetch('https://fastlinkcrm.azurewebsites.net/api/Auth/authenticate', requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('permissions', btoa(JSON.stringify(data.permissions)))
                    localStorage.setItem('user_details', btoa(JSON.stringify(data.user)))

                    console.log("User permissions: " + atob(localStorage.getItem('permissions')))
                    console.log("User details: " + atob(localStorage.getItem('user_details')))
                    if (redirect) {
                        window.history.pushState({}, null, redirect)
                    }
                }

                else {
                    console.log("data: ", data)
                    window.alert("Bad login")
                }

                window.location.reload()
            });
    }

    return (
        <div>
            <section>
                <div className="dialog text-center">
                    <form onSubmit={handleSubmit}>
                        <input
                            className="userInput border border-dark rounded-pill"
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <br />
                        <input
                            className="userInput border border-dark rounded-pill"
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <br />
                        <button type="submit" className="login-btn rounded-pill">Login</button>
                    </form>
                    <button onClick={toggleMenu} className="btn btn-link btn-sm text-primary" >Create Account</button>
                    {accountOpen &&
                        <form onSubmit={newAccount}>
                            <input className="userInput" type="text" name="agentNum" placeholder="Agent Number" value={agentNum} onChange={(e) => setAgent(e.target.value)} />
                            <br />
                            <input className="userInput" type="text" name="fname" placeholder="First Name" value={newFName} onChange={(e) => setFName(e.target.value)} />
                            <br />
                            <input className="userInput" type="text" name="lname" placeholder="Last Name" value={newLName} onChange={(e) => setLName(e.target.value)} />
                            <br />
                            <input className="userInput" type="text" name="email" placeholder="Valid E-Mail" value={newEMail} onChange={(e) => setEMail(e.target.value)} />
                            <br />
                            <input className="userInput" type="text" name="phone" placeholder="Valid Phone Number" value={newPhone} onChange={(e) => setPhone(e.target.value)} />
                            <br />
                            <input className="userInput" type="text" name="newusername" placeholder="Desired Username" value={newUsername} onChange={(e) => setNewUsername(e.target.value)} />
                            <br />
                            <input className="userInput" type="password" name="newpassword" placeholder="Desired Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                            <br />
                            <input className="userInput" type="password" name="cpassword" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setCPassword(e.target.value)} />
                            <br />
                            <button type="submit">Register</button>
                            <button onClick={toggleMenu}>Close</button>
                        </form>
                    }
                </div>
            </section>
        </div>
    );
}

export default Login