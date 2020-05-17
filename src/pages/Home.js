import React from "react";
import { Button } from "@progress/kendo-react-buttons";
import Container from "../components/Container";
import Link from "../components/Link";

export default function Home() {
  return (
    <Container>
      <Button primary>
        <Link to="/setup">Create a game</Link>
      </Button>
    </Container>
  );
}
