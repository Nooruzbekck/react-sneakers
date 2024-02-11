import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants/constants";
import { toast } from "react-toastify";

export const useGetRequest = (url) => {
  const [items, setItems] = useState([]);

  const getSneakersItems = useCallback(async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/${url}`);
      setItems(data);
    } catch (error) {
      toast.error(error);
    }
  }, [url]);

  useEffect(() => {
    getSneakersItems();
  }, [getSneakersItems]);

  return [items, getSneakersItems];
};
