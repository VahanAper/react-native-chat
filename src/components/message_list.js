import React from 'react';
import {
  ListView,
} from '@shoutem/ui';

import Message from './message';

const MessageList = ({ messages, onLayout }) => {
  return (
    <ListView
      data={messages}
      autoHideHeader
      renderRow={msg => <Message msg={msg} />}
      onLayout={onLayout}
    />
  );
};

export default MessageList;
