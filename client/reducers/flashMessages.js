//simple function that takes state and action
//and returns new state
import { ADD_FLASH_MESSAGE } from '../actions/types';
import shortid from 'shortid'

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
      ]
    default: return state;
  }
}
