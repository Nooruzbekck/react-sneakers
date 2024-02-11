import { Modal, styled } from "@mui/material";
import { CartList } from "./CartList";
import { useToggleModal } from "../../hooks/useToggleModal";

export const CartModal = () => {
  const { cartIsActive, toggleHandler } = useToggleModal();
  return (
    <Modal open={cartIsActive} onClose={() => toggleHandler("")}>
      <StyledContainer>
        <Basket>Корзина</Basket>
        <CartList />
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
