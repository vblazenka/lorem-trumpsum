import generatorService from '../services/generatorService';

// Constants
export const CHANGE_TYPE = 'CHANGE_TYPE';
export const CHANGE_SIZE = 'CHANGE_SIZE';
export const CHANGE_TEXT = 'CHANGE_TEXT';

// Action Creators
export function changeType(type) {
  return {
    type: CHANGE_TYPE,
    payload: type
  };
}

export function changeSize(size) {
  return {
    type: CHANGE_SIZE,
    payload: size
  };
}

export function changeText(text) {
  return {
    type: CHANGE_TEXT,
    payload: text
  };
}

// Thunks
export function onChangeSize(size) {
  return function (dispatch, getState) {
    const state = getState();

    dispatch(changeSize(size));

    const loremText = generatorService(size, state.generator.type);

    dispatch(changeText(loremText));
  };
}

export function onChangeType(type) {
  return function (dispatch, getState) {
    const state = getState();

    dispatch(changeType(type));

    const loremText = generatorService(state.generator.size, type);

    dispatch(changeText(loremText));
  };
}
