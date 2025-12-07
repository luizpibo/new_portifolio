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

        // Detectar seção ativa
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
        ? "py-3 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50 shadow-lg shadow-black/20"
        : "py-5 bg-transparent"
    }`}>
      <nav className="max-w-7xl mx-auto px-4">
        <ul className="flex gap-2 md:gap-4 justify-center items-center flex-wrap">
          {navbarItens.map((item) => {
            const isActive = activeSection === item.url.replace('#', '');
            return (
              <li key={item.title}>
                <a
                  href={item.url}
                  className={`
                    relative px-4 py-2 rounded-lg text-sm md:text-base font-medium transition-all duration-300
                    ${isActive
                      ? "text-cyan-400 bg-cyan-500/10"
                      : "text-gray-400 hover:text-cyan-300 hover:bg-slate-800/50"
                    }
                    group
                  `}
                >
                  {item.title}
                  {/* Underline animado */}
                  <span className={`
                    absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500
                    transform transition-transform duration-300 origin-left
                    ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}
                  `}></span>
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
