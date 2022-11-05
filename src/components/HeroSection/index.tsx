import Image from "next/image";
import React from "react";
import spinningAnimation from "./spinningAnimation.json";
import Lottie from "lottie-react-web";
import Tilt from "react-tilt";
import { TypeAnimation } from "react-type-animation";

export default function HeroSection() {
  const socialMidiaButtons = [
    {
      icon: "/linkedin-icon.svg",
      link: "https://www.linkedin.com/in/luizpibo-fernando",
    },
    {
      icon: "/github-icon.svg",
      link: "https://www.github.com/luizpibo",
    },
  ];
  return (
    <section id="inicio" className="min-h-screen w-full lg:flex gap-5 items-center justify-center py-8 lg:py-24 overflow-hidden bg-zinc-900">
      <div className="flex-1 flex justify-center items-center mt-28 lg:mt-6 relative">
        <Tilt className="Tilt z-10" options={{ max: 25 }}>
          <div
            className="flex items-center justify-center m-auto relative p-4 rotate-45 bg-green-500 overflow-hidden w-72 h-72 lg:w-96 lg:h-96 shadow-zinc-700 shadow-2xl"
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
        </Tilt>
        <div className="absolute scale-150 z-0">
          <Lottie
            options={{
              animationData: spinningAnimation,
            }}
          />
        </div>
      </div>
      <div className="flex flex-col flex-1 gap-8">
        <div className="flex-col flex mt-16 lg:mt-0 mx-4 lg:mx-10 p-4 gap-3 backdrop:backdrop-blur z-10 bg-opacity-25 bg-gray-500 rounded-lg shadow-lg">
          <h1 className="text-3xl mb-2">
            Olá,{" "}
            <div className="text-green-500 inline">
              eu sou o <b className="text-3xl md:text-4xl xl:text-5xl font-bold">Luiz Fernando</b>
            </div>{" "}
          </h1>

          <TypeAnimation
            sequence={[
              "Desenvolvedor Front-end", // Types 'One'
              1500, // Waits 1s
              "Desenvolvedor Back-end", // Deletes 'One' and types 'Two'
              1500, // Waits 2s
              "Desenvolvedor UX", // Types 'Three' without deleting 'Two'
              1500,
            ]}
            wrapper="h2"
            cursor={true}
            repeat={Infinity}
            className="text-2xl md:text-3xl lg:text-4xl xl:text-4xl"
          />
          <p className="text-1xl indent-4">
            Possuo quase 4 anos de estudos relacionados a desenvolvimento de
            software, obtive esses conhecimentos com a ajuda de livros, cursos e
            faculdade. Estou prestes a me formar em bacharelado em ciência da
            computação. Busco uma evolução contínua pessoal e aperfeiçoar minhas
            habilidades em desenvolvimento web full-stack. minha stack é React
            para o front-end e node para o back-end. Agora estou estudando
            back-end usando spring boot, UX e microsserviços.
          </p>
          <a
            href="#contato"
            className="py-4 px-6 transition bg-green-500 rounded-md w-fit self-center mt-6 hover:shadow-zinc-700 hover:shadow-md hover:scale-105 font-semibold"
          >
            Entre em contato
          </a>
          <div className="flex min-h-5"></div>
        </div>
        <ul className="flex gap-8 self-center">
          {socialMidiaButtons.map((socialMidia) => {
            return (
              <li
                key={socialMidia.link}
                className="hover:scale-110 transition-all"
              >
                <a href={socialMidia.link}>
                  <img
                    src={socialMidia.icon}
                    alt="social midia icon"
                    height={50}
                    width={50}
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
