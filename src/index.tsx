import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import { AppComponent, AppContainer } from "./components/app/App.component";

ReactDOM.render(
  <AppContainer>
    <AppComponent />
  </AppContainer>,
  document.getElementById("root")
);
