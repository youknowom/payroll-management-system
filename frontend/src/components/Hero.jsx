import React, { useState } from "react";
import { Menu, X } from "lucide-react";

import logo from "../assets/logo.png";

const navLink = [
  { name: "Home", link: "#" },
  { name: "Features", link: "#" },
  { name: "Pricing", link: "#" },
  { name: "Contact", link: "#" },
];

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <a href="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="payroll-logo"
            className="h-6 w-auto object-contain"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-black">
          {navLink.map((link) => (
            <a
              key={link.name}
              href={link.link}
              className="hover:text-blue-600 transition"
            >
              {link.name}
            </a>
          ))}
          <button className="ml-4 rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition cursor-pointer">
            Login
          </button>
        </nav>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          {isOpen ? (
            <X
              onClick={() => setIsOpen(false)}
              className="w-6 h-6 cursor-pointer text-black"
            />
          ) : (
            <Menu
              onClick={() => setIsOpen(true)}
              className="w-6 h-6 cursor-pointer text-black"
            />
          )}
        </div>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 shadow-md space-y-2">
          {navLink.map((link) => (
            <a
              key={link.name}
              href={link.link}
              className="block py-2 text-sm font-medium hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => setIsOpen(false)}
            className="block w-full rounded-md bg-blue-600 px-4 py-2 text-center text-white hover:bg-blue-700"
          >
            Login
          </button>
        </div>
      )}
    </header>
  );
};

export default Hero;
