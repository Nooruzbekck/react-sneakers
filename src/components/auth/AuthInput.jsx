import { styled } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";

export const AuthInput = ({
  type,
  name,
  value,
  onChange,
  placeholder,
  error,
  touched,
}) => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const isPasswordType = type === "password";

  const togglePassword = useCallback(() => {
    setIsShowPassword(!isShowPassword);
  }, []);

  useEffect(() => {
    const timerPasword = setTimeout(() => {
      setIsShowPassword(false);
    }, 1000);
    return () => {
      clearTimeout(timerPasword);
    };
  }, [isShowPassword, togglePassword]);

  return (
    <Container>
      <input
        name={name}
        type={isPasswordType && isShowPassword ? "text" : type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {isPasswordType ? (
        isShowPassword ? (
          <AiOutlineEye className="eye" onClick={togglePassword} />
        ) : (
          <AiOutlineEyeInvisible className="eye" onClick={togglePassword} />
        )
      ) : null}
      <ErrorMessage>{touched && error}</ErrorMessage>
    </Container>
  );
};

const Container = styled("div")`
  position: relative;
  input {
    width: 100%;
    padding: 0 31px 0 20px;
    outline: none;
    height: 37px;
    border-radius: 6px;
    border: 1px solid #bdbdbd;
    color: #8d949e;
    font-size: 16px;
    font-weight: 400;
    :-webkit-autofill,
    :-webkit-autofill:hover,
    :-webkit-autofill:focus,
    :-webkit-autofill:active {
      -webkit-transition: font-size 28px, color 9999s ease-out,
        background-color 9999s ease-out;
      -webkit-transition-delay: 9999s;
    }

    ::placeholder {
      font-size: 14px;
      font-weight: 300;
    }
  }
  .eye {
    width: 20px;
    height: 20px;
    position: absolute;
    right: 7px;
    top: 5;
    color: #bdbdbd;
  }
`;

const ErrorMessage = styled("span")`
  font-size: 12px;
  font-weight: 200;
  color: red;
  position: absolute;
  bottom: -17px;
  left: 5px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
