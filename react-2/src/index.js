import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import App1 from "./App1";
import Useeffec from "./useeffec";
import Show from "./show";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    {/* <App /> */}
    {/* <App1 /> */}
    {/* <Useeffec /> */}
    <Show />
  </StrictMode>,
  rootElement
);
