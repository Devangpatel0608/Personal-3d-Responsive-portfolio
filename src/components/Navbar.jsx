import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram, faGithub, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { close, menu } from "../assets";
import { navLinks } from "../data";

const Navbar = () => {
  const [active, setActive] = useState("hero");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("div[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <nav className={`w-full flex items-center ${scrolled ? "bg-gradient-to-b from-black" : ""} p-8 sm:px-16 sm:py-10 fixed z-40`}>
      <div className="w-full flex justify-between items-start mx-auto">
        <Link
          to="/"
          className="flex flex-col items-center"
          onClick={() => {
            setActive("hero");
            window.scrollTo(0, 0);
          }}
        >
          <p className="text-white text-[26px] lg:text-[36px] font-bold cursor-pointer flex">DP</p>
          {/* Social icons for PC view */}
          <div className="hidden sm:flex flex-col items-center mt-10 space-y-10">
            <a
              href="https://www.linkedin.com/in/devang-patel-463a20257"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => window.open("https://www.linkedin.com/in/devang-patel-463a20257")}
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-white text-[30px] lg:text-[40px]" />
            </a>
            <a
              href="https://www.instagram.com/_devang06__/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => window.open("https://www.instagram.com/_devang06__/")}
            >
              <FontAwesomeIcon icon={faInstagram} className="text-white text-[30px] lg:text-[40px]" />
            </a>
            <a
              href="https://github.com/Devangpatel0608"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => window.open("https://github.com/Devangpatel0608")}
            >
              <FontAwesomeIcon icon={faGithub} className="text-white text-[30px] lg:text-[40px]" />
            </a>
            <a
              href="mailto:your-22amtics469@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => window.open("mailto:your-22amtics469@gmail.com")}
            >
              <FontAwesomeIcon icon={faEnvelope} className="text-white text-[30px] lg:text-[40px]" />
            </a>
            <a
              href="https://discord.gg/PZQkzWpc7G"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => window.open("https://discord.gg/PZQkzWpc7G")}
            >
              <FontAwesomeIcon icon={faDiscord} className="text-white text-[30px] lg:text-[40px]" />
            </a>
          </div>
        </Link>

        {/* Social icons for mobile view */}
        <div className="flex sm:hidden w-full justify-center mt-1 space-x-5 transform -translate-x-1">
          <a
            href="https://www.linkedin.com/in/devang-patel-463a20257"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => window.open("https://www.linkedin.com/in/devang-patel-463a20257")}
          >
            <FontAwesomeIcon icon={faLinkedin} className="text-white text-[28px]" />
          </a>
          <a
            href="https://www.instagram.com/_devang06__/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => window.open("https://www.instagram.com/_devang06__/")}
          >
            <FontAwesomeIcon icon={faInstagram} className="text-white text-[28px]" />
          </a>
          <a
            href="https://github.com/Devangpatel0608"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => window.open("https://github.com/Devangpatel0608")}
          >
            <FontAwesomeIcon icon={faGithub} className="text-white text-[28px]" />
          </a>
          <a
            href="mailto:your-22amtics469@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => window.open("mailto:your-22amtics469@gmail.com")}
          >
            <FontAwesomeIcon icon={faEnvelope} className="text-white text-[28px]" />
          </a>
          <a
            href="https://discord.gg/PZQkzWpc7G"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => window.open("https://discord.gg/PZQkzWpc7G")}
          >
            <FontAwesomeIcon icon={faDiscord} className="text-white text-[28px]" />
          </a>
        </div>

        <ul className="list-none hidden sm:flex flex-col gap-5">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`relative flex items-center ${
                active === nav.id ? "text-white" : "text-slate-500"
              } hover:text-white text-[18px] lg:text-[24px] font-bold cursor-pointer`}
              onClick={() => setActive(nav.id)}
            >
              {active === nav.id && (
                <div className="fixed right-10 w-2 h-6 lg:h-8 bg-quaternary"></div>
              )}
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-30 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.id ? "text-quaternary" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.id);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
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
