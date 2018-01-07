import React from 'react';
import PropTypes from 'prop-types';

const ContactDataContainer = (props) => {
  const errorComponent = <div className="error-style">{props.error}</div>;

  const innerData = props.editMode ? (
    <div className="data-input-container">
      <input
        name={props.name}
        value={props.text}
        type={props.inputType}
        onChange={props.changeHandler}
        className="resize-input"
      />
      {props.displayErrors && errorComponent}
    </div>
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
