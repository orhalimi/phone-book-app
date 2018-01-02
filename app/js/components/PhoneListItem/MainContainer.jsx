import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  deleteUser,
  toggleEditMode,
  changeUserInfo,
  approveEdit,
  rejectEdit,
} from '../../redux/actionCreators';

import ActionButtonContainer from './ActionButtonsContainer';
import ContactDataContainer from './ContactDataContainer';

const PhoneListItem = props => (
  <div className="phonelist-item">
    <ActionButtonContainer
      className="action-buttons-container hidden-without-focus"
      trashClickHandle={props.deleteUserHandler}
      PencilClickHandle={props.toggleEditModeHandler}
      xClickHandler={props.toggleEditModeHandler}
      vClickHandler={props.approveEditHandler}
      editMode={props.editMode}
    />
    <ContactDataContainer
      className="phone-container"
      name="phone"
      inputType="number"
      changeHandler={props.editUserHandler}
      text={props.phone}
      editMode={props.editMode}
    />
    <ContactDataContainer
      className="name-container"
      changeHandler={props.editUserHandler}
      inputType="text"
      name="name"
      text={props.name}
      editMode={props.editMode}
    />
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
    dispach(toggleEditMode(ownProps.id, ownProps.name, ownProps.phone, ownProps.editMode));
  },
  editUserHandler(event) {
    dispach(changeUserInfo(ownProps.id, event.target.name, event.target.value));
  },
  approveEditHandler() {
    let isRegected = false;
    if (!ownProps.phone || ownProps.phone.length > 12 || ownProps.phone.length < 9) {
      isRegected = true;
      dispach(rejectEdit(ownProps.id, 'phone')); // change it to const
    }
    if (!ownProps.name || ownProps.name.trim().indexOf(' ') === -1) {
      dispach(rejectEdit(ownProps.id, 'name')); // change it to const
      isRegected = true;
    }
    if (!isRegected) {
      dispach(approveEdit(ownProps.id, ownProps.phone, ownProps.name));
      dispach(toggleEditMode(ownProps.id, ownProps.name, ownProps.phone, ownProps.editMode));
    }
  },
});

export default connect(mapStateToProps, mapDispatchtoProps)(PhoneListItem);
