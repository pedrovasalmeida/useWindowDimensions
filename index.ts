import { useState, useEffect, useCallback } from 'react';

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;

  return { width, height };
};

const useWindowDimensions = () => {
  const [windowDimesions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    const handleSize = useCallback(() => {
      setWindowDimensions(getWindowDimensions);
    }, []);

    window.addEventListener('resize', handleSize);

    return () => window.removeEventListener('resize', handleSize);
  }, []);

  return windowDimesions;
};

export default useWindowDimensions;
