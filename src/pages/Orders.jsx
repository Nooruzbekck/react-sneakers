import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material";
import { CardList } from "../components/card/CardList";
import { OrdersDate } from "../components/orders/OrdersDate";
import { useGetRequest } from "../hooks/useGetRequest";
import { CiCircleChevLeft } from "react-icons/ci";

import { Button } from "../components/UI/Button";

export const Orders = () => {
  const [orders] = useGetRequest("orders");
  const navigate = useNavigate();
  return (
    <ContainerFavorites>
      <div>
        <CiCircleChevLeft className="chevleft" onClick={() => navigate("/")} />
        <h1>Мои покупки</h1>
      </div>
      {orders.length > 0 ? (
        <>
          {orders.map((item) => (
            <ListContainer key={item.id}>
              <OrdersDate date={item.date} />
              <CardList items={item.items} />
            </ListContainer>
          ))}
        </>
      ) : (
        <FavoritesEmpty>
          <img
            src="https://symbl-world.akamaized.net/i/webp/2f/66f8fcd12a1aa5d9bf4121d51c060a.webp"
            alt="I'm sad I don't have any bookmarks"
          />
          <div>
            <h2>У вас нет заказов </h2>
            <p>Вы нищеброд?</p>
            <p>Оформите хотя бы один заказ.</p>
          </div>
          <Button onClick={() => navigate("/")} variantIcon="left">
            Вернуться назад
          </Button>
        </FavoritesEmpty>
      )}
    </ContainerFavorites>
  );
};

const ContainerFavorites = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 40px 60px 25px 60px;
  & > div {
    display: flex;
    align-items: center;
    gap: 10px;
    .chevleft {
      width: 30px;
      height: 30px;
      cursor: pointer;
    }
  }
  @media (max-width: 480px) {
    gap: 30px;
    padding: 30px 40px 25px 40px;
    h1 {
      font-size: 22px;
      font-weight: 600;
    }
  }
`;

const ListContainer = styled("div")`
  padding-bottom: 20px;
  border-bottom: 1px solid #eaeaea;
  &:last-child {
    border-bottom: none;
  }
`;

const FavoritesEmpty = styled("div")`
  width: 100%;
  height: 350px;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  img {
    width: 100px;
    height: 100px;
  }
  & div {
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      color: #000;
      font-size: 22px;
      font-weight: 600;
    }
    p {
      color: #000;
      text-align: center;
      font-size: 16px;
      font-weight: 400;
      opacity: 0.4;
      line-height: 24px;
    }
  }
`;
