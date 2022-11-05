import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import React from "react";

export default function Projects() {
  const projectsContent = [
    { urlImage: "/busca_clima.png", title: "Buscar clima", description: "Projeto criado para consumir a API de previsão climática e consultar o clima de algum lugar.", link: "https://github.com/luizpibo/busca_clima/" },
    { urlImage: "/GoChamp.png", title: "GoChamp", description: "Projeto desenvolvido para a matéria de programação para web.", link: "https://github.com/luizpibo/GoChamp" },
    { urlImage: "/grid.png", title: "grid", description: "Projeto feito no curso da Alura sobre display grid.", link: "https://github.com/luizpibo/display_grid" },
    { urlImage: "/upixels.png", title: "titulo", description: "Plataforma criada para consultar pixels de granadas do CS:GO (Fiz a home page e estamos planejando atualizar a plataforma).", link: "https://upixels.com.br/" },
  ];
  return (
    <section id="projetos" className="py-6 text-center">
      <h2 className="text-4xl my-6 scroll-pt-4">
        <b className="text-green-500">Projetos</b> Recentes
      </h2>
      <p className="text-2xl">Alguns projetos que eu desenvolvi</p>
      <Splide
        options={{
          perPage: 3,
          autoplay: true,
          interval: 2000,
          rewind: true,
          autoHeight: true,
          gap: "1rem",
          lazyLoad: "nearby",
          padding: {
            left: "1rem",
            right: "1rem"
          },
          breakpoints: {
            640: {
              perPage: 2,
            },
            400: {
              perPage: 1
            }
          }
        }}
      >
        {projectsContent.map((project, index) => {
          return (
            <SplideSlide key={project.title+" "+index} className="py-8">
              <div className="bg-zinc-600 rounded-lg my-8 flex flex-col h-full justify-between">
                <Image
                  src={project.urlImage}
                  height={300}
                  width={500}
                  alt={`Project ${project.title}`}
                  className="rounded-lg mx-auto"
                />
                <h3 className="text-2xl my-2">{project.title}</h3>
                <p className="px-4 indent-4 text-lg">{project.description}</p>
                <a className="py-6 px-6 my-4 mx-4 bg-slate-900 rounded-lg text-2xl" href={project.urlImage}>
                  Ver no github
                </a>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </section>
  );
}
