import React from 'react';
import PropTypes from 'prop-types';
import removeUserImg from '../../../assets/remove-user-16.png';
import editUserImg from '../../../assets/edit-user-16.png';

const ActionButtonContainer = props => (
  <div className={props.className}>
    <div>
      <img src={editUserImg} alt="edit user" />
    </div>
    <div>
      <img src={removeUserImg} alt="remove user" />
    </div>
  </div>
);

export default ActionButtonContainer;

ActionButtonContainer.propTypes = {
  className: PropTypes.string.isRequired,
};
