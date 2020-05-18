import React, { useEffect } from "react";
import Container from "../components/Container";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { categoriesState } from "../recoil/categories";
import { useHistory } from "react-router-dom";
import Answer from "../components/Answer";
import GameTimer from "../components/GameTimer";
import { answersState } from "../recoil/answers";

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
