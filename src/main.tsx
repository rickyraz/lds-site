import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import QueryRouterApp from "./core/route/QueryRouterApp";
import "./index.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const rootElement = document.getElementById("root");

// // Render our app!
// const rootElement = document?.getElementById("root");
// if (rootElement?.innerHTML) {
//   const root = ReactDOM.createRoot(rootElement);
//   root.render(
//     <StrictMode>
//       <QueryRouterApp />
//     </StrictMode>
//   );
// }

if (rootElement) {
  // Periksa apakah rootElement ada sebelum mengaksesnya
  if (!rootElement.innerHTML) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(<QueryRouterApp />);
  }
}
