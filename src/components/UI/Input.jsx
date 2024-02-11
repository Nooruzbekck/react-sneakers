import React, { useState } from "react";
import { InputAdornment, IconButton, TextField, styled } from "@mui/material";
import { IoEyeSharp, IoEyeOffSharp } from "react-icons/io5";
import { Icons } from "../../assets";

export const Input = ({ type, value, placeholder, onChange, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPasswordType = type === "password";
  const isSearchType = type === "search";

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      {isPasswordType || isSearchType ? (
        <StyledInput
          type={isPasswordType && showPassword ? "text" : type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          {...props}
          InputProps={{
            endAdornment: isPasswordType ? (
              <InputAdornment position="end">
                <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                  {showPassword ? (
                    <IoEyeSharp className="password-eye" />
                  ) : (
                    <IoEyeOffSharp className="password-eye" />
                  )}
                </IconButton>
              </InputAdornment>
            ) : isSearchType ? (
              <InputAdornment position="start">
                <IconButton edge="start">
                  <StyledRiSearch2Line />
                </IconButton>
              </InputAdornment>
            ) : (
              {}
            ),
          }}
        />
      ) : (
        <StyledInput
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          {...props}
        />
      )}
    </div>
  );
};

const StyledInput = styled(TextField)(({ error }) => ({
  width: "100%",
  maxWidth: "270px",
  height: "45px",
  border: `1px solid ${error ? "#F10000" : "#f3f3f3"}`,
  borderRadius: "10px",
  background: "white",
  padding: "0 10px",
  display: "flex",
  justifyContent: "center",
  color: "#848181",
  ".password-eye": {
    width: "20px",
    height: "20px",
  },

  ".MuiInputBase-input": {
    fontSize: "16px",
    fontWeight: "400",
    position: "relative",
  },

  "& input:-webkit-autofill, & input:-webkit-autofill:hover, & input:-webkit-autofill:focus, & input:-webkit-autofill:active":
    {
      WebkitTransition: "color 9999s ease-out, background-color 9999s ease-out",
      WebkitTransitionDelay: "9999s",
    },
  "& fieldset": { border: "none" },
  "& ::-webkit-input-placeholder": {
    color: "#FFFF",
  },
  "input[type='search']::-webkit-search-cancel-button": {
    display: "none",
  },
}));

const StyledRiSearch2Line = styled(Icons.Search)(() => ({
  position: "absolute",
  right: "-15px",
}));
