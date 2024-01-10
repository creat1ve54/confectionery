import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCardThunk } from "../../redux/cards/cardsSlice";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../redux/hooks";

const AdminProductCard = () => {
  const params = useParams();
  const { cardNameTranslate } = params;
  const dispatch = useDispatch();
  const { card, isLoading, status } = useAppSelector(
    (state) => state.cardsSlice
  );
  useEffect(() => {
    dispatch(getCardThunk(cardNameTranslate));
  }, []);
  return <div>{card.cardName}</div>;
};

export default AdminProductCard;
