import styled from "styled-components";

const Button = (props) => {
  return <button {...props}>{props.children}</button>;
};

const StyledButton = styled(Button)`
  padding: 10px;
  background-color: transparent;
  border-color: yellow;
  border-radius: 5px;
  color: white;
  &:hover {
    cursor: pointer;
    border-color: red;
  }
`;

export default StyledButton;
