import { styled } from "@mui/material";
import React from "react";
import { Icons } from "../../assets";
const { Remove } = Icons;

export const AuthInput = ({
  type,
  name,
  value,
  onChange,
  placeholder,
  error,
}) => {
  return (
    <Container>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      <ErrorMessage>{error}</ErrorMessage>
    </Container>
  );
};

const Container = styled("div")`
  input {
    width: 100%;
    padding-left: 20px;
    outline: none;
    height: 35px;
    border-radius: 6px;
    border: 1px solid #bdbdbd;
    color: #8d949e;
    font-size: 16px;
    font-weight: 400;
    ::placeholder {
      font-size: 16px;
      font-weight: 300;
    }
  }
  position: relative;
`;

const ErrorMessage = styled("span")`
  font-size: 12px;
  font-weight: 200;
  color: red;
  position: absolute;
  bottom: -17px;
  left: 5px;
`;
