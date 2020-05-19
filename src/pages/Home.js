import React from "react";
import Container from "../components/Container";
import Link from "../components/Link";
import Title from "../components/Title";
import Button from "../components/Button";

export default function Home() {
  return (
    <Container>
      <div>
        <Title>Find the word...</Title>
        <Link to="/setup">
          <Button primary>Create a game</Button>
        </Link>
      </div>
    </Container>
  );
}
