import initialState from "./initialState";
import {
  SET_SELECTED_USER,
  SEND_MESSAGE
} from "./types";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_USER:
      return {
        ...state,
        selectedUser: action.payload,
      };
    case SEND_MESSAGE:
      const messageObject = {
        date: new Date(),
        message: action.payload
      }
      const currUser = state.users.find(x => x.name === state.selectedUser.name);
      currUser.messages.push(messageObject);
      return {
        ...state,
        users: [
          ...state.users
        ],
      };
    default:
      return state;
  }
};

export default reducer;
