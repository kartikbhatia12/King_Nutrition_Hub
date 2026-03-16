import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#location" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#home" className="flex items-center gap-2">
          <span className="font-display text-xl font-bold tracking-wider text-foreground">
            KING <span className="text-gradient">NUTRITION</span> HUB
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 uppercase tracking-wider"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-4">
              {navLinks.map((link) => (
                <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-foreground 
                transition-colors uppercase tracking-wider text-sm"
                onClick={() => {
                    setIsOpen(false);
                    setTimeout(() => {
                        document.querySelector(link.href)?.scrollIntoView({
                            behavior: "smooth",
                        });
                    }, 100);

                }}
                >
                {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/917503723653"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground px-5 py-2 rounded-md text-sm font-semibold text-center"
              >
                Contact Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
