//simple function that takes state and action
//and returns new state
import { ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE } from '../actions/types';
import shortid from 'shortid';
import findIndex from 'lodash/findIndex';

export default (state = [], action = {}) => {
  switch(action.type) {
    case ADD_FLASH_MESSAGE:
      return [//return new state and add object in collection
        ...state,
        {
          id: shortid.generate(),//generate unique id from lib
          type: action.message.type,
          text: action.message.text
        }
      ];
    case DELETE_FLASH_MESSAGE:
      const index = findIndex(state, { id: action.id });
      if(index >= 0) {
        return [
          ...state.slice(0,index),
          ...state.slice(index + 1)
        ];
      }
      return state;

    default: return state;
  }
}
