import { styled } from "@mui/material";
import { useGetRequest } from "../hooks/useGetRequest";
import { CardList } from "../components/card/CardList";
import { Input } from "../components/UI/Input";

export const Home = () => {
  const [items] = useGetRequest("items");
  return (
    <AllSneakers>
      <div className="input_title">
        <h1>Все кроссовки</h1>
        <Input type="search" placeholder="Поиск..." />
      </div>
      <CardList items={items} />
    </AllSneakers>
  );
};

const AllSneakers = styled("div")`
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
