import React from "react";
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartTitle,
  ChartLegend,
} from "@progress/kendo-react-charts";

export default function ColumnChart({ data, categories }) {
  return (
    <Chart style={{ height: 350 }}>
      <ChartTitle text="Score details" />
      <ChartLegend position="top" orientation="horizontal" />
      <ChartCategoryAxis>
        <ChartCategoryAxisItem categories={categories} startAngle={45} />
      </ChartCategoryAxis>
      <ChartSeries>
        {data.map((item, idx) => (
          <ChartSeriesItem
            key={idx}
            type="column"
            tooltip={{ visible: true }}
            data={item.data}
            name={item.name}
          />
        ))}
      </ChartSeries>
    </Chart>
  );
}
