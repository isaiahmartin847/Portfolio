"use client"
import React, { useState, useEffect } from 'react';


const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0
  });

  useEffect(() => {
    const targetDate = new Date('2024-08-25T00:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

      setTimeLeft({ days, hours, minutes });

      if (difference < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div>
        Going public in {timeLeft.days} days, {timeLeft.hours} hours, {timeLeft.minutes} minutes
      </div>
    </div>
  );
};

export default CountdownTimer;