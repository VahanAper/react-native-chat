import {
  SET_USER_NAME,
  SET_USER_AVATAR,
  USER_START_AUTHORIZING,
  USER_AUTHORIZED,
} from '../types';

const initialState = {
  name: null,
  avatar: 'https://assets.sermoncentral.com/images/default-avatar.jpg',
  authorizing: false,
  authorized: false,
};

const user = (state = initialState, action) => {
  switch (action.type) {

    case SET_USER_NAME:
      return Object.assign({}, state, {
        name: action.name,
      });

    case SET_USER_AVATAR:
      return Object.assign({}, state, {
        avatar: action.avatar,
      });

    case USER_START_AUTHORIZING:
      return Object.assign({}, state, {
        authorizing: true,
      });

    case USER_AUTHORIZED:
      return Object.assign({}, state, {
        authorizing: false,
        authorized: true,
      });

    default:
      return state;
  }
};

export default user;
