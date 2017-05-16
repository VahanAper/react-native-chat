import React from 'react';
import { View, Spinner } from '@shoutem/ui';
import { connect } from 'react-redux';

import { updateMessagesHeight } from '../actions';
import MessageList from './message_list';

const Messages = ({ messages, isFetching, dispatch }) => {
  if (isFetching) {
    return (
      <View style={{ paddingTop: 50, paddingBottom: 50 }}>
        <Spinner />
      </View>
    );
  }

  return (
    <MessageList
      messages={messages}
      onLayout={event => dispatch(updateMessagesHeight(event))}
    />
  );
};

const mapStateToProps = state => ({
  messages: state.chatroom.messages,
  isFetching: state.chatroom.meta.isFetching,
});

export default connect(mapStateToProps)(Messages);
