import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import React from "react";

export default function WhatIDo() {
  const cardsContent = [
    {
      title: "Desenvolvedor React",
      text: "alguma coisa que eu vou ter que escrever",
      imageUrl: "/reactjs-icon.svg",
    },
    {
      title: "Desenvolvedor Node",
      text: "alguma coisa que eu vou ter que escrever",
      imageUrl: "/nodejs-icon.svg",
    },
    {
      title: "Desenvolvedor Spring boot",
      text: "alguma coisa que eu vou ter que escrever",
      imageUrl: "/spring-icon.svg",
    },
    {
      title: "Desenvolvedor Front-end",
      text: "alguma coisa que eu vou ter que escrever",
      imageUrl: "/front-icon.svg",
    },
    {
      title: "Desenvolvedor Back-end",
      text: "alguma coisa que eu vou ter que escrever",
      imageUrl: "/back-icon.svg",
    },
    {
      title: "UX | IU Designer",
      text: "alguma coisa que eu vou ter que escrever",
      imageUrl: "/ux-icon.svg",
    },
  ];
  return (
    <section id="servicos" className="bg-black py-8 rounded-xl mx-8 grid items-center justify-center shadow-lg shadow-black overflow-hidden relative">
      <h2 className="text-4xl text-center font-bold text-green-500 mb-6 scroll-pt-4">
        O que eu faço?
      </h2>
      <div className="absolute bg-gradient-to-r from-black flex h-full w-1/12 z-20"/>
      <Splide
        options={{
          type: "loop",
          gap: "1.5rem",
          drag: "free",
          arrows: false,
          pagination: false,
          autoWidth: true,
          focus: "center",
          perPage: 3,
          autoScroll: {
            pauseOnFocus: false,
            pauseOnHover: false,
            rewind: false,
            speed: 2,
          },
          autoHeight: true
        }}
        extensions={{ AutoScroll }}
      >
        {cardsContent.map((card) => {
          return (
            <SplideSlide key={card.title} style={{width: "fit-content"}}>
              <div className="py-10 px-6 bg-zinc-900 rounded-lg h-60">
                <img src={card.imageUrl} alt={card.title+" Icon"} className="h-16 mx-auto"/>
                <h3 className="text-3xl mt-4 text-center">{card.title}</h3>
                <p>{card.text}</p>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
      <div className="absolute right-0 bg-gradient-to-l from-black flex h-full w-1/12 z-20"/>
    </section>
  );
}
