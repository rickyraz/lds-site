import Header from "@/components/main/Header";
import { type ReactNode } from "react";
import Footer from "./main/Footer";

function Layout({ children }: { children: ReactNode }) {
	return (
		<div>
			<Header />
			{children}
			<Footer />
		</div>
	);
}

export default Layout;
