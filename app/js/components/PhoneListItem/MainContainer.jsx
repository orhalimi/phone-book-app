import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  deleteUser,
  toggleEditMode,
  changeUserInfo,
  approveEdit,
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
      changeHandler={props.editUserHandler}
      text={props.phone}
      editMode={props.editMode}
    />
    <ContactDataContainer
      className="name-container"
      changeHandler={props.editUserHandler}
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
    dispach(approveEdit(ownProps.id, ownProps.phone, ownProps.name));
    dispach(toggleEditMode(ownProps.id, ownProps.name, ownProps.phone, ownProps.editMode));
  },
});

export default connect(mapStateToProps, mapDispatchtoProps)(PhoneListItem);
