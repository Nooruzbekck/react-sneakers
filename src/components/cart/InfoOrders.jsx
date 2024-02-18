import { styled } from "@mui/material";
import { CompleteOrder } from "../../assets";
import { Button } from "../UI/Button";

export const InfoOrders = ({ dataId, setIsOrders }) => {
  return (
    <InFoOrdersContainer>
      <img src={CompleteOrder} alt="complete" />
      <h2>Заказ оформлен!</h2>
      <p>Ваш заказ #{dataId} скоро будет передан курьерской доставке</p>
      <Button variantIcon="left" onClick={() => setIsOrders(false)}>
        Вернуться назад
      </Button>
    </InFoOrdersContainer>
  );
};

const InFoOrdersContainer = styled("div")`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 21px;
  img {
    width: 120px;
    height: 120px;
  }
  h2 {
    color: #000;
    font-size: 22px;
    font-weight: 600;
  }
  p {
    color: #000;
    width: 285px;
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    opacity: 0.4;
    line-height: 24px;
  }
`;
