import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { categories } from "../constant/categories";
import getAlphabet from "../utils/alphabet";
import Container from "../components/Container";
import SelectCategory from "../components/SelectCategory";
import SelectTime from "../components/SelectTime";
import SelectLetter from "../components/SelectLetter";
import Link from "../components/Link";
import Button from "../components/Button";

export default function Setup() {
  let history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    history.push("/game");
  }

  return (
    <Container>
      <form onSubmit={handleSubmit} className={"k-form"}>
        <SetupSection>
          <h2>Choose your categories :</h2>
          {categories.map((category) => (
            <SelectCategory key={category} category={category} />
          ))}
        </SetupSection>
        <SetupSection>
          <h2>Game duration :</h2>
          <SelectTime />
        </SetupSection>
        <SetupSection>
          <h2>Choose the game letter :</h2>
          {getAlphabet().map((letter) => (
            <SelectLetter key={letter} letter={letter} />
          ))}
        </SetupSection>
        <SetupSection>
          <Link to="/">
            <Button type="button" margin>
              Return home
            </Button>
          </Link>
          <Button type="submit" primary margin>
            PLAY !
          </Button>
        </SetupSection>
      </form>
    </Container>
  );
}

const SetupSection = styled.section`
  padding: 10px;
`;
