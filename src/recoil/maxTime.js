import { atom, selector } from "recoil";

export const maxTimeState = atom({
  key: "maxTimeState",
  default: 3,
});

export const convertedMaxTimeState = selector({
  key: "convertedMaxTimeState",
  get: ({ get }) => {
    const maxTime = get(maxTimeState);
    return maxTime * 60000;
  },
});
