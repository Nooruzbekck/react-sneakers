import { createContext, useEffect, useState } from "react";
import { useGetRequest } from "../hooks/useGetRequest";
import { axiosInstance } from "../api/axiosInstance";

export const cartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [sneakersCart, setSneakersCart] = useState([]);
  const [cartItems] = useGetRequest("cart");

  useEffect(() => {
    setSneakersCart(cartItems);
  }, [cartItems]);

  const totalPrice = sneakersCart.reduce((acc, item) => {
    return (acc = acc + item.price);
  }, 0);

  const onAddToCart = async (obj) => {
    try {
      const findItem = sneakersCart.find(
        (item) => Number(item.parentId) === Number(obj.parentId)
      );
      if (findItem) {
        setSneakersCart((prev) =>
          prev.filter((item) => Number(item.parentId) !== Number(obj.id))
        );
        await axiosInstance.delete(`/cart/${findItem.id}`);
      } else {
        setSneakersCart((prev) => [...prev, obj]);
        const { data } = await axiosInstance.post(`/cart`, obj);
        setSneakersCart((prev) =>
          prev.map((item) => {
            if (item.parentId === data.parentId) {
              return {
                ...item,
                id: data.id,
              };
            }
            return item;
          })
        );
      }
    } catch (error) {
      alert("Ошибка при добавлении в корзину");
      console.error(error);
    }
  };

  const onRemoveItem = async (id) => {
    try {
      await axiosInstance.delete(`/cart/${id}`);
      setSneakersCart((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <cartContext.Provider
      value={{
        onAddToCart,
        sneakersCart,
        onRemoveItem,
        totalPrice,
        setSneakersCart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};
