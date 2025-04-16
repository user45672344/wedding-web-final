// File: src/pages/Login.js
/* import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

//const CORRECT_PASSWORD = process.env.REACT_APP_LOGIN_PASSWORD;
const EXPIRATION_MINUTES = 60; // 1 hour session

const Login = () => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
            const isProd = process.env.NODE_ENV === 'production';
            const apiURL = isProd 
              ? 'https://wedding-web-final-nf7q.vercel.app/api/login' 
              : '/api/login'; // local fallback
            
            const res = await fetch(apiURL, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ password }),
            });
      
          if (!res.ok) {
            throw new Error('Invalid password');
          }
      
          const data = await res.json();
          const expiry = new Date();
          expiry.setMinutes(expiry.getMinutes() + EXPIRATION_MINUTES);
      
          localStorage.setItem('wedding-auth', 'true');
          localStorage.setItem('wedding-auth-expiry', expiry.toISOString());
          localStorage.setItem('wedding-token', data.token); // 🔐 Save the JWT token
      
          navigate('/home');
        } catch (err) {
          setError(err.message || 'An error occurred.');
        }
      };

  return (
    <div className="login-wrapper d-flex align-items-center justify-content-center">
      <div className="card login-card text-center p-4">
        <img src="/shelllogo.png" alt="Wedding Logo" className="login-logo mx-auto mb-3" />
        <h2 className="mb-3">Welcome to Lexi & Mason's Wedding Website</h2>
        <p className="mb-4 px-2">
          We're so excited to celebrate with you! Please enter the password given on the invitation below to view all of the event details, RSVP, and more.
        </p>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="password"
            className="form-control mb-3"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <div className="text-danger mb-3">{error}</div>}
          <button type="submit" className="btn btn-dark w-100">Enter</button>
        </form>
      </div>
    </div>
  );
};

export default Login; */