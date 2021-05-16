export type Item = {
  title: string;
  description: string;
  author: string;
};

export type Dictionary = {
  [key: string]: Item;
};

export interface ListItem extends Item {
  key: string;
}

export type List = ListItem[];

export type IndexList = string[];
