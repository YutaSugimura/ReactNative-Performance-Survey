import {useEffect} from 'react';
import {useIsLoadingDispatch} from '../context/isLoading';
import {useDictionaryDispatch} from '../context/dictionary';
import {useIndexListDispatch} from '../context/indexList';
import {sampleData} from '../scripts/sampleData';

export const useSetup = () => {
  const {toggle} = useIsLoadingDispatch();
  const {addDictionary} = useDictionaryDispatch();
  const {addList} = useIndexListDispatch();

  useEffect(() => {
    let isMounted = true;

    const init = () => {
      const startTime = Date.now();
      const list = sampleData();

      if (isMounted) {
        addDictionary(list);
        addList(list);

        toggle(false);
        const endTime = Date.now();
        console.log(endTime - startTime);
      }
    };

    init();

    return () => {
      isMounted = false;
    };
  }, []);
};
