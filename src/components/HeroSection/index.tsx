'use client'

import Image from "next/image";
import Tilt from "react-tilt";
import { TypeAnimation } from "react-type-animation";

export default function HeroSection() {
  return (
    <section id="inicio" className="z-10">
      <div className="max-w-6xl grid grid-cols-1 lg:grid-rows-1 lg:grid-cols-2 items-center justify-center gap-4 pt-20 lg:py-24">
        <div className="flex-col flex pt-3 md:pt-6 lg:p-10 gap-6 z-10 w-full max-w-4xl rounded-2xl">
          <h1 className="text-2xl lg:text-3xl xl:text-4xl text-center font-bold">
            Olá,{" "}eu sou o
            <div className="text-green-400 inline">
              <br /><b className="text-3xl lg:text-4xl xl:text-5xl font-bold">Luiz Fernando</b>
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
              className="text-2xl lg:text-3xl xl:text-4xl text-center"
            />
          </div>
        </div>
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
      </div>
    </section>
  );
}
