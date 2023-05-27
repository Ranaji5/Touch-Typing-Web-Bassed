import React, { useState, useEffect } from 'react';
import TypingBox from './TypingBox';
import Statistics from './Statistics';
import Timer from './Timer';
import './TypingApp.css';

const TypingApp = () => {
  const [typedKeys, setTypedKeys] = useState('');
  const [expectedKeys, setExpectedKeys] = useState('');
  const [totalKeysPressed, setTotalKeysPressed] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [timer, setTimer] = useState(300); // 5 minutes in seconds

  useEffect(() => {
    generateKeys();
  }, []);

  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      return () => {
        clearInterval(countdown);
        calculateStatistics();
      };
    } else {
      calculateStatistics();
    }
  }, [timer]);

  const generateKeys = () => {
    const keys = 'asdfjkl;';
    let shuffledKeys = '';

    while (keys.length > 0) {
      const randomIndex = Math.floor(Math.random() * keys.length);
      const randomKey = keys.charAt(randomIndex);
      shuffledKeys += randomKey;
      keys = keys.slice(0, randomIndex) + keys.slice(randomIndex + 1);
    }

    setExpectedKeys(shuffledKeys);
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setTypedKeys(value);
  };

  const calculateStatistics = () => {
    const keysPressed = typedKeys.length;
    const accuracy = calculateAccuracy(typedKeys);

    setTotalKeysPressed(keysPressed);
    setAccuracy(accuracy);
  };

  const calculateAccuracy = (typedKeys) => {
    let errors = 0;
    const expected = expectedKeys.slice(0, typedKeys.length);

    for (let i = 0; i < typedKeys.length; i++) {
      if (typedKeys[i] !== expected[i]) {
        errors++;
      }
    }

    const accuracy = ((typedKeys.length - errors) / typedKeys.length) * 100;
    return accuracy.toFixed(2);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="typing-app-container">
      <Timer timer={timer} formatTime={formatTime} />
      <TypingBox
        expectedKeys={expectedKeys}
        typedKeys={typedKeys}
        handleInputChange={handleInputChange}
      />
      <Statistics totalKeysPressed={totalKeysPressed} accuracy={accuracy} />
    </div>
  );
};

export default TypingApp;
