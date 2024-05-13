import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { initializeIcons } from "@fluentui/react";
import { NavigationProvider } from "./context/NavigationContext";
initializeIcons();
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <NavigationProvider>
      <App />
    </NavigationProvider>
  </React.StrictMode>
);
