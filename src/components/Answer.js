import React from "react";
import { Input } from "@progress/kendo-react-inputs";
import { useRecoilValue, useRecoilState } from "recoil";
import styled from "styled-components";
import { gameLetterState } from "../recoil/letter";
import { answersState } from "../recoil/answers";
import { replaceItemAtIndex } from "../utils/array";

export default function Answer(props) {
  const { category } = props;
  const gameLetter = useRecoilValue(gameLetterState);
  const [answers, setAnswers] = useRecoilState(answersState);
  let inputIndex = answers.findIndex(
    (listItem) => listItem.category === category
  );

  function handleInput(text) {
    if (inputIndex !== -1) {
      const newAnswers = replaceItemAtIndex(answers, inputIndex, {
        category,
        text,
      });
      setAnswers(newAnswers);
    } else {
      setAnswers([...answers, { category, text }]);
    }
  }

  return (
    <p>
      <StyledInput
        label={category}
        value={inputIndex !== -1 ? answers[inputIndex].text : gameLetter}
        onChange={({ target: { value } }) => handleInput(value)}
      />
    </p>
  );
}

const StyledInput = styled(Input)`
  font-size: 1.2em;
`;
