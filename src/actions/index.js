import {ADD_STRING} from '../constants';

const _id = () => {
  let id = Date.now();
  id = id.toString();
  return id;
};
export const addStringAction = value => {
  return {
    type: ADD_STRING,
    payload: {_id: _id(), value},
  };
};
