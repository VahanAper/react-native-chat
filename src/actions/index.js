import Firebase from '../firebase';
import {
  ADD_MESSAGE,
  START_FETCHING_MESSAGES,
  RECEIVED_MESSAGES,
  USER_START_AUTHORIZING,
  USER_AUTHORIZED,
  SET_USER_NAME,
  SET_USER_AVATAR,
  UPDATE_MESSAGES_HEIGHT,
} from '../types';

export const addMessage = message => ({
  type: ADD_MESSAGE,
  ...message,
});

export const sendMessage = (text, user) => {
  console.log('user', user);
  return function (dispatch) {
    const msg = {
      text,
      time: Date.now(),
      author: {
        name: user.name,
        avatar: user.avatar,
      },
    };
    const newMsgRef = Firebase.database().ref('messages').push();

    msg.id = newMsgRef.key;
    newMsgRef.set(msg);

    dispatch(addMessage(msg));
  };
};

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

export const setUserName = name => ({
  type: SET_USER_NAME,
  name,
});

export const setUserAvatar = avatar => ({
  type: SET_USER_AVATAR,
  avatar,
});

export const updateMessagesHeight = (event) => {
  const layout = event.nativeEvent.layout;

  return {
    type: UPDATE_MESSAGES_HEIGHT,
    height: layout.height,
  };
};
