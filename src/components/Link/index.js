import styled from "styled-components";

const Link = (props) => {
  return <a {...props}>{props.children}</a>;
};

const StyledLink = styled(Link)`
  color: yellow;
`;

export default StyledLink;
