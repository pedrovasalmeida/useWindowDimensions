import { useState, useEffect } from 'react';

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;

  return { width, height };
};

const useWindowDimensions = () => {
  const [windowDimesions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    const handleSize = () => {
      setWindowDimensions(getWindowDimensions);
    };

    window.addEventListener('resize', handleSize);

    return () => window.removeEventListener('resize', handleSize);
  }, []);

  return windowDimesions;
};

export default useWindowDimensions;
