import { Modal, styled } from "@mui/material";
import { CartList } from "./CartList";

export const CartModal = () => {
  return (
    <Container open={true}>
      <StyledContainer>
        <Basket>Корзина</Basket>
        <CartList />
      </StyledContainer>
    </Container>
  );
};

const Container = styled(Modal)``;

const StyledContainer = styled("div")`
  width: 385px;
  height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
  background-color: white;
  z-index: 30;
  padding: 32px 30px;
`;

const Basket = styled("h1")`
  color: #000;
  font-size: 24px;
  font-weight: 700;
`;
