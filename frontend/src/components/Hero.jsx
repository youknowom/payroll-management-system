import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
//Brand Logos
import bighost from "../assets/brand_one.png";
import zepto from "../assets/brand_two.png";
import meesho from "../assets/brand_three.png";
import zomato from "../assets/brand_four.png";

const navLink = [
  { name: "Home", link: "#" },
  { name: "Features", link: "#" },
  { name: "Pricing", link: "#" },
  { name: "Contact", link: "#" },
];
const features = [
  {
    title: "Attendance Tracking",
    desc: "Track employee check-in/out time, leaves, and presence in real-time.",
    icon: "📅",
  },
  {
    title: "Employee Management",
    desc: "Add, manage, and organize employee details with ease.",
    icon: "👨‍💼",
  },
  {
    title: "Salary Payouts",
    desc: "Generate and manage automated salary slips and payments.",
    icon: "💰",
  },
];
const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
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

      {/* Landing section */}
      <div>
        <section className="w-full bg-gradient-to-br from-blue-50 via-white to-blue-100 py-24 px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
              Payroll Management Made Easy
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              All-in-one solution to manage attendance, employees, and salary
              payouts for your organization.
            </p>
          </div>
        </section>
        {/* Feature section*/}
        <section className="py-20 px-4 bg-amber-100">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Key Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <section className="w-full py-16 bg-white text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Loved by India's famous startups and world renowned brands
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-8 px-4">
          {/* BigHost */}
          <a
            href="https://www.bighostindia.in/"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit BigHost"
            className="transform transition duration-300 grayscale hover:grayscale-0 hover:scale-105 active:scale-95"
          >
            <img
              src="/logos/brand_one.png"
              alt="Zepto Logo"
              className="w-32 h-auto max-h-20 object-contain"
            />
          </a>

          {/* Zepto */}
          <a
            href="https://www.zepto.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit Zepto"
            className="transform transition duration-300 grayscale hover:grayscale-0 hover:scale-105 active:scale-95"
          >
            <img
              src="/logos/brand_two.png
              "
              alt="Blinkit Logo"
              className="w-32 h-auto max-h-20 object-contain"
            />
          </a>

          {/* Meesho */}
          <a
            href="https://www.meesho.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit Meesho"
            className="transform transition duration-300 grayscale hover:grayscale-0 hover:scale-105 active:scale-95"
          >
            <img
              src="/logos/brand_three.png"
              alt="Meesho Logo"
              className="w-32 h-auto max-h-20 object-contain"
            />
          </a>

          {/* Zomato */}
          <a
            href="https://www.zomato.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit Zomato"
            className="transform transition duration-300 grayscale hover:grayscale-0 hover:scale-105 active:scale-95"
          >
            <img
              src="/logos/brand_four.png"
              alt="Meesho Logo"
              className="w-32 h-auto max-h-20 object-contain"
            />
          </a>
        </div>
      </section>
    </>
  );
};
export default Hero;
