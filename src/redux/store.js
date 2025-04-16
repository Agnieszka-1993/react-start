import { legacy_createStore as createStore, combineReducers } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';


export const addCard = (payload) => ({ type: 'ADD_CARD', payload });


const cardsReducer = (statePart = [], action) => {
  switch (action.type) {
    case 'ADD_CARD':
      return [...statePart, { ...action.payload, id: shortid() }];
    default:
      return statePart;
  }
};

const columnsReducer = (statePart = [], action) => {
  switch (action.type) {
    case 'ADD_COLUMN':
      return [...statePart, { ...action.payload, id: shortid() }];
    default:
      return statePart;
  }
};


const rootReducer = combineReducers({
  cards: cardsReducer,
  columns: columnsReducer,
});


const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;