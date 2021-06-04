import {useEffect, useState} from 'react';

export const useMeasure = () => {
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [results, setResults] = useState<number[]>([]);

  useEffect(() => {
    const init = async () => {
      const list: number[] = [];

      for (let i = 0; i < 10; i++) {
        const result = primaryNumber(5000);
        list.push(result);
      }

      setResults([...list]);

      return setIsCompleted(true);
    };

    init();
  }, []);

  return {
    isCompleted,
    results,
    average: 0,
  };
};

const primaryNumber = (num = 1000) => {
  const startTime = new Date().getTime();

  const list: number[] = [];
  for (let i = 2; i < num; i++) {
    if (i === 2) {
      list.push(2);
      continue;
    } else if (i % 2 === 0) {
      continue;
    }

    let result = true;
    for (const item of list) {
      if (i * i < item) {
        break;
      }

      if (i % item === 0) {
        result = false;
        break;
      }
    }

    if (result) {
      list.push(i);
    }
  }

  const endTime = new Date().getTime();
  return endTime - startTime;
};
