import {useState} from 'react';
import type {IndexList, List} from '../types/item';

export const useIndexListCore = (initialState: IndexList = []) => {
  const [state, setState] = useState<IndexList>(initialState);

  const addList = (newList: List) => {
    const newArray: IndexList = [];

    newList.forEach(item => {
      newArray.push(item.key);
    });

    setState([...state, ...newArray]);
  };

  const resetList = () => {
    setState([]);
  };

  return {
    list: state,
    addList,
    resetList,
  };
};
