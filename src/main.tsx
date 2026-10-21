import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { detectLang } from "./i18n/detect";
import { initAnalytics } from "./lib/analytics";
import "./index.css";

initAnalytics(detectLang());

createRoot(document.getElementById("root")!).render(<App />);
