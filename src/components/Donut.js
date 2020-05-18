import React from "react";
import {
  Chart,
  ChartLegend,
  ChartSeries,
  ChartTooltip,
  ChartSeriesItem,
  ChartSeriesLabels,
} from "@progress/kendo-react-charts";

const labelContent = (e) => e.category;

const renderTooltip = (context) => {
  const { value } = context.point || context;
  return <div>{Math.round(value * 100)}%</div>;
};

export default function Donut({ data }) {
  return (
    <Chart>
      <ChartSeries>
        <ChartSeriesItem
          type="donut"
          data={data}
          categoryField="kind"
          field="share"
        >
          <ChartTooltip render={renderTooltip} />
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
