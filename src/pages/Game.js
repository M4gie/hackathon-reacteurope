import React from "react";
import Container from "../components/Container";
import { useRecoilValue } from "recoil";
import { categoriesState } from "../recoil/categories";
import { useHistory } from "react-router-dom";
import Answer from "../components/Answer";
import GameTimer from "../components/GameTimer";

export default function Game() {
  let history = useHistory();
  const gameCategories = useRecoilValue(categoriesState);

  function handleEndGame(remainingTime) {
    console.log("remaining time: ", remainingTime);
    history.push("/stats");
  }

  return (
    <Container>
      <div>
        <GameTimer onTimerEnd={handleEndGame} />
        {gameCategories.map((category) => (
          <Answer key={category} category={category} />
        ))}
      </div>
    </Container>
  );
}
