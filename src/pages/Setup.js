import React from "react";
import { categories } from "../constant/categories";
import getAlphabet from "../utils/alphabet";
import Container from "../components/Container";
import SelectCategory from "../components/SelectCategory";
import SelectTime from "../components/SelectTime";
import SelectLetter from "../components/SelectLetter";
import { Button } from "@progress/kendo-react-buttons";
import Link from "../components/Link";

export default function Setup() {
  function handleSubmit(event) {
    console.log("Send form !");
    event.preventDefault();
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
        <Button type="submit" className="k-button" primary>
          PLAY !
        </Button>
        <Link to="/">
          <Button type="button">Return home</Button>
        </Link>
      </form>
    </Container>
  );
}
