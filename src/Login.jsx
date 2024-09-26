import React, { useState } from "react";

export default function Login(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (username === 'user' && password === 'password') {
            setMessage(`Welcome, ${username}`);
            setIsLoggedIn(true);
          } else {
            setMessage('Invalid username or password');
          }

    }
    return(
        <div>
            <h1>Login Page</h1>
            { message && <p>{message}</p>}
            {!isLoggedIn ? ( 
            <form onSubmit={handleSubmit}>
            <div>
            <label >Username:</label>
            <input
            type="text"
            value={username}
            placeholder="username"
            id="username"
            onChange={(e) =>setUsername(e.target.value)}
            required
            />
            </div>
            <div>
            <label >Password:</label>
            <input
            type="password"
            value={password}
            placeholder="password"
            id="password"
            onChange={(e) =>setPassword(e.target.value)}
            required
            />
            </div>
            <button type="submit">Submit</button>
            </form>
            ) : null}
           
        </div>
    );
}