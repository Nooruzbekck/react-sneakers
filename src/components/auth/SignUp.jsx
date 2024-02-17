import { styled } from "@mui/material";
import { AuthInput } from "./AuthInput";
import { Icons } from "../../assets";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { schema } from "../../utils/constants/validation";
import { Input } from "../UI/Input";

export const SignUp = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: schema,
    onSubmit: (userData) => {
      console.log(userData);
    },
  });
  const { handleSubmit, values, handleChange, errors, touched } = formik;
  return (
    <StyledRegisterContainer>
      <div>
        <h1>Регистрация</h1>
        <Icons.Remove onClick={() => navigate("/login")} />
      </div>
      <Form onSubmit={handleSubmit}>
        <AuthInput
          name="name"
          type="text"
          value={values.name}
          onChange={handleChange}
          placeholder="Имя"
          error={errors.name}
          touched={touched.name}
        />
        <AuthInput
          name="fullName"
          type="text"
          value={values.fullName}
          onChange={handleChange}
          placeholder="Фамилия"
          error={errors.fullName}
          touched={touched.name}
        />
        <AuthInput
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          error={errors.email}
          touched={touched.email}
          placeholder="Email"
        />
        <AuthInput
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          placeholder="Введите пароль"
          error={errors.password}
          touched={touched.password}
        />
        <AuthInput
          name="confirmPassword"
          type="password"
          value={values.confirmPassword}
          onChange={handleChange}
          placeholder="Повторите пароль"
          error={errors.confirmPassword}
          touched={touched.confirmPassword}
        />
        <button type="submit">Создать аккаунт</button>
      </Form>

      <Question>
        У вас уже есть аккаунт?
        <Link to="/login">Войти</Link>
      </Question>
    </StyledRegisterContainer>
  );
};

const StyledRegisterContainer = styled("div")`
  width: 38%;
  height: 500px;
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
    justify-content: space-between;
    align-items: center;
    h1 {
      font-size: 28px;
      font-weight: 400;
    }
    svg {
      border: none;
      cursor: pointer;
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

const StyledInput = styled(Input)`
  .MuiFormControl-root {
    height: 20px;
  }
  .MuiInputBase-input {
    padding-top: 5px;
    height: 30px;
  }
`;

const Question = styled("p")`
  display: flex;
  gap: 20px;
  font-size: 16px;
  font-weight: 400;
  color: #23262f;
  a {
    color: #3772ff;
    text-decoration: none;
  }
`;