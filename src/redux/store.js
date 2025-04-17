import { legacy_createStore as createStore, combineReducers } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import strContains from '../utils/strContains'

//selectors
export const getFilteredCards = ({ cards, searchString }, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, searchString));

export const addCard = (payload) => ({ type: 'ADD_CARD', payload });
export const updateSearchString = payload => ({type: 'UPDATE_SEARCHSTRING', payload,});
export const getAllColumns = state => state.columns;
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });



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

const searchReducer = (statePart = '', action) => {
  switch(action.type) {
    case 'UPDATE_SEARCHSTRING':
      return action.payload;
    default:
      return statePart;
  }
};


const rootReducer = combineReducers({
  cards: cardsReducer,
  columns: columnsReducer,
  searchString: searchReducer,
});


const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;