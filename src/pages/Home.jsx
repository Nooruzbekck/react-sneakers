import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "@mui/material";
import { CardList } from "../components/card/CardList";
import { Input } from "../components/UI/Input";
import { getCardItemsThunk } from "../store/thunks/itemsThunks";
import { getFavoritesThunk } from "../store/thunks/favoriteThunk";

export const Home = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.items);

  useEffect(() => {
    dispatch(getCardItemsThunk());
    dispatch(getFavoritesThunk());
  }, [dispatch]);

  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value);
  };

  const filtredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <AllSneakers>
      <div className="input_title">
        <h1>Все кроссовки</h1>
        <Input
          onChange={onChangeSearchInput}
          value={searchValue}
          type="search"
          placeholder="Поиск..."
        />
      </div>
      <CardList items={filtredItems} />
    </AllSneakers>
  );
};

const AllSneakers = styled("div")`
  height: 100%;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 40px 60px 25px 60px;
  .input_title {
    display: flex;
    justify-content: space-between;
  }
  h1 {
    color: #000;
    font-size: 32px;
    font-weight: 700;
  }
  @media (max-width: 480px) {
    padding: 30px 40px 25px 40px;
    .input_title {
      flex-direction: column;
      gap: 10px;
    }
    h1 {
      font-size: 22px;
      font-weight: 600;
    }
  }
`;
