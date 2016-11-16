import React, { PropTypes } from 'react';

const Text = ({ text }) => (
  <div className="text">
    {text.map((t, i) => <p key={i}>{t}</p>)}
  </div>
);

Text.propTypes = {
  text: PropTypes.array.isRequired
};

Text.defaultProps = {
  text: []
};

export default Text;
