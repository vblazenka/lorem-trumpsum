import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Actions
import {
  onChangeSize,
  onChangeType
} from '../actions';

// Constants
import TYPES from '../constants/generatorTypes';

// Components
import Checkbox from '../components/Checkbox';
import Slider from '../components/Slider';
import Status from '../components/Status';

// PropTypes
const propTypes = {
  text: PropTypes.array.isRequired,
  size: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  onChangeSize: PropTypes.func.isRequired,
  onChangeType: PropTypes.func.isRequired
};

// Default props
const defaultProps = {
  text: [],
  size: 1,
  type: TYPES.PARAGRAPHS
};

class Form extends Component {
  constructor() {
    super();

    // Bind!
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleSizeChange = this.handleSizeChange.bind(this);
  }

  handleSizeChange(value) {
    this.props.onChangeSize(value);
  }

  handleTypeChange(value) {
    this.props.onChangeType(value);
  }

  render() {
    const { type, size, min, max } = this.props;

    return (
      <div className="form">
        <div className="form__group">
          <div className="checkbox-group">
            <Checkbox
              checked={type === TYPES.WORDS}
              onChange={this.handleTypeChange}
              value={TYPES.WORDS}
              label="Words"
            />
          </div>

          <div className="checkbox-group">
            <Checkbox
              checked={type === TYPES.PARAGRAPHS}
              onChange={this.handleTypeChange}
              value={TYPES.PARAGRAPHS}
              label="Paragraphs"
            />
          </div>
        </div>

        <div className="slider">
          <Slider
            onChange={this.handleSizeChange}
            value={size}
            min={min}
            max={max}
          />
        </div>

        <div className="status">
          <Status
            type={this.props.type}
            number={this.props.size}
          />
        </div>
      </div>
    );
  }
}

Form.propTypes = propTypes;
Form.defaultProps = defaultProps;

function mapStateToProps(state) {
  const { type, size, text, min, max } = state.generator;

  return {
    type: type,
    size,
    text,
    min, max
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onChangeType,
    onChangeSize
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
