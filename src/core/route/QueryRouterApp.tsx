import { routeClient } from "@/core/route/routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "@tanstack/react-router";

const queryClient = new QueryClient();

function QueryRouterApp() {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={routeClient} />
				<ReactQueryDevtools initialIsOpen position="right" />
			</QueryClientProvider>
		</>
	);
}

export default QueryRouterApp;
