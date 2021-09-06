import { ADD_EVENT, GET_EVENTS } from '../../action/action-type'

const intialState = {
  events: []
};


function eventReducer (state = intialState, action) {
  switch (action.type) {
    case ADD_EVENT:
      return {
        articles: [
          ...state.events,
          action.payload
        ]
      }
      break;
    case GET_EVENTS:
      return {
        events: action.payload
      }
      break;
    default:
      return state;
  }
}

export default eventReducer;