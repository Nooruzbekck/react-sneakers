import { styled } from "@mui/material";
import { Icons } from "../../assets";
const { Plus, UnLiked, Liked } = Icons;

export const CardItem = ({ imageUrl, price, title, isFavorite = false }) => {
  return (
    <StyledListItem>
      <ContainerImage>
        {isFavorite ? (
          <Liked className="heart" />
        ) : (
          <UnLiked className="heart" />
        )}

        <img src={imageUrl} alt={title} />
      </ContainerImage>
      <Description>{title}</Description>
      <ContainerPrice>
        <div className="wrapper-price">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <Plus />
      </ContainerPrice>
    </StyledListItem>
  );
};

const StyledListItem = styled("li")`
  width: 210px;
  height: 270px;
  border-radius: 40px;
  border: 1.2px solid #f3f3f3;
  background: #fff;
  padding: 29px;
  list-style: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  svg {
    cursor: pointer;
  }
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 480px) {
    width: 150px;
    height: 180px;
    padding: 15px;
    border-radius: 28px;
    overflow: hidden;
    svg {
      width: 25px;
    }
  }
  @media (max-width: 400px) {
    width: 48.5%;
    height: 185px;
  }
`;

const ContainerImage = styled("div")`
  position: relative;
  .heart {
    position: absolute;
    top: 0;
    left: 0;
  }
  img {
    width: 100%;
    height: 102px;
    object-fit: cover;
  }

  @media (max-width: 480px) {
    height: 85px;
    img {
      width: 100%;
      height: 82px;
      object-fit: contain;
    }
    .heart {
      top: -3px;
      left: 4px;
    }
  }
`;

const Description = styled("p")`
  color: #000;
  font-size: 14px;
  font-weight: 400;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  width: 150px;
  margin-top: 10px;
  @media (max-width: 480px) {
    width: 100px;
    font-size: 10px;
    font-weight: 200;
    margin-top: 0;
  }
`;

const ContainerPrice = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  transform: translateY(14px);
  span {
    color: #bdbdbd;
    font-size: 11px;
    font-weight: 500;
    text-transform: uppercase;
  }
  b {
    color: #000;
    font-size: 14px;
    font-weight: 700;
  }
  .wrapper-price {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  @media (max-width: 480px) {
    transform: translateY(10px);
    span {
      font-size: 9px;
      font-weight: 300;
    }
  }
  b {
    font-size: 11px;
    font-weight: 500;
  }
`;