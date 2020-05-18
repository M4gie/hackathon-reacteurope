import React from "react";
import Container from "../components/Container";
import { useRecoilValue } from "recoil";
import { categoriesState } from "../recoil/categories";
import Link from "../components/Link";
import { Button } from "@progress/kendo-react-buttons";
import { Input } from "@progress/kendo-react-inputs";
import Timer from "react-compound-timer";
import { gameLetterState } from "../recoil/letter";
import { convertedMaxTimeState } from "../recoil/maxTime";

export default function Game() {
  const gameCategories = useRecoilValue(categoriesState);
  const gameLetter = useRecoilValue(gameLetterState);
  const convertedMaxTime = useRecoilValue(convertedMaxTimeState);

  function handleEndGame(remainingTime) {
    console.log("remaining time: ", remainingTime);
  }

  return (
    <Container>
      <div>
        <Timer
          initialTime={convertedMaxTime}
          direction="backward"
          formatValue={(value) => `${value < 10 ? `0${value}` : value}`}
          checkpoints={[
            {
              time: 0,
              callback: () => handleEndGame(0),
            },
          ]}
        >
          {({ getTime, stop }) => (
            <>
              <div>
                <Timer.Minutes />:
                <Timer.Seconds />
              </div>
              {gameCategories.map((category) => (
                <p key={category}>
                  <Input defaultValue={gameLetter} label={category} />
                </p>
              ))}
              <Link to="/">
                <Button type="button">Return home</Button>
              </Link>
              <Button
                type="button"
                primary
                onClick={() => {
                  stop();
                  handleEndGame(getTime());
                }}
              >
                Finished !
              </Button>
            </>
          )}
        </Timer>
      </div>
    </Container>
  );
}
