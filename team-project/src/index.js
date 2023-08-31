import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ReactModal from "react-modal"; // Import react-modal for setting app element
import { AuthProvider } from "./Context/AuthProvider";

ReactModal.setAppElement("#root"); // Set app element for react-modal

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);

reportWebVitals(console.log); // Log performance data to the console
