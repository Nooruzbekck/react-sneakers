import { styled } from "@mui/material";
import { CardItem } from "./CardItem";
import { useDispatch, useSelector } from "react-redux";
import { addToCartThunk, deleteCartThunk } from "../../store/thunks/cartThunk";
import {
  postFavoriteThunk,
  removeFavoriteThunk,
} from "../../store/thunks/favoriteThunk";

export const CardList = ({ items = [] }) => {
  const { cartItems } = useSelector((state) => state.cart);
  const { favorites } = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const isItemAdded = (addedId) => {
    return cartItems.some((obj) => obj.parentId === addedId);
  };

  const plusClickHandler = (data) => {
    const currentFind = cartItems.find((item) => item.parentId === data.id);
    if (!currentFind) {
      dispatch(addToCartThunk(data));
    } else {
      dispatch(deleteCartThunk(currentFind.id));
    }
  };

  const likedHandler = (favoriteData) => {
    const currentFavoritesFind = favorites.find(
      (item) => item.parentId === favoriteData.id
    );
    if (!currentFavoritesFind) {
      dispatch(postFavoriteThunk(favoriteData));
    } else {
      dispatch(removeFavoriteThunk(currentFavoritesFind.id));
    }
  };

  const isItemFavorite = (newId) => {
    return favorites.some((obj) => obj.parentId === newId);
  };

  return (
    <CardListContainer>
      {items.map((item) => (
        <CardItem
          key={item.id}
          {...item}
          isItemAdded={isItemAdded}
          onLikedHandler={likedHandler}
          isItemFavorite={isItemFavorite}
          onPlusClickHandler={plusClickHandler}
        />
      ))}
    </CardListContainer>
  );
};

const CardListContainer = styled("ul")`
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 40px 18px;
  @media (max-width: 480px) {
    justify-content: space-between;
  }
  @media (max-width: 400px) {
    gap: 20px 10px;
  }
`;
