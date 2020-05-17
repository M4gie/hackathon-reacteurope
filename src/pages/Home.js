import React from "react";
import { Button } from "@progress/kendo-react-buttons";
import Container from "../components/Container";
import Link from "../components/Link";

export default function Home() {
  return (
    <Container>
      <Link to="/setup">
        <Button primary>Create a game</Button>
      </Link>
    </Container>
  );
}
