import { styled } from "@mui/material";
import { Layout } from "./layout/Layout";

export const App = () => {
  return (
    <AppLayout>
      <Layout />
    </AppLayout>
  );
};

const AppLayout = styled("div")`
  width: 80%;
  margin: 0 auto;
  margin-top: 50px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.04);
  @media (max-width: 480px) {
    width: 100%;
    margin-top: 0;
    border-radius: 0;
  }
`;
