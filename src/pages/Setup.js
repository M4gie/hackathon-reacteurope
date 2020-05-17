import React, { useState } from "react";
import { Slider, SliderLabel } from "@progress/kendo-react-inputs";
import { Button } from "@progress/kendo-react-buttons";
import { categories } from "../constant/categories";
import getAlphabet from "../utils/alphabet";
import { removeItem } from "../utils/array";
import Container from "../components/Container";

export default function Setup() {
  const [maxTime, setMaxTime] = useState(3);
  const [gameLetter, setGameLetter] = useState("A");
  const [gameCategories, setGameCategories] = useState([]);
  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleCategory(category) {
    if (gameCategories.includes(category)) {
      const index = gameCategories.findIndex(
        (listItem) => listItem === category
      );
      const newCategories = removeItem(gameCategories, index);
      setGameCategories(newCategories);
    } else {
      setGameCategories([...gameCategories, category]);
    }
  }

  return (
    <Container style={{ textAlign: "center" }}>
      <form onSubmit={handleSubmit} className={"k-form"}>
        <div>
          {categories.map((category) => (
            <Button
              type="button"
              key={category}
              primary={gameCategories.includes(category)}
              onClick={() => handleCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <div>
          <Slider
            value={maxTime}
            onChange={({ value }) => setMaxTime(value)}
            min={1}
            max={9}
            step={1}
            defaultValue={3}
          >
            {[1, 3, 5, 7, 9].map((time) => (
              <SliderLabel
                key={time}
                position={time}
                onClick={() => {
                  setMaxTime(time);
                }}
              >
                {time}
              </SliderLabel>
            ))}
          </Slider>
        </div>
        <div>
          {getAlphabet().map((letter) => (
            <Button
              type="button"
              key={letter}
              primary={letter === gameLetter}
              onClick={() => setGameLetter(letter)}
            >
              {letter}
            </Button>
          ))}
        </div>
        <button type="submit" className="k-button">
          Submit
        </button>
      </form>
    </Container>
  );
}
