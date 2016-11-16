import React, { Component, PropTypes } from 'react';

const propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

class Checkbox extends Component {
  constructor() {
    super();

    // Bind
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.props.onChange(this.props.value);
  }

  render() {
    const { checked, value, label } = this.props;

    return (
      <div className="checkbox">
        <input
          type="radio"
          checked={checked}
          value={value}
          onChange={this.handleChange}
        />
        <label>{label}</label>
      </div>
    );
  }
}

Checkbox.propTypes = propTypes;

export default Checkbox;
