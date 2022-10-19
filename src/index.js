import React from "react";
import ReactDOM from "react-dom/client";
import AllRoutes from "./routes";
import { GlobalStyles } from "./styles/globalStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <AllRoutes />
  </React.StrictMode>
);
