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

export interface AdminInterface {
  status: String;
  isLoading: Boolean;
  token: String;
  isAuth: Boolean;
}
