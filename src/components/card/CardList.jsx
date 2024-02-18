import { styled } from "@mui/material";
import { CardItem } from "./CardItem";
import { useDispatch, useSelector } from "react-redux";
import { addToCartThunk, deleteCartThunk } from "../../store/thunks/cartThunks";

export const CardList = ({ items = [] }) => {
  const { cartItems } = useSelector((state) => state.cart);
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

  return (
    <CardListContainer>
      {items.map((item) => (
        <CardItem
          key={item.id}
          {...item}
          isItemAdded={isItemAdded}
          onPlusClickHandler={plusClickHandler}
        />
      ))}
    </CardListContainer>
  );
};

const CardListContainer = styled("ul")`
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px 18px;
  @media (max-width: 480px) {
    justify-content: space-between;
  }
  @media (max-width: 400px) {
    gap: 20px 6px;
  }
`;
