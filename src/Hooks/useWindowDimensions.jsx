import { useState, useEffect } from "react";

function useWindowDimensions() {
  const[windowDimensions, setWindowDimensions ] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const hanndleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
    window.addEventListener('resize' , hanndleResize);

    return window.removeEventListener('resize', hanndleResize);
  },[])

  return windowDimensions
}

export default useWindowDimensions