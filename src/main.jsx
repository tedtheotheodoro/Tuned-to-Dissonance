import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import TunedToDissonance from "./TunedToDissonance";
import act1Stages from "./components/data/act1Stages.js";
console.log("TESTE: act1Stages carregado ✅", act1Stages);


ReactDOM.createRoot(document.getElementById("root")).render(
    <TunedToDissonance />
  );