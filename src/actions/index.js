import Firebase from '../firebase';
import {
  ADD_MESSAGE,
  START_FETCHING_MESSAGES,
  RECEIVED_MESSAGES,
  USER_START_AUTHORIZING,
  USER_AUTHORIZED,
} from '../types';

export const addMessage = message => ({
  type: ADD_MESSAGE,
  ...message,
});

export const receivedMessages = () => ({
  type: RECEIVED_MESSAGES,
  receivedAt: Date.now(),
});

export const startFetchingMessages = () => ({
  type: START_FETCHING_MESSAGES,
});

export const receiveMessages = (messages) => {
  return function (dispatch) {
    Object.values(messages).forEach(msg => dispatch(addMessage(msg)));

    dispatch(receivedMessages());
  };
};

export const fetchMessages = () => {
  return function (dispatch) {
    dispatch(startFetchingMessages());

    Firebase.database().ref('messages')
      .on('value', (snapshot) => {
        // need to understand why use setTimeout()
        setTimeout(() => {
          const messages = snapshot.val() || [];

          dispatch(receiveMessages(messages));
        }, 0);
      });
  };
};

export const startAuthorizing = () => ({
  type: USER_START_AUTHORIZING,
});

export const userAuthorized = () => ({
  type: USER_AUTHORIZED,
});

export const login = () => {
  return function (dispatch) {
    dispatch(startAuthorizing());

    Firebase.auth().signInAnonymously()
      .then(() => {
        dispatch(userAuthorized());
        dispatch(fetchMessages());
      });
  };
};
