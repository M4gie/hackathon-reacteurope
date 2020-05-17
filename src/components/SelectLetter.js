import React from "react";
import { Button } from "@progress/kendo-react-buttons";
import { useRecoilState } from "recoil";
import { gameLetterState } from "../recoil/letter";

export default function SelectLetter(props) {
  const { letter } = props;
  const [gameLetter, setGameLetter] = useRecoilState(gameLetterState);

  return (
    <Button
      type="button"
      primary={letter === gameLetter}
      onClick={() => setGameLetter(letter)}
      {...props}
    >
      {letter}
    </Button>
  );
}
