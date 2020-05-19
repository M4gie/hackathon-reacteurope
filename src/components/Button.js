import React from "react";
import styled from "styled-components";
import { Button as KendoButton } from "@progress/kendo-react-buttons";

export default function Button(props) {
  return <StyledButton {...props} />;
}

const StyledButton = styled(KendoButton)`
  font-size: ${(props) => (props.small ? "1.3em" : "1.4em")};
  padding: ${(props) => (props.small ? "5px" : "10px")};
  margin-right: ${(props) => (props.margin ? "10px" : "0px")};
  margin-left: ${(props) => (props.margin ? "10px" : "0px")};
`;
