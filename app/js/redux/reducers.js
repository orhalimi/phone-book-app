import { combineReducers } from 'redux';
import {
  ADD_USER,
  CHANGE_USER_INFO,
  DELETE_USER,
  TOGGLE_EDIT_MODE,
  APPROVE_EDIT,
  REJECT_EDIT,
} from './actions';

const phoneList = (
  state = [
    {
      id: 0,
      name: 'Or Halimi',
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

const phoneListEdits = (state = {}, action) => {
  switch (action.type) {
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
      newState[id][key] = value;
      delete newState[id].errors.key;
      return newState;
    }

    case REJECT_EDIT: {
      const { id, errorType, errorMessage } = action.payload;
      const newState = JSON.parse(JSON.stringify(state));
      newState[id].errors[errorType] = errorMessage;
      return newState;
    }
    default:
      return state;
  }
};

const rootReducer = combineReducers({ phoneList, phoneListEdits });

export default rootReducer;
