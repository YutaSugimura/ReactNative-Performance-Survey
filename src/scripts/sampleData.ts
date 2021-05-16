import type {Item, List} from '../types/item';

export const sampleData = () => {
  const newList: List = [];

  const item: Item = {
    title: 'title',
    description: 'description',
    author: 'author',
  };

  let count = 0;
  while (count < 10000) {
    newList.push({
      key: `key_${count}`,
      title: `${item.title}_${count}`,
      description: `${item.description}_${count}`,
      author: `${item.author}_${count}`,
    });

    count++;
  }

  return newList;
};
