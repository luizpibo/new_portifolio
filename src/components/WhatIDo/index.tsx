'use client'

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import Image from "next/image";


export interface IProps extends React.HTMLProps<HTMLDivElement>{
  props: {title: string, imageUrl: string}[]
}

const WhatIDo:React.FC<IProps> = ({props}) => {
  return (
    <div id="servicos" className="bg-black py-8 rounded-xl mx-8 mt-16 grid items-center justify-center shadow-lg shadow-black overflow-hidden relative">
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
        {props.map((card) => {
          return (
            <SplideSlide key={card.title} style={{width: "fit-content"}}>
              <div className="py-10 px-6 bg-zinc-900 rounded-lg h-60">
                <Image src={card.imageUrl} alt={card.title+" Icon"} className="h-16 mx-auto" height={50} width={50}/>
                <h3 className="text-3xl mt-4 text-center">{card.title}</h3>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
      <div className="absolute right-0 bg-gradient-to-l from-black flex h-full w-1/12 z-20"/>
    </div>
  );
}

export default WhatIDo