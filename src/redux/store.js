import { legacy_createStore as createStore } from 'redux';
import initialState from './initialState';
import cardsReducer from './reducers/cardsReducer';
import listsReducer from './reducers/listsReducer';
import columnsReducer from './reducers/columnsReducer';
import searchReducer from './reducers/searchReduce';

const rootReducer = (state = {}, action) => ({
  lists: listsReducer(state.lists, action),
  columns: columnsReducer(state.columns, action),
  cards: cardsReducer(state.cards, action),
  searchString: searchReducer(state.searchString, action),
});


const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;