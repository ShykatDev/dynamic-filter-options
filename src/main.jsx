import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import FilterOptionsProvider from "./providers/FilterOptionsProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FilterOptionsProvider>
      <App />
    </FilterOptionsProvider>
  </React.StrictMode>
);
