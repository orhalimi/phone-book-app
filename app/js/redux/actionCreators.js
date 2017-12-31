import { ADD_USER, CHANGE_USER_INFO, DELETE_USER, TOGGLE_EDIT_MODE, APPROVE_EDIT } from './actions';
import globals from '../globals';

const getUniqueID = () => {
  globals.idCounter += 1;
  return globals.idCounter;
};

export function addUser(name, phone) {
  const id = getUniqueID();
  return {
    type: ADD_USER,
    payload: {
      name,
      phone,
      id,
      editMode: false,
    },
  };
}

export function changeUserInfo(id, key, value) {
  return {
    type: CHANGE_USER_INFO,
    payload: {
      id,
      key,
      value,
    },
  };
}

export function toggleEditMode(id, name, phone, editMode) {
  return {
    type: TOGGLE_EDIT_MODE,
    payload: {
      name,
      phone,
      id,
      editMode: !editMode,
    },
  };
}

export function deleteUser(id) {
  return { type: DELETE_USER, payload: { id } };
}

export function approveEdit(id, phone, name) {
  return { type: APPROVE_EDIT, payload: { id, phone, name } };
}
