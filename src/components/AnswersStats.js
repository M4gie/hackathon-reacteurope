import React from "react";
import { useRecoilValue } from "recoil";
import Donut from "./Donut";
import { answersState } from "../recoil/answers";
import { categoriesState } from "../recoil/categories";
import ColumnChart from "./ColumnChart";

function getAnsweredStats(answers, categories) {
  const totalAnswers = answers.length;
  const totalCategories = categories.length;
  const Answered = totalCategories === 0 ? 0 : totalAnswers / totalCategories;
  const Missing =
    totalCategories === 0
      ? 0
      : (totalCategories - totalAnswers) / totalCategories;
  return [
    { kind: "Answered", share: Answered },
    { kind: "Missing", share: Missing },
  ];
}

function getAnswersScore(answers) {
  const answerLengthData = answers.map((answer) => ({
    name: answer.category,
    data: [answer.text.length],
  }));
  return answerLengthData;
}

function getAnswersStats(answers, categories) {
  const allowedAnswers = answers.filter(({ text }) => text && text.length > 1);
  const answeredStats = getAnsweredStats(allowedAnswers, categories);
  const answersScore = getAnswersScore(allowedAnswers);
  return { answeredStats, answersScore };
}

export default function AnswersStats() {
  const answers = useRecoilValue(answersState);
  const categories = useRecoilValue(categoriesState);
  const answersData = getAnswersStats(answers, categories);
  return (
    <>
      <Donut data={answersData.answeredStats} title="Answers stats :" />
      <ColumnChart
        categories={["Categories"]}
        data={answersData.answersScore}
        title="Score details :"
      />
    </>
  );
}
