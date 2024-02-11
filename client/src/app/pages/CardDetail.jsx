import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { getCardThunk } from "../../redux/cards/cardsSlice";

const CardDetail = () => {
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

export default CardDetail;
