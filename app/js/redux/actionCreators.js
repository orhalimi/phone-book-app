import {
  ADD_USER,
  CHANGE_USER_INFO,
  DELETE_USER,
  TOGGLE_EDIT_MODE,
  APPROVE_EDIT,
  TOGGLE_ADD_USER_MODE,
  SEARCH_TERM_CHANGE,
  DISPLAY_ERRORS,
} from './actions';
import globals from '../globals';

const getUniqueID = () => {
  globals.idCounter += 1;
  return globals.idCounter;
};

export function changeSearchTerm(searchInput) {
  return {
    type: SEARCH_TERM_CHANGE,
    payload: searchInput,
  };
}

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

export function toggleAddUserMode(prevState) {
  return {
    type: TOGGLE_ADD_USER_MODE,
    payload: !prevState,
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

export function displayErrors(id) {
  return {
    type: DISPLAY_ERRORS,
    payload: {
      id,
      displayErrors: true,
    },
  };
}

export function deleteUser(id) {
  return { type: DELETE_USER, payload: { id } };
}

export function approveEdit(id, phone, name) {
  return { type: APPROVE_EDIT, payload: { id, phone, name } };
}
