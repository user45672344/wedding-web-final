// Updated App.js with protected routes
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Travel from './pages/Travel';
import Registry from './pages/Registry';
import Events from './pages/Events';
import DressCode from './pages/DressCode';
import RSVP from './pages/RSVP';
//import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/gallery"
          element={
            <PrivateRoute>
              <Gallery />
            </PrivateRoute>
          }
        />
        <Route
          path="/travel"
          element={
            <PrivateRoute>
              <Travel />
            </PrivateRoute>
          }
        />
        <Route
          path="/registry"
          element={
            <PrivateRoute>
              <Registry />
            </PrivateRoute>
          }
        />
        <Route
          path="/events"
          element={
            <PrivateRoute>
              <Events />
            </PrivateRoute>
          }
        />
        <Route
          path="/dresscode"
          element={
            <PrivateRoute>
              <DressCode />
            </PrivateRoute>
          }
        />
        <Route
          path="/rsvp"
          element={
            <PrivateRoute>
              <RSVP />
            </PrivateRoute>
          }
        />

        {/* Redirect unknown routes to dashboard */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;