import React from "react";
import { useRecoilValue } from "recoil";
import { timeStatsState } from "../recoil/remainingTime";
import Donut from "./Donut";

export default function TimeStats() {
  const timeStatsData = useRecoilValue(timeStatsState);
  return <Donut data={timeStatsData} title="Time stats :" />;
}
