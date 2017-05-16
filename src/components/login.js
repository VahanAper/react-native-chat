import React, { Component } from 'react';
import {
  Screen,
  Title,
  Divider,
  Spinner,
} from '@shoutem/ui';
import { connect } from 'react-redux';

import { setUserName, setUserAvatar } from '../actions';
import Input from './input';
import LoginButton from './login_button';

class Login extends Component {
  render() {
    return (
      <Screen style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Title>Who you are?</Title>
        <Divider />
        <Input
          placeholder="Username"
          submitAction={setUserName}
          submitOnBlur
          noclear
          ref="username"
        />
        <Divider />
        <Input
          placeholder="Avatar URL"
          submitAction={setUserAvatar}
          submitOnBlur
          noclear
          ref="avatar"
        />
        <Divider />
        {this.props.authorizing ? <Spinner /> : <LoginButton />}
      </Screen>
    );
  }
}

const mapStateToProps = state => ({
  authorizing: state.user.authorizing,
});

export default connect(mapStateToProps)(Login);
