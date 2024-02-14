import { useContext, useState } from "react";
import { Modal, styled } from "@mui/material";
import axios from "axios";
import { CartList } from "./CartList";
import { useToggleModal } from "../../hooks/useToggleModal";
import { cartContext } from "../../context/cart-context";
import { InfoOrders } from "./InfoOrders";
import { CartEmpty } from "./CartEmpty";
import { BASE_URL } from "../../utils/constants/constants";
import { CiCircleChevLeft } from "react-icons/ci";

export const CartModal = () => {
  const { cartIsActive, toggleHandler } = useToggleModal();
  const [isOrders, setIsOrders] = useState(false);
  const [dataId, setDataId] = useState(0);
  const { sneakersCart, setSneakersCart } = useContext(cartContext);

  const handlePostOrders = async () => {
    try {
      const { data } = await axios.post(`${BASE_URL}/orders`, {
        date: new Date(),
        items: sneakersCart,
      });
      setDataId(data.id);
      const items = data.items;
      for (const iterator of items) {
        const itemId = iterator;
        await axios.delete(`${BASE_URL}/cart/${itemId.id}`);
      }
      setSneakersCart([]);
      setIsOrders(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal open={Boolean(cartIsActive)} onClose={() => toggleHandler("")}>
      <StyledContainer>
        <Basket>
          <CiCircleChevLeft
            className="chevleft"
            onClick={() => toggleHandler("")}
          />
          <h1>Корзина</h1>
        </Basket>
        {isOrders ? (
          <InfoOrders dataId={dataId} setIsOrders={setIsOrders} />
        ) : (
          <>
            {sneakersCart.length > 0 ? (
              <>
                <CartList
                  cartItems={sneakersCart}
                  onPostOrders={handlePostOrders}
                />
              </>
            ) : (
              <CartEmpty />
            )}
          </>
        )}
      </StyledContainer>
    </Modal>
  );
};

const StyledContainer = styled("div")`
  width: 385px;
  height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
  background-color: white;
  z-index: 30;
  padding-bottom: 60px;
  border: unset;
`;

const Basket = styled("div")`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 32px 0 0 30px;
  .chevleft {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
  h1 {
    color: #000;
    font-size: 24px;
    font-weight: 700;
  }
`;
