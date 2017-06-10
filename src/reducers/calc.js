import * as actions from '../actions';

const calc = (state = {
  number: 0
}, action = {}) => {
  switch (action.type) {
    case actions.INCREMENT:
      return {
        ...state,
        number: state.number + 1
      }
    break;

    case actions.DECREMENT:
      return {
        ...state,
        number: state.number - 1
      }
    break;

    default:
      return state;
    break;
  }
};

export default calc;
