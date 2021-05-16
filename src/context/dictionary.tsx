import React, {createContext, useContext} from 'react';
import type {Dictionary, List} from '../types/item';
import {useDictionaryCore} from '../hooks/dictionary';

const DictionaryStateContext = createContext<{
  dictionary: Dictionary;
}>({
  dictionary: {},
});

const DictionaryDispatchContext = createContext<{
  addDictionary: (newList: List) => void;
  resetDictionary: () => void;
}>({
  addDictionary: _ => {},
  resetDictionary: () => {},
});

interface Props {
  children: React.ReactChild;
  initialState?: Dictionary;
}

const Provider: React.VFC<Props> = ({children, initialState}) => {
  const {dictionary, addDictionary, resetDictionary} =
    useDictionaryCore(initialState);

  return (
    <DictionaryStateContext.Provider value={{dictionary}}>
      <DictionaryDispatchContext.Provider
        value={{addDictionary, resetDictionary}}>
        {children}
      </DictionaryDispatchContext.Provider>
    </DictionaryStateContext.Provider>
  );
};

export default Provider;

export const useDictionaryState = () => useContext(DictionaryStateContext);
export const useDictionaryDispatch = () =>
  useContext(DictionaryDispatchContext);
