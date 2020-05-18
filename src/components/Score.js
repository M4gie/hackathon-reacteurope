import React from "react";
import { useRecoilValue } from "recoil";
import { answersState } from "../recoil/answers";

function getScore(answers) {
  const score = answers.reduce(function (acc, current) {
    return acc + current.text.length;
  }, 0);
  return score;
}

export default function Score() {
  const answers = useRecoilValue(answersState);
  const score = getScore(answers);

  return <h1>Your score: {score}</h1>;
}
