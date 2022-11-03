import React from "react";

export default function Header() {
  const navbarItens = [
    { title: "Início", url: "#inicio" },
    { title: "Serviços", url: "#servicos" },
    { title: "Trabalhos", url: "#trabalhos" },
    { title: "Contato", url: "#contato" },
  ];
  return (
    <header className="fixed w-full backdrop backdrop-blur-md z-30">
      <nav>
        <ul className="flex gap-6 text-2xl justify-end px-8 py-4 my-auto items-center">
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
