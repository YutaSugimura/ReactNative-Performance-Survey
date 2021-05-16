import React, {createContext, useContext} from 'react';
import {useIsLoadingCore} from '../hooks/isLoading';

const IsLoadingStateContext = createContext<{
  isLoading: boolean;
}>({
  isLoading: true,
});

const IsLoadingDispatchContext = createContext<{
  toggle: (bool?: boolean) => void;
}>({
  toggle: () => {},
});

interface Props {
  children: React.ReactChild;
  initialState?: boolean;
}

const Provider: React.VFC<Props> = ({children, initialState}) => {
  const {isLoading, toggle} = useIsLoadingCore(initialState);

  return (
    <IsLoadingStateContext.Provider value={{isLoading}}>
      <IsLoadingDispatchContext.Provider value={{toggle}}>
        {children}
      </IsLoadingDispatchContext.Provider>
    </IsLoadingStateContext.Provider>
  );
};

export default Provider;

export const useIsLoadingState = () => useContext(IsLoadingStateContext);
export const useIsLoadingDispatch = () => useContext(IsLoadingDispatchContext);
