import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Button } from "@progress/kendo-react-buttons";
import Timer from "react-compound-timer";
import Link from "../components/Link";
import { maxTimeState } from "../recoil/maxTime";
import { remainingTimeState } from "../recoil/remainingTime";

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
          <div>
            <Timer.Minutes />:
            <Timer.Seconds />
          </div>
          <Link to="/">
            <Button type="button">Return home</Button>
          </Link>
          <Button
            type="button"
            primary
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
