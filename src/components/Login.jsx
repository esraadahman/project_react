import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [username, setUsername] = useState('');

   
    localStorage.setItem('username', username);
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Hook for navigation

    const handleSubmit = (e) => {
        e.preventDefault();
        // Reset any previous error
        setError('');

        // Validation: Check if username is at least 3 characters
        if (username.length <= 3) {
            setError('Username must be at least 4 characters long.');
            return;
        }

        // Validation: Check if password is required and contains uppercase and lowercase letters
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{1,}$/;
        if (!password) {
            setError('Password is required.');
            return;
        }
        if (!passwordRegex.test(password)) {
            setError('Password must contain at least one uppercase letter and one lowercase letter.');
            return;
        }

        // If no errors, navigate to the home page
        navigate('/Home'); // Adjust to your actual home route
    };

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <form
                className='container mt-5'
                style={{ backgroundColor: "#f8d6e0", height: "400px", textAlign: "center", width: "25%", borderRadius: "10px" }}
                onSubmit={handleSubmit}
            >
                <div style={{ marginBottom: "10px" }}>
                    <label className='fw-bold' style={{ display: "block", marginLeft: "-150px", marginTop: "40px", marginBottom: '10px' }}>Username</label>
                    <input
                        type="text"
                        style={{ width: "70%", borderRadius: "5px", height: '30px', border: "none" }}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label className='fw-bold' style={{ display: "block", marginLeft: "-150px", marginTop: "40px" }}>Password</label>
                    <input
                        type="password"
                        style={{ width: "70%", height: '30px', borderRadius: "5px", border: "none" }}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
                <Button variant="secondary mt-5" type="submit" style={{ width: "50%" }}>
                    Login
                </Button>
            </form>
        </div>
    );
}
