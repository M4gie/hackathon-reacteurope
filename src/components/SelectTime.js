import React from "react";
import { Slider, SliderLabel } from "@progress/kendo-react-inputs";
import { useRecoilState } from "recoil";
import { maxTimeState } from "../recoil/maxTime";

export default function SelectTime() {
  const [maxTime, setMaxTime] = useRecoilState(maxTimeState);

  return (
    <Slider
      value={maxTime}
      onChange={({ value }) => setMaxTime(value)}
      min={1}
      max={9}
      step={1}
      defaultValue={3}
    >
      {[1, 3, 5, 7, 9].map((time) => (
        <SliderLabel
          key={time}
          position={time}
          onClick={() => {
            setMaxTime(time);
          }}
        >
          {time} min
        </SliderLabel>
      ))}
    </Slider>
  );
}
