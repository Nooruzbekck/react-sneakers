import { Link, useNavigate } from "react-router-dom";
import { styled } from "@mui/material";
import { useFormik } from "formik";
import { AuthInput } from "./AuthInput";
import { loginValidation } from "../../utils/constants/validation";
import { signInThunk } from "../../store/thunks/authThunk";
import { useDispatch } from "react-redux";

export const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: loginValidation,
    onSubmit: (data) => {
      dispatch(signInThunk({ user: data, navigate }));
    },
  });

  const { handleSubmit, errors, touched, values, handleChange } = formik;
  return (
    <StyledSigInContainer>
      <div>
        <h1>Войти</h1>
      </div>
      <Form onSubmit={handleSubmit}>
        <AuthInput
          name="email"
          type="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
          error={errors.email}
          touched={touched.email}
        />
        <AuthInput
          name="password"
          type="password"
          placeholder="Пароль"
          value={values.password}
          onChange={handleChange}
          error={errors.password}
          touched={touched.password}
        />
        <button type="submit">Войти</button>
      </Form>
      <Link to="/forgot-password">Забыли пароль?</Link>
      <Question>
        Нет аккаунта?
        <Link to="/register">Зарегистрироваться</Link>
      </Question>
    </StyledSigInContainer>
  );
};
const StyledSigInContainer = styled("div")`
  width: 38%;
  min-width: 330px;
  height: 350px;
  padding: 25px 50px;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  -webkit-box-shadow: -1px 1px 16px 4px rgba(34, 60, 80, 0.17);
  -moz-box-shadow: -1px 1px 16px 4px rgba(34, 60, 80, 0.17);
  box-shadow: -1px 1px 16px 4px rgba(34, 60, 80, 0.17);
  background-color: #fff;
  padding-top: 25px;

  div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: 28px;
      font-weight: 400;
    }
  }
  a {
    color: #3772ff;
    text-decoration: none;
  }
  @media (max-width: 480px) {
    position: relative;
    div {
      h1 {
        font-size: 24px;
        font-weight: 400;
      }
    }
  }
`;

const Form = styled("form")`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;
  justify-content: center;

  button {
    height: 39px;
    border-radius: 6px;
    border: none;
    background-color: #8639b5;
    font-size: 16px;
    font-weight: 600;
    text-align: center;
    color: #fff;
    cursor: pointer;
  }
`;

const Question = styled("p")`
  display: flex;
  gap: 20px;
  font-size: 16px;
  font-weight: 400;
  color: #23262f;
  @media (max-width: 480px) {
    font-size: 14px;
    font-weight: 400;
    position: absolute;
    bottom: 30px;
    left: 40px;
  }

  a {
    color: #3772ff;
    text-decoration: none;
  }
`;
