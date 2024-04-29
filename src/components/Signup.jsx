import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:4000/signup', { email, password });
            console.log('Signup successful');
            // Redirect or do something else after successful signup
        } catch (error) {
            setError('User already exists or invalid input');
            console.error('Error:', error);
        }
    };

    return (
        <div className='signup' id='user'>
            <h2>Signup</h2>
            <form onSubmit={handleSignup}>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                {error && <div style={{ color: 'red' }}>{error}</div>}
                <button type="submit" className='signup_button'>Signup</button>
            </form>
        </div>
    );
};

export default Signup;
