import React from 'react';
import { connect } from 'react-redux';

import Login from './login';
import Chat from './chat';

const LoginOrChat = ({ authorized }) => {
  if (authorized) {
    return (
      <Chat />
    );
  }

  return (
    <Login />
  );
};

const mapStateToProps = (state) => {
  return {
    authorized: state.user.authorized,
  };
};

export default connect(mapStateToProps)(LoginOrChat);
