import React, { useState } from "react";
import './pages.css';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [open, setOpen] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform login logic here
        console.log(`Logging in with ${username} and ${password}`);
        login();
    };

    const handleUse = () => {
        if (open) {
            setOpen(false)
        } else {
            setOpen(true)
        }
    }
    // Remember to use Authentication: 'Bearer {token}'} (on the header) for controllers other than the Login
    async function login() {
        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',},
            body: JSON.stringify({
                "user": "admin",
                "pwd": "admin",
                "id_user": 0,
                "id_role": 0
            })
        };
        fetch('https://localhost:44334/api/Auth/authenticate', requestOptions)
        .then(response => response.json())
        .then(data => {
            localStorage.setItem('token', data.token);
            localStorage.setItem('permissions', btoa(JSON.stringify(data.permissions)))

            console.log("User permissions: " + atob(localStorage.getItem('permissions')));
        });
    }

    return (
        <div>
            <section>
                <div>
                    <button onClick={handleUse}>Login Prompt</button>
                    {open && (
                        <div className="dialog">
                            <form onSubmit={handleSubmit}>
                                <input
                                    className="userInput"
                                    type="text"
                                    placeholder="Username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                <br />
                                <input
                                    className="userInput"
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <br />
                                <button type="submit">Login</button>
                            </form>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}

export default Login