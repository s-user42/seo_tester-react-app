import { useState } from 'react';

function useLocalStorage(key, initialValue) {

  const getInitialValue = () => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  };

  const [storedValue, setStoredValue] = useState(getInitialValue);

  const setValue = (value) => {
    setStoredValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
}

export default useLocalStorage;
