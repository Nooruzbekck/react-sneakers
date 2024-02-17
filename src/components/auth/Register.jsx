import React from "react";
import { styled } from "@mui/material";
import { AuthInput } from "./AuthInput";
import { Icons } from "../../assets";
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
const { Remove } = Icons;
export const Register = () => {
  const navigate = useNavigate();
  const handleSubmit = (data) => {
    console.log(data);
  };
  return (
    <StyledRegisterContainer>
      <div>
        <h1>Регистрация</h1>
        <Remove onClick={() => navigate("/login")} />
      </div>
      <Formik
        initialValues={{
          name: "",
          fullName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <AuthInput name="name" error="asdfasdf" placeholder="Имя" />
            <AuthInput name="fullName" placeholder="Фамилия" />
            <AuthInput name="email" placeholder="Email" />
            <AuthInput name="password" placeholder="Введите пароль" />
            <AuthInput name="confirmPassword" placeholder="Повторите пароль" />
            <button>Создать аккаунт</button>
          </Form>
        )}
      </Formik>

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
