import { atom, selector } from "recoil";

export const maxTimeState = atom({
  key: "maxTimeState",
  default: 3,
});

/* 
  Need to wait this pull request to use convertedMaxTimeState
  https://github.com/facebookexperimental/Recoil/pull/69
*/

export const convertedMaxTimeState = selector({
  key: "convertedMaxTimeState",
  get: ({ get }) => {
    const maxTime = get(maxTimeState);
    return maxTime * 60000;
  },
});
