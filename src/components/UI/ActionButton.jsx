import { styled } from "@mui/material";

export const ActionButton = ({ onClick, Icon, variant }) => {
  return (
    <StyledActionButton onClick={onClick} variant={variant}>
      <Icon />
    </StyledActionButton>
  );
};

const StyledActionButton = styled("button")`
  border: ${(props) =>
    props.variant === "plus" ? "1.5px solid #e6e5e5" : "none"};
  width: 32px;
  height: 33px;
  border-radius: 8px;
  background: none;
  cursor: pointer;
`;
