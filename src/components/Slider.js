import React, { PropTypes } from 'react';
import RcSlider from 'rc-slider';

const Slider = ({ onChange, value, min, max }) =>
  <RcSlider
    value={value}
    onChange={onChange}
    min={min}
    max={max}
  />;

Slider.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
  min: PropTypes.number,
  max: PropTypes.number
};

Slider.defaultProps = {
  min: 1,
  max: 10
};

export default Slider;
