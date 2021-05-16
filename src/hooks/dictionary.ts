import {useState} from 'react';
import type {Dictionary, List} from '../types/item';

export const useDictionaryCore = (initialState: Dictionary = {}) => {
  const [state, setState] = useState<Dictionary>(initialState);

  const addDictionary = (newList: List) => {
    const newDictionary: Dictionary = {...state};

    for (const item of newList) {
      newDictionary[item.key] = {
        title: item.title,
        description: item.description,
        author: item.author,
      };
    }

    setState(newDictionary);
  };

  const resetDictionary = () => {
    setState({});
  };

  return {
    dictionary: state,
    addDictionary,
    resetDictionary,
  };
};
