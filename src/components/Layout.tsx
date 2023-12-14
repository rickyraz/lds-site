import { type ReactNode } from "react";
import Header from "./Main/Header";
import Footer from "./Main/Footer";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="font-axiforma">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
