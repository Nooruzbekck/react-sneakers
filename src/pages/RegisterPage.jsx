import { styled } from "@mui/material";
import { SignUp } from "../components/auth/SignUp";

export const RegisterPage = () => {
  return (
    <RegisterContainer>
      <SignUp />
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
