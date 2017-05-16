import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { TextInput } from '@shoutem/ui';
import { connect } from 'react-redux';

const { width } = Dimensions.get('window');

class Input extends Component {
  state = {
    test: null,
  }

  onChangeText = text => this.setState({ text })

  onSubmitEditing = () => {
    this.props.dispatch(
      this.props.submitAction(this.state.text),
    );

    if (!this.props.noclear) {
      this.setState({
        text: null,
      });
    }
  }

  onFocus = () => {
    if (this.props.onFocus) {
      this.props.onFocus(this.refs.input);
    }
  }

  onBlur = () => {
    if (this.props.submitOnBlur) {
      this.onSubmitEditing();
    }
  }

  onLayout = (event) => {
    if (this.props.onLayout) {
      this.props.onLayout(event);
    }
  }

  render() {
    return (
      <TextInput
        placeholder={this.props.placeholder}
        onChangeText={this.onChangeText}
        onSubmitEditing={this.onSubmitEditing}
        onLayout={this.onLayout}
        value={this.state.text}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        ref="input"
        style={{ width }}
      />
    );
  }
}

export default connect()(Input);
