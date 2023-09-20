'use client'

import React, { useEffect, useState } from "react";

export interface IProps extends React.HTMLProps<HTMLHeadingElement>{
  navbarItens: {title: string, url: string}[]
}

const Header:React.FC<IProps> = ({navbarItens}) => {
  const [small, setSmall] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 300)
      );
    }
  }, []);

  return (
    <header className={`fixed w-full backdrop backdrop-blur-lg z-30 transition-all duration-500 overflow-x-scroll md:overflow-x-hidden ${
      small ? "py-4 bg-black bg-opacity-30" : "py-6"
    }`}>
      <nav>
        <ul className="flex gap-6 text-2xl justify-center lg:justify-end px-8 my-auto items-center">
         {navbarItens.map((item)=>{
            return (
                <li className="hover:text-green-300 transition" key={item.title}><a href={item.url}>{item.title}</a></li>
            )
         })}
        </ul>
      </nav>
    </header>
  );
}

export default Header