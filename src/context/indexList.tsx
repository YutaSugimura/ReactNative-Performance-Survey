import React, {createContext, useContext} from 'react';
import type {IndexList, List} from '../types/item';
import {useIndexListCore} from '../hooks/indexList';

const IndexListStateContext = createContext<{
  list: IndexList;
}>({
  list: [],
});

const IndexListDispatchContext = createContext<{
  addList: (newList: List) => void;
  resetList: () => void;
}>({
  addList: _ => {},
  resetList: () => {},
});

interface Props {
  children: React.ReactChild;
  initialState?: IndexList;
}

const Provider: React.VFC<Props> = ({children, initialState}) => {
  const {list, addList, resetList} = useIndexListCore(initialState);

  return (
    <IndexListStateContext.Provider value={{list}}>
      <IndexListDispatchContext.Provider value={{addList, resetList}}>
        {children}
      </IndexListDispatchContext.Provider>
    </IndexListStateContext.Provider>
  );
};

export default Provider;

export const useIndexListState = () => useContext(IndexListStateContext);
export const useIndexListDispatch = () => useContext(IndexListDispatchContext);
