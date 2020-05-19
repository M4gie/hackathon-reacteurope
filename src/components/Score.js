import React from "react";
import { useRecoilValue } from "recoil";
import { answersState } from "../recoil/answers";
import Title from "./Title";

function getScore(answers) {
  const allowedAnswers = answers.filter(({ text }) => text && text.length > 1);
  const score = allowedAnswers.reduce(function (acc, current) {
    return acc + current.text.length;
  }, 0);
  return score;
}

export default function Score() {
  const answers = useRecoilValue(answersState);
  const score = getScore(answers);

  return <Title>Your score: {score}</Title>;
}
