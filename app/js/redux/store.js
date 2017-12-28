import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer, { idCounter: 1 });

export default store;
