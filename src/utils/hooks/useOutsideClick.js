import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useOutsideClick = (callback) => {
  const ref = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const handleClick = (event) => {
      callback();
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return ref;
};

export default useOutsideClick;
