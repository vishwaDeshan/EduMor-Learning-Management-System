import React, { useState, useEffect } from 'react';

const TimerCountDown = ({ targetMinutes }) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setMinutes(targetDate.getMinutes() + targetMinutes);

    const intervalId = setInterval(() => {
      const currentDate = new Date();
      const diff = targetDate - currentDate;
      if (diff <= 0) {
        clearInterval(intervalId);
        alert('Time is over!');
        return;
      }
      setTimeLeft({
        hours: Math.floor(diff / 1000 / 60 / 60),
        minutes: Math.floor(diff / 1000 / 60) % 60,
        seconds: Math.floor(diff / 1000) % 60,
      });
    }, 1000);
    return () => clearInterval(intervalId);
  }, [targetMinutes]);

  const formattedHours = `0${timeLeft.hours}`.slice(-2);
  const formattedMinutes = `0${timeLeft.minutes}`.slice(-2);
  const formattedSeconds = `0${timeLeft.seconds}`.slice(-2);

  return (
    <div>
      <p>{`${formattedHours}:${formattedMinutes}:${formattedSeconds}`}</p>
    </div>
  );
};

export default TimerCountDown;
