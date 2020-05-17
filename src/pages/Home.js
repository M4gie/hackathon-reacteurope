import React from "react";
import { Button } from "@progress/kendo-react-buttons";
import styled from "styled-components";

export default function Home() {
  return (
    <Container>
      <h1>Hello World</h1>
      <Button primary>Click me</Button>
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
