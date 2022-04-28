import React from "react";
import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container);

import "./src/styles/index.scss";

import App from "./src/App";

root.render(<App />);
