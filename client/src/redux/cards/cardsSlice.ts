import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { cardAPI } from "../../api/axios";

export interface CardInterface {
  id: number;
  cardName: string;
  cardNameTranslate: string;
  price: number;
  rating: number;
  tags: string;
  category: string;
  description: string;
  count: number;
  photos: string;
}

export interface CardsInterface {
  cards: CardInterface[];
  card: CardInterface;
  status: String;
  isLoading: Boolean;
}

export const createCardThunk = createAsyncThunk(
  "cards/createCardThunk",
  async (card) => {
    const cardCreate = (await cardAPI.create(card)).data;
    return cardCreate;
  }
);

export const getCardsThunk = createAsyncThunk(
  "cards/getCardsThunk",
  async () => {
    const getCards = (await cardAPI.getCards()).data;
    return getCards;
  }
);

export const getCardThunk = createAsyncThunk(
  "cards/getCardThunk",
  async (cardNameTranslate) => {
    const getCard = (await cardAPI.getCard(cardNameTranslate)).data;
    return getCard;
  }
);

export const filterCardsThunk = createAsyncThunk(
  "cards/filterCardsThunk",
  async (filter) => {
    const filterCards = (await cardAPI.filterCards(filter)).data;
    return filterCards;
  }
);

export const deleteCardsThunk = createAsyncThunk(
  "cards/deleteCardsThunk",
  async (id) => {
    const deleteCard = (await cardAPI.delete(id)).data;
    return deleteCard;
  }
);

export const editCardThunk = createAsyncThunk(
  "cards/editCardThunk",
  async (card) => {
    const editCard = (await cardAPI.edit(card)).data;
    return editCard;
  }
);

const initialState: CardsInterface = {
  cards: [],
  card: {
    id: 0,
    cardName: "",
    cardNameTranslate: "",
    category: "",
    count: 0,
    description: "",
    photos: "",
    price: 0,
    rating: 0,
    tags: "",
  },
  status: "",
  isLoading: false,
};

export const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createCardThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(createCardThunk.fulfilled, (state, action) => {
      state.status = action.payload.message;
      console.log(action.payload.card);
      state.cards.push(action.payload.card);
      state.isLoading = false;
    });
    builder.addCase(getCardsThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getCardsThunk.fulfilled, (state, action) => {
      state.status = action.payload.message;
      state.cards = action.payload.cards;
      state.isLoading = false;
    });
    builder.addCase(getCardThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getCardThunk.fulfilled, (state, action) => {
      state.status = action.payload.message;
      state.card = action.payload.card;
      state.isLoading = false;
    });
    builder.addCase(filterCardsThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(filterCardsThunk.fulfilled, (state, action) => {
      state.status = action.payload.message;
      state.cards = action.payload.cards;
      state.isLoading = false;
    });
    builder.addCase(deleteCardsThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(deleteCardsThunk.fulfilled, (state, action) => {
      state.status = action.payload.message;
      state.cards = action.payload.cards;
      state.isLoading = false;
    });
    builder.addCase(editCardThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(editCardThunk.fulfilled, (state, action) => {
      state.status = action.payload.message;
      // state.cards = action.payload.cards;
      // state.isLoading = false;
    });
  },
});

export default cardsSlice.reducer;
