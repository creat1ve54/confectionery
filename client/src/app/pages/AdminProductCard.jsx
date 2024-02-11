import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCardThunk } from "../../redux/cards/cardsSlice";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../redux/hooks";
import Product from "../components/Product";

const AdminProductCard = () => {
  const params = useParams();
  const { cardNameTranslate } = params;
  const dispatch = useDispatch();
  const { card, isLoading, status } = useAppSelector(
    (state) => state.cardsSlice
  );

  useEffect(() => {
    dispatch(getCardThunk(cardNameTranslate));
  }, [dispatch, cardNameTranslate]);

  return <Product card={card} />;
};

export default AdminProductCard;
