import { assign } from 'lodash';

export const mappingEditedMovie = (original: any, recieved: any) => {
  return original.map((item: any) => (item.id === recieved.id ? assign(item, recieved) : item));
};

export const addNewMovie = (original: any, recieved: any) => original.concat(recieved);
