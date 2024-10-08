import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import Logo from "../assets/logo.png";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import { navLinks } from "../constants";
import { animateScroll as scroll } from "react-scroll"; // Import animateScroll from react-scroll
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} fixed w-full flex items-center py-5 top-0 left-0 z-20 bg-[#1f1f1f] bg-opacity-90`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            scroll.scrollToTop(); // Scroll to top when clicking on the logo
          }}
        >
          <img src={Logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-[#f2004a] text-[20px] font-bold cursor-pointer">
            Ali Rehman
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`text-[#f2004a] text-[20px] font-medium cursor-pointer`}
              onClick={() => {
                setActive(nav.title);
                const element = document.getElementById(nav.id);
                if (element) {
                  const yOffset = -80; // Adjust this value as needed to offset for fixed header height
                  const y =
                    element.getBoundingClientRect().top +
                    window.pageYOffset +
                    yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
              }}
            >
              {nav.title}
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          {toggle ? (
            <X color="#f2004a" onClick={() => setToggle(!toggle)} />
          ) : (
            <Menu color="#f2004a" onClick={() => setToggle(!toggle)} />
          )}

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-[#f2004a] absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex flex-col gap-4 justify-end items-start">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`text-[#1f1f1f] font-poppins text-[16px] font-medium cursor-pointer`}
                  onClick={() => {
                    setActive(nav.title);
                    setToggle(!toggle);
                    const element = document.getElementById(nav.id);
                    if (element) {
                      const y =
                        element.getBoundingClientRect().top +
                        window.pageYOffset;
                      window.scrollTo({ top: y, behavior: "smooth" });
                    }
                  }}
                >
                  {nav.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
