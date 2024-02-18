import * as Yup from "yup";

const EMAIL_REGX =
  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const schema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Имя должен содержать минимум 2 буквы")
    .max(10, "Имя должен содержать максимум 10 букв")
    .required("Обязательное поле"),

  fullName: Yup.string()
    .min(3, "Фамилия должен быть минимум 3 буквы")
    .max(15, "Фамилия должен быть максимум 15 букв")
    .required("Обязательное поле"),
  email: Yup.string()
    .email("почта введен некорректно")
    .matches(EMAIL_REGX, {
      message: "почта некорректен",
    })
    .required("Обязательное поле"),
  password: Yup.string()
    .matches(passwordRules, {
      message: "Пожалуйста, создайте более надежный пароль",
    })
    .required("Обязательное поле"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Пароли должны совпадать"
  ),
  password: Yup.string()
    .matches(/[0-9]/, "Пожалуйста, создайте более надежный пароль")
    .matches(/[a-z]/, "Пожалуйста, создайте более надежный пароль")
    .required("Обязательное поле"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Пароли должны совпадать"
  ),
});

export const loginValidation = Yup.object().shape({
  email: Yup.string()
    .email("Пожалуйста, введите действительный адрес электронной почты")
    .matches(EMAIL_REGX, {
      message: "почта некорректен",
    }),
  password: Yup.string()
    .matches(/[0-9]/, "Пароль должен быть надежным")
    .matches(/[a-z]/, "Пароль должен быть надежным"),
});
