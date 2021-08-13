import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { AppComponent, AppContainer } from "./components/app/App.component";

ReactDOM.render(
  <AppContainer>
    <AppComponent />
  </AppContainer>,
  document.getElementById("root")
);
