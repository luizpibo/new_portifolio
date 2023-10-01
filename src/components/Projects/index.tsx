'use client'

import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";

export default function Projects() {
  const projectsContent = [
    { urlImage: "/busca_clima.png", title: "Buscar clima", description: "Projeto criado para consumir a API de previsão climática e consultar o clima de algum lugar.", link: "https://github.com/luizpibo/busca_clima/" },
    { urlImage: "/GoChamp.png", title: "GoChamp", description: "Projeto desenvolvido para a matéria de programação para web.", link: "https://github.com/luizpibo/GoChamp" },
    { urlImage: "/grid.png", title: "Grid", description: "Projeto feito no curso da Alura sobre display grid.", link: "https://github.com/luizpibo/display_grid" },
    { urlImage: "/upixels.png", title: "Upixels", description: "Plataforma criada para consultar pixels de granadas do CS:GO (Fiz a home page e estamos planejando atualizar a plataforma).", link: "https://upixels.com.br/" },
  ];
  return (
    <section id="projetos" className="py-6 text-center bg-zinc-900 bg-opacity-50 rounded-lg">
      <h2 className="text-4xl my-6 scroll-pt-4">
        <b className="text-green-500">Projetos</b> Recentes
      </h2>
      <div className="grid grid-cols-1 p-4 gap-8">
        {projectsContent.map((project, idx) => {
          return (
            <div key={project.title} className="grid grid-cols-2 bg-slate-700 bg-opacity-50 rounded-lg">
              <div className="p-4">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <div className="p-4">
                <Image src={project.urlImage} width={800} height={600} alt={project.title} className="rounded-lg" />
              </div>
            </div>
          )
        })}
      </div>

    </section>
  );
}
