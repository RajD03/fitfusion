import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:4000/login', { email, password });
            const token = response.data.token;
            localStorage.setItem('token', token);
            console.log('Login successful');
        } catch (error) {
            setError('Invalid email or password');
            console.error('Error:', error);
        }
    };

    return (
        <div className='login'>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                {error && <div style={{ color: 'red' }}>{error}</div>}
                <button type="submit" className='login_button'>Login</button>
            </form>
        </div>
    );
};

export default Login;
