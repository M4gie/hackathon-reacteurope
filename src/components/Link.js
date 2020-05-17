import React from "react";
import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export default function Link(props) {
  return <StyledLink {...props} />;
}

const StyledLink = styled(RouterLink)`
  color: inherit;
  text-decoration: none;
`;
