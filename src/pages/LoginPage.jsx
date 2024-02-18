import { styled } from "@mui/material";
import { SignIn } from "../components/auth/SignIn";

export const LoginPage = () => {
  return (
    <LoginContainer>
      <SignIn />
    </LoginContainer>
  );
};
const LoginContainer = styled("div")`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
