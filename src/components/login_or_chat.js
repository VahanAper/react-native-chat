import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

const LoginOrChat = ({ authorized }) => {
  if (authorized) {
    return (
      <View>
        <Text>Chat</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>Login</Text>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    authorized: state.user.authorized,
  };
};

export default connect(mapStateToProps)(LoginOrChat);
