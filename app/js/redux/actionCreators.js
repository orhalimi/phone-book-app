import { ADD_USER, EDIT_USER, DELETE_USER, TOGGLE_EDIT_MODE } from './actions';
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

export function editUser(id, name, phone) {
  return {
    type: EDIT_USER,
    payload: {
      name,
      phone,
      id,
      editMode: false,
    },
  };
}

export function deleteUser(id) {
  console.log({ type: DELETE_USER, payload: { id } });
  return { type: DELETE_USER, payload: { id } };
}

export function toggleEditMode(id, editMode) {
  return {
    type: TOGGLE_EDIT_MODE,
    payload: {
      id,
      editMode: !editMode,
    },
  };
}
