import React from "react";
import { Button } from "@progress/kendo-react-buttons";
import Container from "../components/Container";
import Link from "../components/Link";

export default function Stats() {
  return (
    <Container>
      <Link to="/setup">
        <Button>Edit config</Button>
      </Link>
      <Link to="/game">
        <Button primary>Replay !</Button>
      </Link>
    </Container>
  );
}
