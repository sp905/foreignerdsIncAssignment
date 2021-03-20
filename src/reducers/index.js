import {ADD_STRING} from '../constants';
const initialState = {
  listData: [],
};
const reducerMethod = (state = initialState, action) => {
  let {type, payload} = action;
  switch (type) {
    case ADD_STRING:
      return {...state, listData: [payload, ...state.listData]};
    default:
      return state;
  }
};
export default reducerMethod;
