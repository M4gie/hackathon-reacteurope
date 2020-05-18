import React from "react";
import { useRecoilValue } from "recoil";
import Link from "../components/Link";
import { Button } from "@progress/kendo-react-buttons";
import Timer from "react-compound-timer";
import { maxTimeState } from "../recoil/maxTime";

export default function GameTimer({ onTimerEnd }) {
  const maxTime = useRecoilValue(maxTimeState);

  return (
    <Timer
      initialTime={maxTime * 60000}
      direction="backward"
      formatValue={(value) => `${value < 10 ? `0${value}` : value}`}
      checkpoints={[
        {
          time: 0,
          callback: () => onTimerEnd(0),
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
              onTimerEnd(getTime());
            }}
          >
            Finished !
          </Button>
        </>
      )}
    </Timer>
  );
}
