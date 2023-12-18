import { Link } from "@tanstack/react-router";
import LogoWide from "./logo/logo-wide.png";
import Logo from "./logo/logo.png";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { X } from "lucide-react";
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import SmoothScroll from "@/lib/smooth-scroll";

const sidebarVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
  closed: {
    x: "-100%",
    opacity: 0,
    transition: { type: "spring", stiffness: 100 },
  },
};

function Header() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  return (
    <header className="text-sm py-8 bg-[#FEFEFE] mx-5 md:mx-0">
      <div className="flex justify-between max-w-5xl mx-auto items-center">
        <div className="flex">
          <Link to="/" className="hidden md:block mr-8">
            <img src={LogoWide} alt="logo" className="max-w-[185px]" />
          </Link>
          <Link to="/" className="md:hidden mr-8">
            <img src={Logo} alt="logo" className="max-w-[75px]" />
          </Link>

          <ul className="hidden md:flex  ">
            <SmoothScroll>
              <a data-scroll-to="areaLayanan">Area Layanan</a>
              <a data-scroll-to="paketProduk">Paket Produk</a>
              <a data-scroll-to="tentangKami">Tentang Kami</a>
              <a data-scroll-to="faq">FAQ</a>
            </SmoothScroll>
          </ul>
        </div>
        <div className="hidden md:flex md:space-x-6">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="flex items-center space-x-1 bg-[#F5F8FA]"
              >
                <span className="text-[#1070C8]">Masuk</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4 text-[#1070C8]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuGroup>
                <Link to="/masuk">
                  <DropdownMenuItem>
                    <span>Client Area</span>
                  </DropdownMenuItem>
                </Link>
                <a href="http://lds.zenradius.id" target="_blank">
                  <DropdownMenuItem>
                    <span>Admin</span>
                  </DropdownMenuItem>
                </a>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link to="/order">
            <Button
              variant="outline"
              className="flex items-center text-white transition-all duration-300 hover:text-white bg-[#0B9DEF] hover:bg-[hsl(207,91%,49%)]"
            >
              Daftar Sekarang
            </Button>
          </Link>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden" onClick={() => toggleOpen()}>
          <Button variant={"ghost"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 stroke-cyan-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </Button>
        </div>
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.aside
                className="fixed inset-0 z-[9998] bg-white max-h-screen p-8"
                initial="closed"
                animate="open"
                exit="closed"
                variants={sidebarVariants}
              >
                <div className="flex flex-col justify-between h-[85vh]">
                  <div>
                    <Link to="/">
                      <img src={Logo} alt="logo" className="max-w-[80px]" />
                    </Link>
                    <nav className="mt-16">
                      <ul>
                        <SmoothScroll>
                          <a data-scroll-to="areaLayanan">Area Layanan</a>
                          <a data-scroll-to="paketProduk">Paket Produk</a>
                          <a data-scroll-to="tentangKami">Tentang Kami</a>
                          <a data-scroll-to="faq">FAQ</a>
                        </SmoothScroll>
                      </ul>
                    </nav>
                  </div>
                  <div>
                    <Button
                      variant="outline"
                      className="flex items-center space-x-1 bg-[#F5F8FA] w-full py-6"
                    >
                      <span className="text-[#1070C8]">Masuk</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-4 h-4 text-[#1070C8]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </Button>
                    <Link to="/order">
                      <Button
                        variant="outline"
                        className="flex w-full items-center py-6 text-white transition-all duration-300 hover:text-white bg-[#0B9DEF] hover:bg-[hsl(207,91%,49%)] mt-3"
                      >
                        <span>Daftar Sekarang</span>
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.aside>
              <motion.div
                className="fixed top-0 right-0 z-[9999] p-8 "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => toggleOpen()}
              >
                <X className="stroke-2 stroke-gold_accent cursor-pointer text-cyan-700 w-[34px] h-[34px]" />
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

export default Header;
