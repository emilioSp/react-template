import React, { useState, useEffect } from 'react';

export const Time = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000);
  }, [time]);

  return <h1>Current time: {time.toLocaleString()}</h1>
};