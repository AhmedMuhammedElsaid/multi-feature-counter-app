import { INCREMENT_NUM, DECREMENT_NUM, RESET } from "../constants/ActionTypes";

export function incrementNum(payload) {
  return {
    type: INCREMENT_NUM,
    payload: payload
  };
}

export function decrementNum(payload) {
  return {
    type: DECREMENT_NUM,
    payload: payload
  };
}
export function resetNum(payload) {
  return {
    type: RESET,
    payload: payload

  };
}