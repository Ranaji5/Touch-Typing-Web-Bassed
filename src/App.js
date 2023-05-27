import React, { useState } from 'react';
import TypingBox from './components/TypingBox/TypingBox';
import NextKeys from './components/NextKeys/NextKeys';
import Statistics from './components/Statistics/Statistics';

const App = () => {
  const nextKeys = 'asdfjkl;';
  const [totalKeysPressed, setTotalKeysPressed] = useState(0);
  const [accuracy, setAccuracy] = useState(100);

  return (
    <div>
      <TypingBox
        setTotalKeysPressed={setTotalKeysPressed}
        setAccuracy={setAccuracy}
      />
      <NextKeys nextKeys={nextKeys} />
      <Statistics totalKeysPressed={totalKeysPressed} accuracy={accuracy} />
    </div>
  );
};

export default App;
