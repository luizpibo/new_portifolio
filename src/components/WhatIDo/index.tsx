'use client'

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import Image from "next/image";


export interface IProps extends React.HTMLProps<HTMLDivElement> {
  props: { title: string, imageUrl: string }[]
}
const content = [
  {
    title: "Arquitetura de Software",
    description: "Experiência em projetar arquiteturas SaaS Multi-Tenant, Orientada a Eventos e baseada em Microserviços. Aplicação de Domain-Driven Design (DDD), Clean Architecture e princípios SOLID para criar sistemas robustos, escaláveis e manuteníveis.",
    img: "",
  },
  {
    title: "Liderança Tecnológica",
    description: "Como Cofundador da Interage.ai, lidero decisões tecnológicas end-to-end, desde a escolha do stack até a implementação. Experiência em transformar visões de negócio em produtos de tecnologia escaláveis e inteligentes.",
    img: "",
  },
  {
    title: "Sistemas em Tempo Real",
    description: "Desenvolvimento de sistemas de comunicação de alta performance com WebSockets nativos, projetados para baixa latência e alta concorrência. Experiência em construir soluções que suportam múltiplos usuários simultâneos e volume crescente de eventos em tempo real.",
    img: "",
  },
  {
    title: "Engenharia de Dados & IA",
    description: "Experiência prática como Engenheiro de Dados no AI.Labs (UnB), desenvolvendo pipelines ETL, engenharia de features e infraestrutura de dados para projetos de Machine Learning e Inteligência Artificial.",
    img: "",
  },
  {
    title: "Desenvolvimento Full Stack",
    description: "Domínio completo do ciclo de desenvolvimento, desde front-end (Next.js, React) até back-end (Node.js, TypeScript, Python). Experiência com bancos de dados (PostgreSQL, Redis), ORMs (Drizzle) e otimização de performance.",
    img: "",
  },
  {
    title: "DevOps & Infraestrutura",
    description: "Conhecimento em conteinerização (Docker), administração de servidores Linux, cloud computing (AWS, Supabase) e implementação de pipelines CI/CD. Foco em criar infraestrutura escalável e resiliente.",
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