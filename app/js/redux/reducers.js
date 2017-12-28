import combineReducers from 'redux';
import { ADD_USER, EDIT_USER, DELETE_USER } from './actions';

const phoneList = (state = [], action) => {
  switch (action.type) {
    case ADD_USER:
      return [
        ...state,
        {
          ...action.payload,
        },
      ];

    case EDIT_USER:
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return Object.assign({}, item, {
            phone: action.payload.phone,
            name: action.payload.name,
          });
        }
        return item;
      });
    case DELETE_USER:
      return state.filter(item => item.id !== action.payload.id);

    default:
      return state;
  }
};
const rootReducer = combineReducers({ phoneList });

export default rootReducer;