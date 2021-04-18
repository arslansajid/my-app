import {
  SET_SELECTED_USER,
  SEND_MESSAGE,
} from "./types";


export const setSelectedUser = (user) => ({
  type: SET_SELECTED_USER,
  payload: user,
});

export const sendMessage = (message) => ({
  type: SEND_MESSAGE,
  payload: message,
});

