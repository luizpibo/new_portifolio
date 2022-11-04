import React, { useEffect, useState } from "react";

export default function Header() {
  const navbarItens = [
    { title: "Início", url: "#inicio" },
    { title: "Serviços", url: "#servicos" },
    { title: "Trabalhos", url: "#trabalhos" },
    { title: "Contato", url: "#contato" },
  ];
  const [small, setSmall] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 300)
      );
    }
  }, []);

  return (
    <header className={`fixed w-full backdrop backdrop-blur-md z-30 transition-all duration-500 ${
      small ? "py-4 bg-black bg-opacity-30" : "py-6"
    }`}>
      <nav>
        <ul className="flex gap-6 text-2xl justify-end px-8 my-auto items-center">
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
