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

// Change size
export function changeSize(size) {
  return {
    type: CHANGE_SIZE,
    payload: size
  };
}
 
// Change text
export function changeText(text) {
  return {
    type: CHANGE_TEXT,
    payload: text
  };
}

// Thunks

// Generate new text because size changed
export function onChangeSize(size) {
  return function (dispatch, getState) {
    // Get current state
    const state = getState();
  
    // Dispatch change size action
    dispatch(changeSize(size));
    
    // Generate text
    const loremText = generatorService(size, state.generator.type);
  
    // Dispatch change text action
    dispatch(changeText(loremText));
  };
}

// Generate new text because type changed
export function onChangeType(type) {
  return function (dispatch, getState) {
    // Get current state
    const state = getState();
  
    // Dispatch change size action
    dispatch(changeType(type));
    
    // Generate text
    const loremText = generatorService(state.generator.size, type);
    
    // Dispatch change text action
    dispatch(changeText(loremText));
  };
}
