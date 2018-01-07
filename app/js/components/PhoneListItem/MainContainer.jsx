import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  deleteUser,
  toggleEditMode,
  changeUserInfo,
  approveEdit,
  toggleAddUserMode,
  addUser,
  displayErrors,
} from '../../redux/actionCreators';

import ActionButtonContainer from './ActionButtonsContainer';
import ContactDataContainer from './ContactDataContainer';

const PhoneListItem = (props) => {
  let xClickHandler;
  let vClickHandler;

  if (props.addUserMode) {
    xClickHandler = props.toggleAddUserModeHandler;
    vClickHandler = props.addUserHandler;
  } else {
    xClickHandler = props.toggleEditModeHandler;
    vClickHandler = props.approveEditHandler;
  }

  const phoneError = props.errors && props.errors.phone ? props.errors.phone : '';
  const nameError = props.errors && props.errors.name ? props.errors.name : '';

  return (
    <div className="phonelist-item">
      <ActionButtonContainer
        className="action-buttons-container hidden-without-focus"
        trashClickHandle={props.deleteUserHandler}
        PencilClickHandle={props.toggleEditModeHandler}
        xClickHandler={xClickHandler}
        vClickHandler={vClickHandler}
        editMode={props.editMode}
      />
      <ContactDataContainer
        className="phone-container"
        name="phone"
        inputType="number"
        changeHandler={props.editUserHandler}
        text={props.phone}
        editMode={props.editMode}
        error={phoneError}
        displayErrors={props.displayErrors}
      />
      <ContactDataContainer
        className="name-container"
        changeHandler={props.editUserHandler}
        inputType="text"
        name="name"
        text={props.name}
        editMode={props.editMode}
        error={nameError}
        displayErrors={props.displayErrors}
      />
    </div>
  );
};

PhoneListItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispach, ownProps) => ({
  addUserHandler() {
    if (Object.keys(ownProps.errors).length === 0) {
      dispach(addUser(ownProps.name, ownProps.phone));
      dispach(toggleAddUserMode(ownProps.addUserMode));
    } else {
      dispach(displayErrors(ownProps.id));
    }
  },
  deleteUserHandler() {
    dispach(deleteUser(ownProps.id));
  },
  toggleEditModeHandler() {
    dispach(toggleEditMode(ownProps.id, ownProps.name, ownProps.phone, ownProps.editMode));
  },
  toggleAddUserModeHandler() {
    dispach(toggleAddUserMode(ownProps.addUserMode));
  },
  editUserHandler(event) {
    dispach(changeUserInfo(ownProps.id, event.target.name, event.target.value));
  },
  approveEditHandler() {
    if (Object.keys(ownProps.errors).length === 0) {
      dispach(approveEdit(ownProps.id, ownProps.phone, ownProps.name));
      dispach(toggleEditMode(ownProps.id, ownProps.name, ownProps.phone, ownProps.editMode));
    } else {
      dispach(displayErrors(ownProps.id));
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PhoneListItem);
