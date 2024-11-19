import {UserAction as Action} from './../actions';
const initialState = {};

const userReducer = (state = initialState, {payload, type}) => {
  switch (type) {
    case Action.CLEAR:
      return initialState;
    case Action.SET:
      console.log('=>(user-reducer.js:10) payload', payload);
      return {...payload};
    default:
      return state;
  }
};

export default userReducer;
