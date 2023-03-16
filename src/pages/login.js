import React, { useState } from "react";
import './pages.css';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform login logic here
        const user = e.target.elements.username.value
        const pass = e.target.elements.password.value
        console.log(`Logging in with ${username} and ${password}`);
        login(user, pass)
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
        fetch('https://localhost:44334/api/Auth/authenticate', requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('permissions', btoa(JSON.stringify(data.permissions)))
                    localStorage.setItem('user_details', btoa(JSON.stringify(data.user)))

                    console.log("User permissions: " + atob(localStorage.getItem('permissions')))
                    console.log("User details: " + atob(localStorage.getItem('user_details')))
                }

                else {
                    window.alert("Bad login")
                }

            window.location.reload()
            });
    }

    return (
        <div>
            <section>
                <div className="dialog">
                    <form onSubmit={handleSubmit}>
                        <input
                            className="userInput"
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <br />
                        <input
                            className="userInput"
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <br />
                        <button type="submit">Login</button>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Login