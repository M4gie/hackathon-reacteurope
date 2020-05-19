import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { gameLetterState } from "../recoil/letter";
import Button from "./Button";

export default function SelectLetter(props) {
  const { letter } = props;
  const [gameLetter, setGameLetter] = useRecoilState(gameLetterState);

  return (
    <LetterButton
      type="button"
      primary={letter === gameLetter}
      onClick={() => setGameLetter(letter)}
      {...props}
      small
    >
      {letter}
    </LetterButton>
  );
}

const LetterButton = styled(Button)``;
