import React, { useEffect, useState } from 'react';
import './Countdown.css';

const Countdown = () => {
    const calculateTimeLeft = () => {
      const targetDate = new Date('2026-02-21T16:00:00-06:00');
      const now = new Date();
      const difference = targetDate - now;
  
      let timeLeft = {};
  
      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }
  
      return timeLeft;
    };
  
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  
    useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
      return () => clearInterval(timer);
    }, []);
  
    return (
      <div className="countdown-container my-4">
        <br/>
        <div className="d-flex justify-content-center gap-4 countdown-box">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="countdown-item">
              <div className="countdown-value">{String(value).padStart(2, '0')}</div>
              <div className="countdown-label">{unit.charAt(0).toUpperCase() + unit.slice(1)}</div>
            </div>
          ))}
        </div>
        <br/>
        <h4 className='countdown-title'>Until We Say "I Do!"</h4>
        <br/>
      </div>
    );
  };
  
export default Countdown;