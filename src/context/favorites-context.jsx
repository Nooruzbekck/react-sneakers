import { createContext, useEffect, useState } from "react";
import { useGetRequest } from "../hooks/useGetRequest";
import axios from "axios";
import { BASE_URL } from "../utils/constants/constants";

export const favoritesContext = createContext({});

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [favoritesItems, getSneakersItems] = useGetRequest("items");

  useEffect(() => {
    setFavorites(favoritesItems.filter((item) => item.isFavorite));
  }, [favoritesItems]);

  const postFavoritesItems = async (obj) => {
    try {
      await axios.patch(`${BASE_URL}/items/${obj.id}`, obj);
      getSneakersItems();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <favoritesContext.Provider value={{ favorites, postFavoritesItems }}>
      {children}
    </favoritesContext.Provider>
  );
};
