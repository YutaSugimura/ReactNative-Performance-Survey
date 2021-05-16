import {useCallback, useMemo, useState} from 'react';

export const useCounterCore = (initialState = 0) => {
  const [state, setState] = useState<number>(initialState);

  const increment = useCallback(() => {
    setState(prev => prev + 1);
  }, []);

  const decrement = useCallback(() => {
    setState(prev => prev - 1);
  }, []);

  return {
    count: useMemo(() => state, [state]),
    increment,
    decrement,
  };
};
