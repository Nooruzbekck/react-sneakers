import { styled } from "@mui/material";
import { Empty, Icons } from "../../assets";
import { useToggleModal } from "../../hooks/useToggleModal";
const { ArrowLeft } = Icons;

export const CartEmpty = () => {
  const { toggleHandler } = useToggleModal();
  return (
    <ContainerEmpty>
      <img src={Empty} alt="" />
      <h2>Корзина пустая</h2>
      <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
      <button onClick={() => toggleHandler("")}>
        <ArrowLeft />
        Вернуться назад
      </button>
    </ContainerEmpty>
  );
};

const ContainerEmpty = styled("div")`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 21px;
  img {
    width: 120px;
    height: 120px;
  }
  h2 {
    color: #000;
    font-size: 22px;
    font-weight: 600;
  }
  p {
    color: #000;
    width: 285px;
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    opacity: 0.4;
    line-height: 24px;
  }
  button {
    width: 245px;
    height: 55px;
    border-radius: 18px;
    background: #9dd458;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    border: none;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 30px;
    padding-left: 31px;
    cursor: pointer;
  }
`;
