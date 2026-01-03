import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import Parent from "./components/parent";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Parent></Parent>
  </StrictMode>
);
