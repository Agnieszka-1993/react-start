import shortid from 'shortid';
export const addCard = (payload) => ({ type: 'app/cards/ADD_CARD', payload });
export const toggleCardFavorite = (cardId) => ({ type: 'app/cards/TOGGLE_CARD_FAVORITE', payload: cardId });
export const removeCard = (cardId) => ({ type: 'app/cards/REMOVE_CARD', payload: cardId });
export const getFilteredCards = (state, columnId) => {
  const { cards, searchString } = state;
  return cards.filter(card =>
    card.columnId === columnId &&
    card.title.toLowerCase().includes(searchString.toLowerCase())
  );
};

const ADD_CARD = 'app/cards/ADD_CARD';
const CARD_FAVORITE = 'app/cards/TOGGLE_CARD_FAVORITE';
const REMOVE_CARD = 'app/cards/REMOVE_CARD';

const cardsReducer = (statePart = [], action) => {
    switch (action.type) {
      case ADD_CARD:
        return [...statePart, { ...action.payload, id: shortid() }];
      case CARD_FAVORITE:
        return statePart.map(card =>
          card.id === action.payload ? { ...card, isFavorite: !card.isFavorite } : card);
      default:
        return statePart;
      case REMOVE_CARD:
        return statePart.filter(card => card.id !== action.payload);
    }
  };

  export default cardsReducer;