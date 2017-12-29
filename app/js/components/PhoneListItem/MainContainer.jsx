import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteUser, toggleEditMode } from '../../redux/actionCreators';

import ActionButtonContainer from './ActionButtonsContainer';
import ContactDataContainer from './ContactDataContainer';

const PhoneListItem = props => (
  <div className="phonelist-item">
    <ActionButtonContainer
      className="action-buttons-container hidden-without-focus"
      deleteUserHandler={props.deleteUserHandler}
      toggleEditModeHandler={props.toggleEditModeHandler}
      editMode={props.editMode}
    />
    <ContactDataContainer
      className="phone-container"
      text={props.phone}
      editMode={props.editMode}
    />
    <ContactDataContainer className="name-container" text={props.name} editMode={props.editMode} />
  </div>
);

PhoneListItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

const mapStateToProps = () => ({});
const mapDispatchtoProps = (dispach, ownProps) => ({
  deleteUserHandler() {
    dispach(deleteUser(ownProps.id));
  },
  toggleEditModeHandler() {
    dispach(toggleEditMode(ownProps.id, ownProps.editMode));
  },
  // editUserHandler() {
  //   dispach(toggleEditMode(ownProps.id, ownProps.editMode));
  // },
});

export default connect(mapStateToProps, mapDispatchtoProps)(PhoneListItem);
