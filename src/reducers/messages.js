import Firebase from '../firebase';
import {
  ADD_MESSAGE,
  SEND_MESSAGE,
} from '../types';

const message = (state, action) => {
  switch (action.type) {

    case ADD_MESSAGE:
      return {
        id: action.id,
        text: action.text,
        time: action.time,
        author: action.author,
      };

    case SEND_MESSAGE: {
      const msg = {
        text: action.text,
        time: Date.now(),
        author: {
          name: action.user.name,
          avatar: action.user.avatar,
        },
      };
      const newMsgRef = Firebase.database().ref('messages').push();
      msg.id = newMsgRef.key;
      newMsgRef.set(msg);
      return msg;
    }

    default:
      return state;
  }
};

const messages = (state = [], action) => {
  switch (action.type) {

    case ADD_MESSAGE:
      if (state.map(m => m.id).includes(action.id)) {
        return state;
      }
      return [...state, message(undefined, action)];

    case SEND_MESSAGE:
      return [...state, message(undefined, action)];

    default:
      return state;
  }
};

export default messages;
