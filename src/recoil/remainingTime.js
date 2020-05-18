import { atom, selector } from "recoil";
import { maxTimeState } from "./maxTime";

export const remainingTimeState = atom({
  key: "remainingTimeState",
  default: 0,
});

/* 
  Need to wait this pull request to use timeStatsState
  https://github.com/facebookexperimental/Recoil/pull/69
*/

export const timeStatsState = selector({
  key: "timeStatsState",
  get: ({ get }) => {
    let remainingTime = get(remainingTimeState) / 60000;
    const maxTime = get(maxTimeState);
    const usedTime = maxTime === 0 ? 0 : (maxTime - remainingTime) / maxTime;
    remainingTime = maxTime === 0 ? 0 : remainingTime / maxTime;
    return [
      { kind: "Remaining time", share: remainingTime },
      { kind: "Used time", share: usedTime },
    ];
  },
});
