import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import Login from './login';

const LoginOrChat = ({ authorized }) => {
  if (authorized) {
    return (
      <View>
        <Text>Chat</Text>
      </View>
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
