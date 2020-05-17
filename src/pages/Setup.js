import React from "react";
import { categories } from "../constant/categories";
import getAlphabet from "../utils/alphabet";
import Container from "../components/Container";
import SelectCategory from "../components/SelectCategory";
import SelectTime from "../components/SelectTime";
import SelectLetter from "../components/SelectLetter";
import { Button } from "@progress/kendo-react-buttons";
import Link from "../components/Link";
import { useHistory } from "react-router-dom";

export default function Setup() {
  let history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    history.push("/game");
  }

  return (
    <Container style={{ textAlign: "center" }}>
      <form onSubmit={handleSubmit} className={"k-form"}>
        <div>
          {categories.map((category) => (
            <SelectCategory key={category} category={category} />
          ))}
        </div>
        <div>
          <SelectTime />
        </div>
        <div>
          {getAlphabet().map((letter) => (
            <SelectLetter key={letter} letter={letter} />
          ))}
        </div>
        <Button type="submit" primary>
          PLAY !
        </Button>
        <Link to="/">
          <Button type="button">Return home</Button>
        </Link>
      </form>
    </Container>
  );
}
