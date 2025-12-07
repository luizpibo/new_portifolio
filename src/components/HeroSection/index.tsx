'use client'

import Image from "next/image";
import Tilt from "react-tilt";
import { TypeAnimation } from "react-type-animation";

export default function HeroSection() {
  return (
    <section id="inicio" className="relative z-10 min-h-screen flex items-center">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-12 pt-20 lg:py-24 px-4">
        {/* Coluna de texto */}
        <div className="flex flex-col gap-8 z-10">
          {/* Badge de status */}
          <div className="flex items-center gap-2 w-fit">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
            </span>
            <span className="text-sm text-gray-400 font-mono">Disponível para novos projetos</span>
          </div>

          {/* Saudação */}
          <div className="space-y-4">
            <h1 className="text-xl md:text-2xl text-gray-400 font-light">
              Olá, eu sou o
            </h1>
            <div className="space-y-2">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight">
                Luiz Fernando
              </h2>
              <div className="h-20 md:h-16">
                <TypeAnimation
                  sequence={[
                    "Arquiteto de Software",
                    1500,
                    "Cofundador & Tech Lead",
                    1500,
                    "Engenheiro Full Stack",
                    1500,
                  ]}
                  wrapper="h3"
                  cursor={true}
                  repeat={Infinity}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
                />
              </div>
            </div>
          </div>

          {/* Descrição curta */}
          <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
            Transformando visões de negócio em produtos de tecnologia{" "}
            <span className="text-cyan-400 font-semibold">robustos, escaláveis e inteligentes</span>.
            Especialista em arquitetura de sistemas distribuídos e desenvolvimento full-stack.
          </p>

          {/* Botões de ação */}
          <div className="flex flex-wrap gap-4">
            <a
              href="/Luiz-Fernando-de-Lima-e-Silva.pdf"
              download="Luiz-Fernando-de-Lima-e-Silva.pdf"
              className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 flex items-center gap-3 shadow-lg hover:shadow-cyan-500/50"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:animate-bounce" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Baixar Currículo
            </a>

            <a
              href="#contato"
              className="group bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 hover:border-cyan-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 flex items-center gap-3"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Entre em Contato
            </a>
          </div>

          {/* Links sociais */}
          <div className="flex gap-4 pt-4">
            <a
              href="https://www.linkedin.com/in/luizpibo-fernando"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-12 h-12 flex items-center justify-center bg-slate-800/50 hover:bg-cyan-500/10 border border-slate-700 hover:border-cyan-500 rounded-xl transition-all duration-300 hover:scale-110"
            >
              <Image src="/linkedin-icon.svg" alt="LinkedIn" width={24} height={24} className="group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://www.github.com/luizpibo"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-12 h-12 flex items-center justify-center bg-slate-800/50 hover:bg-cyan-500/10 border border-slate-700 hover:border-cyan-500 rounded-xl transition-all duration-300 hover:scale-110"
            >
              <Image src="/github-icon.svg" alt="GitHub" width={24} height={24} className="group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        {/* Coluna da imagem */}
        <div className="relative w-full h-full z-10 flex items-center justify-center">
          <Tilt className="Tilt w-full max-w-md" options={{ max: 25, scale: 1.05 }}>
            <div className="relative w-full aspect-square">
              {/* Borda animada */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>

              {/* Container da imagem */}
              <div className="relative w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 p-2 rounded-3xl border border-slate-700">
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src="/profile_picture.jpg"
                    fill
                    className="object-cover"
                    alt="Foto do Luiz Fernando"
                    priority
                  />
                  {/* Overlay gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                </div>
              </div>

              {/* Elementos decorativos */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl blur-2xl opacity-50"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl blur-2xl opacity-50"></div>
            </div>
          </Tilt>
        </div>
      </div>
    </section>
  );
}
