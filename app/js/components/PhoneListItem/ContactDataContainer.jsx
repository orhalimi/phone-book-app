import React from 'react';
import PropTypes from 'prop-types';

const ContactDataContainer = props => (
  <div className={props.className}>
    <span>{props.text}</span>
  </div>
);

export default ContactDataContainer;

ContactDataContainer.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
