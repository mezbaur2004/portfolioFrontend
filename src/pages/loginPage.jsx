import React, { useState } from 'react';
import URL from "../others/variables.js"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/loginPage.css'

const LoginPage = () => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            // Send POST request to the login API
            const response = await axios.post(`${URL}/login`, { password });

            // Check if the response contains the JWT token
            if (response.data.token) {
                localStorage.setItem('jwt', response.data.token); // Save JWT
                localStorage.setItem('isLoggedIn', 'true'); // Save login state
                navigate('/admin'); // Redirect to admin page
            } else {
                setError('Invalid credentials');
            }
        } catch (err) {
            setError('An error occurred during login');
            console.error('Error during login:', err.response ? err.response.data : err.message);
        }
    };

    return (
        <div className="login-page">
            <h2>Admin Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
                {error && <p className="error-message">{error}</p>}
            </form>
        </div>
    );
};

export default LoginPage;
