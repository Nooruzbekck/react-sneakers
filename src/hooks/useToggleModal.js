import { useSearchParams } from "react-router-dom";

export const useToggleModal = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const toggleHandler = (isActive) => {
    if (isActive) setSearchParams({ isActive });
    else setSearchParams("");
  };

  const cartIsActive = searchParams.get("isActive") || "";

  return {
    cartIsActive,
    toggleHandler,
  };
};
