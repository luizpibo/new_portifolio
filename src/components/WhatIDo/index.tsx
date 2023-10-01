'use client'

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import Image from "next/image";


export interface IProps extends React.HTMLProps<HTMLDivElement> {
  props: { title: string, imageUrl: string }[]
}
const content = [
  {
    title: "Desenvolvimento Full Stack",
    description: "Sou um desenvolvedor full stack apaixonado por transformar ideias criativas em soluções digitais inovadoras. Tenho conhecimento abrangente em todas as fases do desenvolvimento, desde o design de interfaces até a implementação de funcionalidades complexas no back-end.",
    img: "",
  },
  {
    title: "Especialista em React",
    description: "Tenho expertise significativa em React, uma das tecnologias mais poderosas para criar interfaces de usuário dinâmicas e responsivas. Minha habilidade em React me permite criar experiências de usuário fluidas e interativas.",
    img: "",
  },
  {
    title: "Estágio em Inteligência Artificial",
    description: "Atualmente, estou estagiando em um laboratório de inteligência artificial na Universidade de Brasília (UnB), onde estou imerso no mundo fascinante da IA. Estou trabalhando em projetos inovadores que exploram algoritmos de aprendizado de máquina e visão computacional para resolver problemas do mundo real.",
    img: "",
  },
  {
    title: "Resolução Criativa de Problemas",
    description: "Minha abordagem para o desenvolvimento é centrada em encontrar soluções criativas e eficientes para desafios complexos. Estou constantemente buscando maneiras inovadoras de abordar problemas técnicos, garantindo que meus projetos se destaquem.",
    img: "",
  },
  {
    title: "Paixão por Aprender",
    description: "Estou sempre ávido por aprender novas tecnologias e aprimorar minhas habilidades. O campo da tecnologia está em constante evolução, e estou dedicado a me manter atualizado para oferecer as melhores soluções aos meus clientes e colaboradores.",
    img: "",
  },
  {
    title: "Colaboração e Comunicação",
    description: "Acredito na importância da colaboração e comunicação eficaz em equipes de desenvolvimento. Trabalhar em projetos multidisciplinares e comunicar ideias de forma clara são habilidades que valorizo e pratico em todos os meus projetos.",
    img: "",
  },
]
const WhatIDo: React.FC<IProps> = ({ props }) => {
  return (
    <div id="servicos" className="flex flex-col bg-zinc-900 bg-opacity-50 w-full rounded-xl my-8 p-6 items-center justify-center shadow-lg">
      <h2 className="text-4xl text-center font-bold text-green-500 mb-8 scroll-pt-6">
        Qualidades
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 gap-4">
        {content.map((content, idx) => {
          return (
            <div key={content.title} className="bg-slate-800 bg-opacity-50 p-4 flex flex-col rounded-lg text-center justify-center hover:shadow-lg hover:shadow-slate-700 transition duration-500">
              <div>
                <h3 className="text-2xl font-bold">{content.title}</h3>
                <p className="my-4 font-thin">{content.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default WhatIDo