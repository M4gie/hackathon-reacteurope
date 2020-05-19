import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import Timer from "react-compound-timer";
import Link from "../components/Link";
import Button from "../components/Button";
import { maxTimeState } from "../recoil/maxTime";
import { remainingTimeState } from "../recoil/remainingTime";
import Title from "./Title";

export default function GameTimer({ onTimerEnd }) {
  const maxTime = useRecoilValue(maxTimeState);
  const setRemainingTime = useSetRecoilState(remainingTimeState);

  return (
    <Timer
      initialTime={maxTime * 60000}
      direction="backward"
      formatValue={(value) => `${value < 10 ? `0${value}` : value}`}
      checkpoints={[
        {
          time: 0,
          callback: onTimerEnd,
        },
      ]}
    >
      {({ getTime, stop }) => (
        <>
          <Title>
            <Timer.Minutes />:
            <Timer.Seconds />
          </Title>
          <Link to="/">
            <Button type="button" margin>
              Return home
            </Button>
          </Link>
          <Button
            type="button"
            primary
            margin
            onClick={() => {
              stop();
              setRemainingTime(getTime());
              onTimerEnd();
            }}
          >
            Finished !
          </Button>
        </>
      )}
    </Timer>
  );
}
