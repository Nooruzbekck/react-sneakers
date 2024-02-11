import { Modal, styled } from "@mui/material";
import { CartList } from "./CartList";
import { useToggleModal } from "../../hooks/useToggleModal";
import { useContext } from "react";
import { cartContext } from "../../context/cart-context";

export const CartModal = () => {
  const { cartIsActive, toggleHandler } = useToggleModal();
  const { sneakersCart } = useContext(cartContext);
  return (
    <Modal open={Boolean(cartIsActive)} onClose={() => toggleHandler("")}>
      <StyledContainer>
        <Basket>Корзина</Basket>
        <CartList cartItems={sneakersCart} />
      </StyledContainer>
    </Modal>
  );
};

const StyledContainer = styled("div")`
  width: 385px;
  height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
  background-color: white;
  z-index: 30;
  padding: 32px 30px;
  border: unset;
`;

const Basket = styled("h1")`
  color: #000;
  font-size: 24px;
  font-weight: 700;
`;
