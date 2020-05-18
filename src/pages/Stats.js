import React from "react";
import { Button } from "@progress/kendo-react-buttons";

import Container from "../components/Container";
import Link from "../components/Link";
import TimeStats from "../components/TimeStats";
import AnswerStats from "../components/AnswersStats";
import Score from "../components/Score";

export default function Stats() {
  return (
    <Container>
      <Score />
      <TimeStats />
      <AnswerStats />
      <Link to="/setup">
        <Button>Edit config</Button>
      </Link>
      <Link to="/game">
        <Button primary>Play again !</Button>
      </Link>
    </Container>
  );
}
