import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { cardAPI, tagsAPI } from "../../api/axios";
import { WritableDraft } from "immer/dist/internal";

export interface CardInterface {
  id: number;
  cardName: string;
  cardNameTranslate: string;
  price: number;
  rating: number;
  tagId: number;
  category: string;
  description: string;
  count: number;
  photos: string;
}

export interface TagsInterface {
  id: number;
  tag: string;
}

export interface CardsInterface {
  cards: CardInterface[];
  card: CardInterface;
  status: String;
  tags: TagsInterface[];
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
    // console.log(filter);
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

export const createTagsThunk = createAsyncThunk(
  "tags/createTagsThunk",
  async (tag) => {
    const tagsCreate = (await tagsAPI.create(tag)).data;
    return tagsCreate;
  }
);

export const getAllThunk = createAsyncThunk("tags/getAllThunk", async () => {
  const getAll = (await tagsAPI.getAll()).data;
  return getAll;
});

// export const getTagThunk = createAsyncThunk("tags/getTagThunk", async (id) => {
//   const getTag = (await tagsAPI.getTag(id)).data;
//   return getTag;
// });

export const deleteTagThunk = createAsyncThunk(
  "tags/deleteTagThunk",
  async (id) => {
    const deleteTag = (await tagsAPI.delete(id)).data;
    return deleteTag;
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
    tagId: 0,
  },
  tags: [],
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

      if (action.payload.cards.length === 0) {
        localStorage.setItem("cart", JSON.stringify([]));
        localStorage.setItem("cartResult", JSON.stringify(0));
      }
    });
    builder.addCase(getCardThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getCardThunk.fulfilled, (state, action) => {
      state.status = action.payload.message;
      state.card = action.payload.card;
      // state.card.tag = action.payload.tagName;
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
      console.log(action.payload.cards);
      state.cards = action.payload.cards;
      state.isLoading = false;
    });
    builder.addCase(editCardThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(editCardThunk.fulfilled, (state, action) => {
      state.status = action.payload.message;
      // state.cards = action.payload.cards;
      state.isLoading = false;

      let cart = JSON.parse(localStorage.getItem("cart")!) || [];
      let cartResult = JSON.parse(localStorage.getItem("cartResult")!) || 0;
      let newCart: {
        price: any;
        count: any;
        id: any;
      }[] = [];

      cart.forEach((el: { id: any; count: any; price: any }) => {
        if (el.id === action.payload.card.id) {
          action.payload.card.cart = true;
          action.payload.card.count = el.count;
          newCart.push(action.payload.card);
        } else {
          newCart.push(el);
        }
      });

      if (newCart.length > 0) {
        newCart.forEach((el) => {
          cartResult = cartResult + el.count * el.price;
        });
      }

      localStorage.setItem("cart", JSON.stringify(newCart));
      localStorage.setItem("cartResult", JSON.stringify(cartResult));
    });

    builder.addCase(createTagsThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(createTagsThunk.fulfilled, (state, action) => {
      state.status = action.payload.message;

      console.log(action.payload.tags);
      state.tags.push(action.payload.tags);
      state.isLoading = false;
    });
    builder.addCase(getAllThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getAllThunk.fulfilled, (state, action) => {
      state.status = action.payload.message;
      state.tags = action.payload.tags;
      state.isLoading = false;
    });
    // builder.addCase(getTagThunk.pending, (state, action) => {
    //   state.isLoading = true;
    // });
    // builder.addCase(getTagThunk.fulfilled, (state, action) => {
    //   state.status = action.payload.message;
    //   state.card = action.payload.card;
    //   state.card.tags = action.payload.tagName;
    //   state.isLoading = false;
    // });
    builder.addCase(deleteTagThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(deleteTagThunk.fulfilled, (state, action) => {
      state.status = action.payload.message;
      state.tags = action.payload.tags;
      state.isLoading = false;
    });
  },
});

export default cardsSlice.reducer;
