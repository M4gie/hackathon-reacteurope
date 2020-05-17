import React from "react";
import styled from "styled-components";

export default function Container(props) {
  return <StyledContainer {...props} />;
}

const StyledContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
