import React from "react";
import { useRecoilValue } from "recoil";
import { remainingTimeState } from "../recoil/remainingTime";
import { maxTimeState } from "../recoil/maxTime";
import Donut from "./Donut";

function getTimeStats(maxTime, remainingTime) {
  const usedTime = maxTime === 0 ? 0 : (maxTime - remainingTime) / maxTime;
  remainingTime = maxTime === 0 ? 0 : remainingTime / maxTime;
  return [
    { kind: "Remaining time", share: remainingTime },
    { kind: "Used time", share: usedTime },
  ];
}

export default function TimeStats() {
  const remainingTime = useRecoilValue(remainingTimeState) / 60000;
  const maxTime = useRecoilValue(maxTimeState);
  const timeStatsData = getTimeStats(maxTime, remainingTime);
  return <Donut data={timeStatsData} />;
}
