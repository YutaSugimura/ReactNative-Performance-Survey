import {useCallback, useMemo, useState} from 'react';

export const useIsLoadingCore = (initialState = true) => {
  const [isLoading, setIsLoading] = useState<boolean>(initialState);

  const toggle = useCallback((bool?: boolean) => {
    setIsLoading(bool !== undefined ? bool : prev => !prev);
  }, []);

  return {
    isLoading: useMemo(() => isLoading, [isLoading]),
    toggle,
  };
};
