// src/components/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const isSessionValid = () => {
  const auth = localStorage.getItem('wedding-auth');
  const expiry = localStorage.getItem('wedding-auth-expiry');

  if (!auth || !expiry) return false;

  const now = new Date();
  const expiresAt = new Date(expiry);

  if (now > expiresAt) {
    localStorage.removeItem('wedding-auth');
    localStorage.removeItem('wedding-auth-expiry');
    return false;
  }

  return true;
};

const PrivateRoute = ({ children }) => {
  return isSessionValid() ? children : <Navigate to="/" replace />;
};

export default PrivateRoute;