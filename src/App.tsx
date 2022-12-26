import { appStyle } from './style.css';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { DynamicIslandType } from '../electron/type';
import { Clock } from './widgets/Clock';

const dynamicIsland: { [type in DynamicIslandType]: { width: number; height: number } } = {
  normal: { width: 289.5, height: 55.5 },
  short: { width: 187.5, height: 55.5 },
  square: { width: 289.5, height: 289.5 },
  expand: { width: 559.5, height: 124.5 },
  maximum: { width: 559.5, height: 300 },
};

function App() {
  const [type, setType] = useState<DynamicIslandType>('normal');
  const { width, height } = dynamicIsland[type];

  const resize = () => {
    const index = Object.keys(dynamicIsland).findIndex(key => key === type);
    const nextType = Object.keys(dynamicIsland)[(index + 1) % Object.keys(dynamicIsland).length] as DynamicIslandType;
    setType(nextType);
    window.Main.Resize(nextType);
  };

  return (
    <motion.div
      animate={{ width, height }}
      transition={{ ease: [0.34, 1.25, 0.64, 1] }}
      className={appStyle}
      onClick={resize}
    >
      <Clock />
    </motion.div>
  );
}

export default App;
