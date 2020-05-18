import React from "react";
import {
  Chart,
  ChartLegend,
  ChartSeries,
  ChartSeriesItem,
  ChartSeriesLabels,
} from "@progress/kendo-react-charts";
import { useRecoilValue } from "recoil";
import { remainingTimeState } from "../recoil/remainingTime";
import { maxTimeState } from "../recoil/maxTime";

function getTimeStats(maxTime, remainingTime) {
  const usedTime = maxTime === 0 ? 0 : (maxTime - remainingTime) / maxTime;
  remainingTime = maxTime === 0 ? 0 : remainingTime / maxTime;
  return [
    { kind: "Remaining time", share: remainingTime },
    { kind: "Used time", share: usedTime },
  ];
}

const labelContent = (e) => e.category;

export default function TimeStats() {
  const remainingTime = useRecoilValue(remainingTimeState) / 60000;
  const maxTime = useRecoilValue(maxTimeState);
  const timeStatsData = getTimeStats(maxTime, remainingTime);

  return (
    <Chart>
      <ChartSeries>
        <ChartSeriesItem
          type="donut"
          data={timeStatsData}
          categoryField="kind"
          field="share"
        >
          <ChartSeriesLabels
            color="#fff"
            background="none"
            content={labelContent}
          />
        </ChartSeriesItem>
      </ChartSeries>
      <ChartLegend visible={false} />
    </Chart>
  );
}
