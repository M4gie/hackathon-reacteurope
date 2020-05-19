import React, { useEffect } from "react";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { useHistory } from "react-router-dom";
import Answer from "../components/Answer";
import GameTimer from "../components/GameTimer";
import { answersState } from "../recoil/answers";
import { categoriesState } from "../recoil/categories";
import Container from "../components/Container";

export default function Game() {
  let history = useHistory();
  const gameCategories = useRecoilValue(categoriesState);
  const resetAnswers = useResetRecoilState(answersState);

  useEffect(() => {
    resetAnswers();
  }, []);

  function handleEndGame() {
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
