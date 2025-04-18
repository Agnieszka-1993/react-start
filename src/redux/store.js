import { legacy_createStore as createStore, combineReducers } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';


export const addList = (payload) => ({ type: 'app/lists/ADD_LIST', payload });
export const addCard = (payload) => ({ type: 'app/cards/ADD_CARD', payload });
export const addColumn = (payload) => ({ type: 'app/columns/ADD_COLUMN', payload });
export const toggleCardFavorite = (cardId) => ({ type: 'app/cards/TOGGLE_CARD_FAVORITE', payload: cardId });
export const updateSearchString = (payload) => ({ type: 'app/searchString/UPDATE_SEARCHSTRING', payload });
export const removeCard = (cardId) => ({ type: 'app/cards/REMOVE_CARD', payload: cardId });

export const getListById = (state, listId) => state.lists.find(list => list.id === listId);
export const getColumnsByList = (state, listId) => state.columns.filter(column => column.listId === listId);

export const getFilteredCards = (state, columnId) => {
  const { cards, searchString } = state;
  return cards.filter(card =>
    card.columnId === columnId &&
    card.title.toLowerCase().includes(searchString.toLowerCase())
  );
};
export const getAllLists = (state) => state.lists;

const listsReducer = (statePart = [], action) => {
  switch(action.type) {
    case 'app/lists/ADD_LIST':
      return [...statePart, { ...action.payload, id: shortid() }];
    default:
      return statePart;
  }
};


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
  lists: listsReducer,
});


const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;