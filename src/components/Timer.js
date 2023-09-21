import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Timer = ({storeTime}) => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    storeTime(`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`);
    return `Return to inital phase in 1min, ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return <TimerContainer>{formatTime(seconds)}</TimerContainer>;
};

export default Timer;

const TimerContainer = styled.div`
  font-size: 1rem;
  font-weight: 600;
  background: #9bd7d5;
  padding: 0.4rem 0.8rem;
  display: flex;
  justify-content: center;
  border-radius: 2rem;
  color: #1616af;
`;
