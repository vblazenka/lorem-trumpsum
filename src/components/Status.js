import React, { PropTypes } from 'react';

import TYPES from '../constants/generatorTypes';

const Status = ({ number, type }) => {
  if (number === 1 && type === TYPES.WORDS) {
    return <p className="status">Generating <span>1 WORD</span></p>;
  }

  if (number === 1 && type === TYPES.PARAGRAPHS) {
    return <p className="status">Generating <span>1 PARAGRAPH</span></p>;
  }

  return <p className="status">Generating <span>{number} {type}</span></p>;
};

Status.propTypes = {
  number: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired
};


export default Status;
