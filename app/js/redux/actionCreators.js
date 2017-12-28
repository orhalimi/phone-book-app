import { ADD_USER, EDIT_USER, DELETE_USER } from './actions';
import { idCounter } from '../globals';

const getUniqueID = () => {
  idCounter += 1;
  return idCounter;
};

export function addUser(name, phone) {
  const id = getUniqueID();
  return { type: ADD_USER, payload: { name, phone, id } };
}

export function editUser(id, name, phone) {
  return { type: EDIT_USER, payload: { name, phone, id } };
}

export function deleteUser(id) {
  return { type: EDIT_USER, payload: { id } };
}
