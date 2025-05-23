import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../src/shared/styles/index.css";
import App from "./app/App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
