import React from 'react';
import { useState, useEffect } from 'react';

type Props = {
  x: number;
};

export const Time = ({ x }: Props) => {
  const [time, setTime] = useState(new Date());
  console.log('Only to test typescript!', x);

  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000);
  }, [time]);

  return <h1>Current time: {time.toLocaleString()}</h1>;
};
