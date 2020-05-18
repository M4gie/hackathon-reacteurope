import React from "react";
import { useRecoilValue } from "recoil";
import Donut from "./Donut";
import { answersState } from "../recoil/answers";
import { categoriesState } from "../recoil/categories";

function getAnswersStats(answers, categories) {
  const allowedAnswers = answers.filter(({ text }) => text && text.length > 1);
  const totalAnswers = allowedAnswers.length;
  const totalCategories = categories.length;
  const Answered = totalCategories === 0 ? 0 : totalAnswers / totalCategories;
  const Missing =
    totalCategories === 0
      ? 0
      : (totalCategories - totalAnswers) / totalCategories;
  console.log("totalAnswers: ", totalAnswers, " categories: ", totalCategories);

  return [
    { kind: "Answered", share: Answered },
    { kind: "Missing", share: Missing },
  ];
}

export default function AnswersStats() {
  const answers = useRecoilValue(answersState);
  const categories = useRecoilValue(categoriesState);
  const answersStatsData = getAnswersStats(answers, categories);
  return <Donut data={answersStatsData} />;
}
