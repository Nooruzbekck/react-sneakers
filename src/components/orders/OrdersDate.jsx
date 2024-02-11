import { styled } from "@mui/material";

export const OrdersDate = ({ date }) => {
  const newDate = new Date(date);
  let time = newDate.toLocaleTimeString("ru-RU");
  time = time.slice(0, -3);
  const day = newDate.getDate();
  const month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();

  return (
    <StyledDate>
      <h3>Вы покупали -</h3>
      <div>
        <b>{day >= 10 ? day : `0${day}`}</b>:
        <b>{month >= 10 ? month : `0${month}`}</b>:<b>{year}</b>
      </div>
      <b>{time}</b>
    </StyledDate>
  );
};

const StyledDate = styled("div")`
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  margin-bottom: 10px;
  b {
    font-size: 16px;
    font-weight: 400;
  }
`;
