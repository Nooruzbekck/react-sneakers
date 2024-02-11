import { styled } from "@mui/material";
import { CardItem } from "./CardItem";

export const CardList = ({ items = [] }) => {
  return (
    <CardListContainer>
      {items.map((item) => (
        <CardItem key={item.id} {...item} />
      ))}
    </CardListContainer>
  );
};

const CardListContainer = styled("ul")`
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 40px 18px;
  @media (max-width: 480px) {
    justify-content: space-between;
  }
  @media (max-width: 400px) {
    gap: 20px 6px;
  }
`;
