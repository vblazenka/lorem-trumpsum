import {
  CHANGE_TYPE,
  CHANGE_SIZE,
  CHANGE_TEXT
} from '../actions';

// Constants
import TYPES from '../constants/generatorTypes';

const initialState = {
  type: TYPES.PARAGRAPHS,
  size: 1,
  text: ['I will build a great wall -- and nobody builds walls better than me, believe me --and I will build them very inexpensively. I will build a great, great wall on our southern border, and I will make Mexico pay for that wall. Mark my words.'],
  min: 1,
  max: 10
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CHANGE_TYPE:
      return { ...state, type: action.payload, max: action.payload === TYPES.PARAGRAPHS ? 10 : 600 };

    case CHANGE_SIZE:
      return { ...state, size: action.payload };

    case CHANGE_TEXT:
      return { ...state, text: action.payload };

    default:
      return state;
  }
}
