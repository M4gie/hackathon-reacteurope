import React from "react";
import Container from "../components/Container";
import { useRecoilValue } from "recoil";
import { categoriesState } from "../recoil/categories";
import Link from "../components/Link";
import { Button } from "@progress/kendo-react-buttons";
import { Input } from "@progress/kendo-react-inputs";
import Timer from "react-compound-timer";
import { gameLetterState } from "../recoil/letter";
/* import { convertedMaxTimeState } from "../recoil/maxTime"; */
import { useHistory } from "react-router-dom";

export default function Game() {
  let history = useHistory();
  const gameCategories = useRecoilValue(categoriesState);
  const gameLetter = useRecoilValue(gameLetterState);
  const convertedMaxTime = 5000; /* useRecoilValue(convertedMaxTimeState) */

  function handleEndGame(remainingTime) {
    console.log("remaining time: ", remainingTime);
    history.push("/stats");
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
