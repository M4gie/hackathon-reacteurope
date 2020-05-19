import React from "react";
import Container from "../components/Container";
import Link from "../components/Link";
import TimeStats from "../components/TimeStats";
import AnswerStats from "../components/AnswersStats";
import Score from "../components/Score";
import Button from "../components/Button";

export default function Stats() {
  return (
    <Container>
      <div>
        <Score />
        <div style={{ display: "flex" }}>
          <TimeStats />
          <AnswerStats />
        </div>
        <Link to="/setup">
          <Button margin>Edit config</Button>
        </Link>
        <Link to="/game">
          <Button primary margin>
            Play again !
          </Button>
        </Link>
      </div>
    </Container>
  );
}
