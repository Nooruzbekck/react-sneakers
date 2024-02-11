import { styled } from "@mui/material";
import { Icons, Logo } from "../../assets";
import { useToggleModal } from "../../hooks/useToggleModal";

const { Cart, Heart, User } = Icons;

export const Header = () => {
  const { toggleHandler } = useToggleModal();
  return (
    <StyledHeader>
      <div className="wrapper-logo_png">
        <img src={Logo} alt="" />
        <div className="wrapper-description">
          <h1>REACT SNEAKERS</h1>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>
      <nav>
        <ListNav>
          <li onClick={() => toggleHandler("open")}>
            <Cart />
            <b className="price">1205 руб.</b>
          </li>
          <li>
            <Heart />
            <b>Закладки</b>
          </li>
          <li>
            <User />
            <b>Профиль</b>
          </li>
        </ListNav>
      </nav>
    </StyledHeader>
  );
};

const StyledHeader = styled("header")`
  height: 128px;
  width: 100%;
  border-bottom: 1.2px solid #eaeaea;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 60px 0 45px;
  .wrapper-logo_png {
    display: flex;
    gap: 16px;
    cursor: pointer;
    img {
      width: 40px;
      height: 40px;
    }
  }
  .wrapper-description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1 {
      color: #000;
      font-size: 20px;
      font-weight: 700;
      text-transform: uppercase;
    }
    p {
      color: #9d9d9d;
      font-size: 14px;
      font-weight: 400;
    }
  }
  @media (max-width: 480px) {
    height: 110px;
    padding: 0 40px;
    flex-direction: column;
    align-items: self-start;
    justify-content: space-around;
    .wrapper-description {
      h1 {
        font-size: 16px;
        font-weight: 600;
      }
      p {
        font-size: 12px;
        font-weight: 300;
      }
    }
  }
`;

const ListNav = styled("ul")`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 32px;
  list-style: none;
  li {
    display: flex;
    gap: 10px;
    cursor: pointer;
    :hover {
      color: black;
    }
  }
  b {
    color: #5c5c5c;
    font-size: 16px;
    font-weight: 400;
  }

  .price {
    color: #5c5c5c;
    font-weight: 600;
  }
  @media (max-width: 480px) {
    gap: 25px;
    justify-content: space-between;
    b {
      font-size: 14px;
      font-weight: 400;
    }
    .price {
      color: #5c5c5c;
      font-weight: 500;
      white-space: nowrap;
    }
    svg {
      width: 15px;
      height: 15px;
    }
  }
`;
