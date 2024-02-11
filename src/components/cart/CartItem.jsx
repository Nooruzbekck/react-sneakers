import { styled } from "@mui/material";
import { Icons } from "../../assets";

export const CartItem = ({ imageUrl, title, price }) => {
  return (
    <ListItem>
      <img src={imageUrl} alt="" />
      <WrapperPriceDesc>
        <p>{title}</p>
        <CartContainerPrice>
          <b>{price} руб.</b>
          <Icons.Remove className="remove" />
        </CartContainerPrice>
      </WrapperPriceDesc>
    </ListItem>
  );
};

const ListItem = styled("li")`
  width: 100%;
  height: 119px;
  border-radius: 20px;
  border: 1px solid #f3f3f3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 21px;
  padding: 20px;
  color: #000;

  img {
    width: 70px;
    height: 70px;
  }
`;

const CartContainerPrice = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  b {
    font-size: 14px;
    font-weight: 700;
  }
  .remove {
    cursor: pointer;
  }
`;

const WrapperPriceDesc = styled("div")`
  width: 192px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  p {
    font-size: 14px;
    font-weight: 400;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;
