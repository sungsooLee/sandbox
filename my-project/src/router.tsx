import { createBrowserRouter } from "react-router-dom";
import App from "./App";

const pages = import.meta.glob("./pub/pages/**/*.tsx", {
  eager: true,
}) as Record<string, { default: React.ComponentType }>;

const pubRoutes = Object.entries(pages).map(([path, module]) => ({
  path:
    "/pub" +
    path
      .replace("./pub/pages", "")
      .replace(".tsx", "")
      .replace(/\/index$/i, "")
      .toLowerCase(),
  Component: module.default,
}));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  ...pubRoutes,
]);
