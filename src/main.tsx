import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import QueryRouterApp from "./core/route/QueryRouterApp";
import "./index.css";

// Render our app!
const rootElement = document?.getElementById("root");
if (rootElement?.innerHTML) {
	const root = ReactDOM.createRoot(rootElement);
	root.render(
		<StrictMode>
			<QueryRouterApp />
		</StrictMode>,
	);
}
