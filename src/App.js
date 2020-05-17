import React from "react";
import "@progress/kendo-theme-default/dist/all.css";
import { RecoilRoot } from "recoil";
import AppRouter from "./router";

function App() {
  return (
    <RecoilRoot>
      <AppRouter />
    </RecoilRoot>
  );
}

export default App;
