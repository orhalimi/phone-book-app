import React from 'react';
import PropTypes from 'prop-types';

import ActionButtonContainer from './ActionButtonsContainer';
import ContactDataContainer from './ContactDataContainer';

const PhoneListItem = props => (
  <div className="phonelist-item">
    <ActionButtonContainer className="action-buttons-container hidden-without-focus" />
    <ContactDataContainer className="phone-container" text={props.phone} />
    <ContactDataContainer className="name-container" text={props.name} />
  </div>
);

export default PhoneListItem;

PhoneListItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
