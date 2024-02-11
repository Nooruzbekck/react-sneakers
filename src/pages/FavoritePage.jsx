import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { favoritesContext } from "../context/favorites-context";
import { CardList } from "../components/card/CardList";
import { Button } from "../components/UI/Button";
import { styled } from "@mui/material";

export const FavoritePage = () => {
  const { favorites } = useContext(favoritesContext);
  const navigate = useNavigate();
  return (
    <ContainerFavorites>
      <h1>Мои закладки</h1>
      {favorites.length > 0 ? (
        <CardList items={favorites} />
      ) : (
        <FavoritesEmpty>
          <img
            src="https://symbl-world.akamaized.net/i/webp/2f/66f8fcd12a1aa5d9bf4121d51c060a.webp"
            alt="I'm sad I don't have any bookmarks"
          />
          <div>
            <h2>Закладок нет :( </h2>
            <p>Вы ничего не добавляли в закладки</p>
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
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 40px 60px 25px 60px;

  @media (max-width: 480px) {
    gap: 30px;
    padding: 30px 40px 25px 40px;
    h1 {
      font-size: 22px;
      font-weight: 600;
    }
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
      width: 285px;
      text-align: center;
      font-size: 16px;
      font-weight: 400;
      opacity: 0.4;
      line-height: 24px;
    }
  }
`;
