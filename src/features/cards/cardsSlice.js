// cardsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cards: {}
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addCard: (state, action) => {
      const { id, front, back } = action.payload;
      state.cards[id] = {
        front,
        back
      };
    }
  }
});

export const { addCard } = cardsSlice.actions;

export const selectCardById = (state, cardId) => state.cards.cards;

export default cardsSlice.reducer;
