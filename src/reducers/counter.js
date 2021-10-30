import { INCREMENT_NUM, DECREMENT_NUM, RESET } from "../constants/ActionTypes";

export default function reducer(
  state = { counterOne: 0, counterTwo: 0 },
  action
) {
  switch (action.type) {
    case INCREMENT_NUM:
      if (action.payload) {
        const { counterIndx, payload } = action.payload;
        state = {
          ...state,
          [counterIndx]: state[counterIndx] + (payload || 1),
        };
        return state;
      }
    case DECREMENT_NUM:
      if (action.payload) {
        const { counterIndx, payload } = action.payload;
        state = {
          ...state,
          [counterIndx]: state[counterIndx] - (payload || 1),
        };
        return state;
      }
    case RESET:
      if (action.payload) {
        const { counterIndx, payload } = action.payload;
        state = { ...state, [counterIndx]: 0 };
        return state;
      }
  }
  return state;
}
