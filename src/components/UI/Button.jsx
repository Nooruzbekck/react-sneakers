import React from "react";
import { Icons } from "../../assets";
import { styled } from "@mui/material";
const { Arrow, ArrowLeft } = Icons;

export const Button = ({ variantIcon, onClick, type, children }) => {
  return (
    <StyledButton onClick={onClick} type={type}>
      {variantIcon === "left" ? <ArrowLeft /> : null}
      {children}
      {variantIcon === "right" ? <Arrow /> : null}
    </StyledButton>
  );
};
const StyledButton = styled("button")`
  width: 245px;
  height: 55px;
  border-radius: 18px;
  background: #9dd458;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  text-align: center;
  cursor: pointer;
`;
