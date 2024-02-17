import { styled } from "@mui/material";
import { Register } from "../components/auth/Register";

export const RegisterPage = () => {
  return (
    <RegisterContainer>
      <Register />
    </RegisterContainer>
  );
};

const RegisterContainer = styled("div")`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
