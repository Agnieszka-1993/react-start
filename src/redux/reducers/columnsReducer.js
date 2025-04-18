import shortid from "shortid";

export const addColumn = (payload) => ({ type: 'app/columns/ADD_COLUMN', payload });
export const getColumnsByList = (state, listId) => state.columns.filter(column => column.listId === listId);

const ADD_COLUMN = 'ADD_COLUMN'

const columnsReducer = (statePart = [], action) => {
    switch (action.type) {
      case ADD_COLUMN:
        return [...statePart, { ...action.payload, id: shortid() }];
      default:
        return statePart;
    }
  };

  export default columnsReducer;