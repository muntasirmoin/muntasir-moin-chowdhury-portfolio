import { HouseIcon, InboxIcon, AtSignIcon } from "lucide-react";
// import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const navigationLinks = [
  { href: "#", label: "Home", icon: HouseIcon, active: true },
  { href: "#projects", label: "Project's", icon: InboxIcon },
  { href: "#contacts", label: "Contact Me", icon: AtSignIcon },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm shadow-sm  bg-slate-900/80 px-4 md:px-6">
      <div className="flex h-16 items-center justify-between gap-4 max-w-7xl mx-auto">
        {/* Left: Mobile Menu + Logo */}
        <div className="flex flex-1 items-center gap-4">
          {/* Mobile menu button */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden bg-white  hover:bg-gray-100"
                aria-label="Toggle Menu"
              >
                <svg
                  width={24}
                  height={24}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-48 p-2 md:hidden bg-slate-800 rounded-md shadow-lg">
              <nav className="flex flex-col gap-2">
                {navigationLinks.map((link, i) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={i}
                      href={link.href}
                      aria-current={link.active ? "page" : undefined}
                      className={`
                        relative flex items-center gap-2 py-2 px-3 rounded-md
                        text-white font-medium
                        before:absolute before:-bottom-1 before:left-0 before:h-[2px] before:w-full
                        before:bg-white before:origin-left before:scale-x-0 before:transition-transform before:duration-300 before:ease-in-out
                        hover:before:scale-x-100
                       
                        focus:outline-none focus:ring-2 focus:ring-white
                      `}
                    >
                      <Icon
                        size={18}
                        className="text-white/80"
                        aria-hidden="true"
                      />
                      <span>{link.label}</span>
                    </a>
                  );
                })}
              </nav>
            </PopoverContent>
          </Popover>

          {/* Logo */}
          <a
            href="/"
            className="text-primary hover:text-primary/90"
            // target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://res.cloudinary.com/dta2gcxsl/image/upload/v1756668189/namelogo-Photoroom_uhrowv.png"
              alt="Logo"
              className="h-8 w-auto" // adjust size as needed
            />
          </a>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex flex-1 justify-center gap-6">
          {navigationLinks.map((link, i) => {
            const Icon = link.icon;
            return (
              <a
                key={i}
                href={link.href}
                aria-current={link.active ? "page" : undefined}
                className={`
                  relative flex items-center gap-2 py-2 px-3 rounded-md
                  text-white font-medium
                  before:absolute before:-bottom-1 before:left-0 before:h-[2px] before:w-full
                  before:bg-white before:origin-left before:scale-x-0 before:transition-transform before:duration-300 before:ease-in-out
                  hover:before:scale-x-100
                 
                  focus:outline-none focus:ring-2 focus:ring-white
                  transition-colors
                `}
              >
                <Icon size={18} className="text-white/80" aria-hidden="true" />
                <span>{link.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Right side - placeholder for future items */}
        <div className="flex flex-1 justify-end"></div>
      </div>
    </header>
  );
}
