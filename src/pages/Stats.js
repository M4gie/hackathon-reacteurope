import React from "react";
import { Button } from "@progress/kendo-react-buttons";

import Container from "../components/Container";
import Link from "../components/Link";
import TimeStats from "../components/TimeStats";

export default function Stats() {
  return (
    <Container>
      <TimeStats />
      <Link to="/setup">
        <Button>Edit config</Button>
      </Link>
      <Link to="/game">
        <Button primary>Play again !</Button>
      </Link>
    </Container>
  );
}
