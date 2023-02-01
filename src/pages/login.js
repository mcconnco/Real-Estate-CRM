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
    };

    const handleUse = () => {
        if (open){
            setOpen(false)
        } else {
            setOpen(true)
        }
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