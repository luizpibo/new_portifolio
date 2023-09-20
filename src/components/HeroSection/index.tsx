'use client'

import Image from "next/image";
import Link from "next/link";
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
    <section id="inicio" className="min-h-screen grid grid-cols-1 lg:grid-rows-1 lg:grid-cols-2 items-center justify-center pt-20 pb-10 lg:py-24 relative overflow-hidden">
      <div className="relative w-full h-full z-10">
        <Tilt className="Tilt flex w-full h-full" options={{ max: 25 }}>
          <div
            className="flex items-center justify-center w-80 h-80 m-auto relative"
          >
            <Image
              className="bg-green-500 p-3 bg-opacity-20 h-fit rounded-xl"
              src="/profile_picture.jpeg"
              objectFit="contain"
              fill
              alt="Foto do luiz"
            />
          </div>
        </Tilt>
      </div>
      <div className="flex flex-col gap-8 relative w-full h-full justify-center items-center">
        <div className="flex-col flex lg:mt-0 p-3 md:p-6 py-10 lg:p-10 gap-6 z-10 max-w-4xl rounded-2xl backdrop-blur-md">
          <h1 className="text-4xl lg:text-5xl mb-2 text-center font-bold">
            Olá,{" "}eu sou o
            <div className="text-green-400 inline">
              <br/><b className="text-5xl md:text-6xl font-bold">Luiz Fernando</b>
            </div>{" "}
          </h1>
          <div className="h-16">
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
              className="text-3xl lg:text-3xl xl:text-5xl text-center"
            />
          </div>
          <p className="text-1xl md:text-2xl indent-4">
            Possuo quase 4 anos de estudos relacionados a desenvolvimento de
            software, obtive esses conhecimentos com a ajuda de livros, cursos e
            faculdade. Estou prestes a me formar em bacharelado em ciência da
            computação. Busco uma evolução contínua pessoal e aperfeiçoar minhas
            habilidades em desenvolvimento web full-stack. minha stack é React
            para o front-end e node para o back-end. Agora estou estudando
            back-end usando spring boot, UX e microsserviços.
          </p>
          <Link
            href="#contato"
            className="py-4 px-6 md:text-3xl transition bg-green-700 rounded-md w-fit self-center hover:shadow-zinc-700 hover:shadow-xl hover:scale-105 font-semibold"
          >
            Entre em contato
          </Link>
          <ul className="flex gap-8 self-center">
            {socialMidiaButtons.map((socialMidia) => {
              return (
                <li
                  key={socialMidia.link}
                  className="hover:scale-110 transition-all"
                >
                  <Link href={socialMidia.link}>
                    <Image
                      src={socialMidia.icon}
                      alt="social midia icon"
                      height={50}
                      width={50}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="absolute mx-auto z-0 bg-center top-0 bottom-0 left-0 right-0 scale-100 lg:scale-100 xl:scale-75">
        <Lottie
          options={{
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            },
            animationData: spinningAnimation,
          }}
          height="100%"
          width="100%"
        />
      </div>
    </section>
  );
}
