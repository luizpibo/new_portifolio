'use client'

import React, { useEffect, useState } from "react";

export interface IProps extends React.HTMLProps<HTMLHeadingElement>{
  navbarItens: {title: string, url: string}[]
}

const Header:React.FC<IProps> = ({navbarItens}) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        setScrolled(window.pageYOffset > 50);

        const sections = navbarItens.map(item => item.url.replace('#', ''));
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
              setActiveSection(section);
              break;
            }
          }
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [navbarItens]);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled
        ? "py-3 bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800/50"
        : "py-4 bg-transparent"
    }`}>
      <nav className="max-w-3xl mx-auto px-4">
        <ul className="flex gap-1 justify-center items-center flex-wrap">
          {navbarItens.map((item) => {
            const isActive = activeSection === item.url.replace('#', '');
            return (
              <li key={item.title}>
                <a
                  href={item.url}
                  className={`
                    px-3 py-1.5 rounded-md text-sm transition-colors duration-200
                    ${isActive
                      ? "text-white bg-neutral-800"
                      : "text-neutral-500 hover:text-neutral-300"
                    }
                  `}
                >
                  {item.title}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  );
}

export default Header
