import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import General_info from "./components/first_section";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <General_info />
  </StrictMode>
);
