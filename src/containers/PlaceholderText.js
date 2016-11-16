import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Text from '../components/Text';

const PlaceholderText = ({ text }) => (
  <div className="placeholder">
    <Text text={text} />
  </div>
);

function mapStateToProps(state) {
  return {
    text: state.generator.text
  };
}

export default connect(mapStateToProps)(PlaceholderText);
