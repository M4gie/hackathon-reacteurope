import React from "react";
import styled from "styled-components";

export default function Title(props) {
  return (
    <StyledTitle style={{ fontSize: 42, letterSpacing: ".3rem" }} {...props} />
  );
}

const StyledTitle = styled.h1`
  font-size: 42;
  letter-spacing: 0.3rem;
`;
