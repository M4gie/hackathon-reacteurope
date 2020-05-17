import React from "react";
import Container from "../components/Container";
import { useRecoilState } from "recoil";
import { categoriesState } from "../recoil/categories";
import Link from "../components/Link";
import { Button } from "@progress/kendo-react-buttons";

export default function Game() {
  const gameCategories = useRecoilState(categoriesState);
  return (
    <Container>
      <div>
        {gameCategories.map((category) => (
          <p>{category}</p>
        ))}
      </div>
      <div>
        <Link to="/">
          <Button type="button">Return home</Button>
        </Link>
      </div>
    </Container>
  );
}
