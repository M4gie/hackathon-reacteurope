import React from "react";
import Container from "../components/Container";
import { useRecoilValue } from "recoil";
import { categoriesState } from "../recoil/categories";
import Link from "../components/Link";
import { Button } from "@progress/kendo-react-buttons";
import { Input } from "@progress/kendo-react-inputs";
import { gameLetterState } from "../recoil/letter";

export default function Game() {
  const gameCategories = useRecoilValue(categoriesState);
  const gameLetter = useRecoilValue(gameLetterState);

  return (
    <Container>
      <div>
        {gameCategories.map((category) => (
          <p>
            <Input defaultValue={gameLetter} label={category} />
          </p>
        ))}
        <Link to="/">
          <Button type="button">Return home</Button>
        </Link>
        <Link to="/result">
          <Button type="button" primary>
            Finished !
          </Button>
        </Link>
      </div>
    </Container>
  );
}
