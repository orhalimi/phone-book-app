import React from 'react';
import PropTypes from 'prop-types';

const ContactDataContainer = (props) => {
  const innerData = props.editMode ? <input /> : <span>{props.text}</span>;
  return <div className={props.className}>{innerData}</div>;
};

export default ContactDataContainer;

ContactDataContainer.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
