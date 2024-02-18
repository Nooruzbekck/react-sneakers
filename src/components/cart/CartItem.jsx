import { useContext } from "react";
import { styled } from "@mui/material";
import { cartContext } from "../../context/cart-context";
import { Icons } from "../../assets";

export const CartItem = ({ id, imageUrl, title, price }) => {
  const { onRemoveItem } = useContext(cartContext);
  return (
    <ListItem>
      <img src={imageUrl} alt="" />
      <WrapperPriceDesc>
        <p>{title}</p>
        <CartContainerPrice>
          <b>{price} руб.</b>
          <Icons.Remove className="remove" onClick={() => onRemoveItem(id)} />
        </CartContainerPrice>
      </WrapperPriceDesc>
    </ListItem>
  );
};

const ListItem = styled("li")`
  width: 98%;
  height: 119px;
  border-radius: 20px;
  border: 1px solid #f3f3f3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 21px;
  padding: 20px;
  color: #000;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  &:hover {
    transform: translateY(-2px) scale(1.01);
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  }

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
