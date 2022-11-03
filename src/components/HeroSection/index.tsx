import Image from "next/image";
import React from "react";

export default function HeroSection() {
  const socialMidiaButtons = [{}, {}, {}];
  return (
    <section className="min-h-screen w-full lg:flex gap-5 items-center justify-center py-10">
      <div className="flex-1 mt-6">
        <div
          className="flex items-center justify-center m-auto relative p-4 rotate-45 rounded-tr-3xl rounded-bl-3xl bg-green-500 overflow-hidden w-96 h-96 shadow-zinc-700 shadow-2xl"
          style={{
            borderTopRightRadius: "5rem",
            borderBottomLeftRadius: "5rem",
          }}
        >
          <Image
            className="m-auto -rotate-45"
            src="/profile_picture.jpeg"
            layout="fill"
            alt="Foto do luiz"
          />
        </div>
      </div>
      <div className="flex-1 flex-col flex mt-16 lg:mt-0 mx-10 p-4 gap-3 backdrop: backdrop-blur z-10 bg-opacity-25 bg-gray-500 rounded-lg">
        <h1 className="text-3xl mb-2">
          Olá,{" "}
          <div className="text-green-500 inline">
            eu sou o <b className="text-5xl font-bold">Luiz Fernando</b>
          </div>{" "}
        </h1>
        <h2 className="text-4xl">Full stack developer</h2>
        <p className="text-1xl indent-4">
          Possuo quase 4 anos de estudos relacionados a desenvolvimento de
          software, adquirir esses conhecimentos com a ajuda de livros, cursos e
          faculdade. Estou prestes a me formar em bacharelado em ciência da
          computação. Busco uma evolução contínua pessoal e aperfeiçoar minhas
          habilidades em desenvolvimento web full-stack. minha stack é React
          para o front-end e node para o back-end. Agora estou estudando
          back-end usando spring boot, UX e microsserviços.
        </p>
        <a href="#contato" className="py-4 px-6 transition bg-green-500 rounded-md w-fit self-center mt-6 hover:shadow-zinc-700 hover:shadow-md hover:scale-105 font-semibold">
          Entre em contato
        </a>
        <div className="flex min-h-5"></div>
      </div>
    </section>
  );
}
