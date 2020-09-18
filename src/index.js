import React, { useState, useEffect, useRef, useCallback } from 'react';
import ReactDOM from 'react-dom';
import 'what-input';
import App from './components/app';
import './styles/index.css';

const LEFT_KEY = 37;
const RIGHT_KEY = 39;

const Main = () => {
  const indexRef = useRef(0);

  const [index, setIndex] = useState(0);

  const keyDownRef = useRef(0);
  const graphRef = useRef(null);

  const nodeData = [
    {},
    require('./data/large/2').default,
    require('./data/small/0').default,
    require('./data/small/1').default,
    require('./data/small/2').default,
    require('./data/medium/1').default,
    require('./data/medium/2').default,
    require('./data/medium/3').default,
    require('./data/large/1').default,
    require('./data/large/2').default,
    require('./data/large/3').default
    // require('./data/iris').default,
    // require('./data/space').default,
  ];

  const handleKeyUp = e => {
    keyDownRef.current = null;
  };

  const handleKeyDown = useCallback(
    e => {
      const isLeftKey = e.keyCode === LEFT_KEY;
      const isRightKey = e.keyCode === RIGHT_KEY;
      const isUpKey = e.keyCode === 38;
      if (isLeftKey && keyDownRef.current !== LEFT_KEY) {
        const newIndex = Math.max(indexRef.current - 1, 0);
        setIndex(newIndex);
        indexRef.current = newIndex;
        keyDownRef.current = LEFT_KEY;
        graphRef.current.updatePipelineData();
      } else if (isRightKey && keyDownRef.current !== RIGHT_KEY) {
        const newIndex = Math.min(indexRef.current + 1, nodeData.length - 1);
        setIndex(newIndex);
        indexRef.current = newIndex;
        keyDownRef.current = RIGHT_KEY;
        graphRef.current.updatePipelineData();
      } else if (isUpKey && keyDownRef.current !== 38) {
        setIndex(0);
        indexRef.current = 0;
        keyDownRef.current = 38;
        graphRef.current.updatePipelineData();
      }
    },
    [nodeData, indexRef]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
  }, [handleKeyDown, index]);

  return (
    <>
      <App ref={r => (graphRef.current = r)} data={nodeData[index]} />
    </>
  );
};

ReactDOM.render(<Main />, document.getElementById('root'));
