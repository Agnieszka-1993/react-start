import shortid from "shortid";

export const addList = (payload) => ({ type: 'app/lists/ADD_LIST', payload });
export const getListById = (state, listId) => state.lists.find(list => list.id === listId);
export const getAllLists = (state) => state.lists;

const ADD_LIST = 'app/lists/ADD_LIST'

const listsReducer = (statePart = [], action) => {
    switch(action.type) {
      case ADD_LIST:
        return [...statePart, { ...action.payload, id: shortid() }];
      default:
        return statePart;
    }
  };

  export default listsReducer;