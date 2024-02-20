import { useDispatch } from "react-redux";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useToggleModal } from "../../hooks/useToggleModal";
import styled from "@emotion/styled";
import { loginUser } from "../../store/slices/auth-slice";

export const MenuHeader = () => {
  const { cartIsActive, toggleHandler } = useToggleModal();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(loginUser({ token: "" }));
  };

  return (
    <StyledMenu
      open={cartIsActive === "menu"}
      onClose={() => toggleHandler("")}
      id="basic-menu"
      anchorEl={cartIsActive === "menu"}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
    >
      <MenuItem onClick={() => toggleHandler("")}>Профиль</MenuItem>
      <MenuItem onClick={() => toggleHandler("")}>Покупки</MenuItem>
      <MenuItem onClick={handleLogout}>Logout</MenuItem>
    </StyledMenu>
  );
};

const StyledMenu = styled(Menu)`
  position: absolute;
  top: 0;
  left: 0;
`;
