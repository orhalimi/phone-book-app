import React from 'react';
import PropTypes from 'prop-types';

const ContactDataContainer = (props) => {
  const innerData = props.editMode ? (
    <input name={props.name} value={props.text} onChange={props.changeHandler} />
  ) : (
    <span>{props.text}</span>
  );
  return <div className={props.className}>{innerData}</div>;
};

export default ContactDataContainer;

ContactDataContainer.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
