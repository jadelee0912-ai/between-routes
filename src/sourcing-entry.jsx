import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import SourcingPage from "./pages/SourcingPage";

// Standalone entry for the French sourcing landing page.
// Served as its own static HTML so link-preview crawlers (WhatsApp, Facebook)
// read the correct OG tags without executing JavaScript.
ReactDOM.createRoot(document.getElementById("sourcing-root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <SourcingPage />
    </HelmetProvider>
  </React.StrictMode>
);
