import { combineReducers } from 'redux';
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

const searchTerm = (state = '', action) => {
  switch (action.type) {
    case SEARCH_TERM_CHANGE:
      return action.payload;
    default:
      return state;
  }
};

const addUserMode = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_ADD_USER_MODE:
      return action.payload;
    default:
      return state;
  }
};

const phoneList = (
  state = [
    {
      id: 0,
      name: 'אור חלימי',
      phone: '0509960656',
      editMode: false,
    },
  ],
  action,
) => {
  switch (action.type) {
    case ADD_USER:
      return [Object.assign({}, action.payload), ...state];

    case DELETE_USER:
      return state.filter(item => item.id !== action.payload.id);

    case TOGGLE_EDIT_MODE:
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return Object.assign({}, item, {
            editMode: action.payload.editMode,
          });
        }
        return item;
      });

    case APPROVE_EDIT:
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return Object.assign({}, item, {
            phone: action.payload.phone,
            name: action.payload.name,
            editMode: false,
          });
        }
        return item;
      });

    default:
      return state;
  }
};

const phoneListEdits = (state = globals.newUserBlueprint, action) => {
  switch (action.type) {
    case TOGGLE_ADD_USER_MODE:
      if (action.payload) {
        const newState = JSON.parse(JSON.stringify(state));
        return Object.assign({}, newState, globals.newUserBlueprint);
      }
      return state;

    case DISPLAY_ERRORS:
      console.log(action);
      {
        const { id, displayErrors } = action.payload;
        const newState = JSON.parse(JSON.stringify(state));
        const updatedObj = newState[id];
        updatedObj.displayErrors = displayErrors;
        return newState;
      }
    case TOGGLE_EDIT_MODE: {
      const newState = JSON.parse(JSON.stringify(state));
      if (!action.payload.editMode) {
        delete newState[action.payload.id];
        return newState;
      }
      return Object.assign({}, newState, {
        [action.payload.id]: {
          phone: action.payload.phone,
          name: action.payload.name,
          editMode: action.payload.editMode,
          id: action.payload.id,
          errors: {},
        },
      });
    }
    case CHANGE_USER_INFO: {
      const { key, value, id } = action.payload;
      const newState = JSON.parse(JSON.stringify(state));
      const updatedObj = newState[id];
      updatedObj[key] = value;
      const errors = {};
      if (updatedObj.phone.length > 12 || updatedObj.phone.length < 9) {
        errors.phone = 'The phone number must be between 9 and 12 characters';
      }
      if (updatedObj.name.trim().indexOf(' ') === -1) {
        errors.name = 'The name must contain two words';
      }
      updatedObj.errors = errors;
      return newState;
    }

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  phoneList,
  phoneListEdits,
  addUserMode,
  searchTerm,
});

export default rootReducer;
