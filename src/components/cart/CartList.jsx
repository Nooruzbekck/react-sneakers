import { styled } from "@mui/material";
import { CartItem } from "./CartItem";
import { Button } from "../UI/Button";
import { useSelector } from "react-redux";

export const CartList = ({ cartItems = [], onPostOrders }) => {
  const { totalPrice } = useSelector((state) => state.cart);
  const totalAmount = (totalPrice / 100) * 5;
  return (
    <ContainerCartList>
      <ul>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </ul>
      <CartTotalBlock>
        <div>
          <h3>Итого: </h3>
          <div>
            <div></div>
          </div>
          <b>{totalPrice} руб.</b>
        </div>
        <div>
          <h3>Налог 5%:</h3>
          <div>
            <div></div>
          </div>
          <b>{totalAmount.toFixed(2)} руб.</b>
        </div>
        <Button variantIcon="right" onClick={onPostOrders}>
          Оформить заказ
        </Button>
      </CartTotalBlock>
    </ContainerCartList>
  );
};

const ContainerCartList = styled("div")`
  height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px 32px 30px;
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    list-style: none;
    margin-top: 30px;
  }
`;
const CartTotalBlock = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 19px;
  width: 308px;
  margin-bottom: 20px;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;

    h3 {
      color: #000;
      font-size: 16px;
      font-weight: 400;
      white-space: nowrap;
    }

    div {
      padding-top: 10px;
      border-bottom: 1px dashed #dfdfdf;
      width: 100%;
    }

    b {
      color: #000;
      font-size: 16px;
      font-weight: 600;
      white-space: nowrap;
    }
  }
  button {
    width: 100%;
  }
`;
