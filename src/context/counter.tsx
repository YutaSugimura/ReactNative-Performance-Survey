import React, {createContext, useContext} from 'react';
import {useCounterCore} from '../hooks/counter';

const CounterStateContext = createContext({
  count: 0,
});

const CounterDispatchContext = createContext<{
  increment: () => void;
  decrement: () => void;
}>({
  increment: () => {},
  decrement: () => {},
});

interface Props {
  children: React.ReactChild;
  initialState?: number;
}

const Provider: React.VFC<Props> = ({children, initialState}) => {
  const {count, increment, decrement} = useCounterCore(initialState);
  return (
    <CounterStateContext.Provider value={{count}}>
      <CounterDispatchContext.Provider value={{increment, decrement}}>
        {children}
      </CounterDispatchContext.Provider>
    </CounterStateContext.Provider>
  );
};

export default Provider;

export const useCounterState = () => useContext(CounterStateContext);
export const useCounterDispatch = () => useContext(CounterDispatchContext);
