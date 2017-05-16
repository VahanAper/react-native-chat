import React from 'react';
import {
  Row,
  Image,
  View,
  Text,
  Subtitle,
  Caption,
} from '@shoutem/ui';
import moment from 'moment';

const Message = ({ msg }) => {
  return (
    <Row>
      <Image
        styleName="small-avatar top"
        source={{ uri: msg.author.avatar }}
      />
      <View styleName="vertical">
        <View styleName="horizontal space-between">
          <Subtitle>{msg.author.name}</Subtitle>
          <Caption>{moment(msg.time).from(Date.now())}</Caption>
        </View>
        <Text styleName="multiline">
          {msg.text}
        </Text>
      </View>
    </Row>
  );
};

export default Message;
