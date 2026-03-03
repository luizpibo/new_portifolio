'use client'

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center">
      <div className="max-w-3xl mx-auto w-full px-4 pt-24 pb-16">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Foto */}
          <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-neutral-800">
            <Image
              src="/profile_picture.jpg"
              width={128}
              height={128}
              className="object-cover w-full h-full"
              alt="Luiz Fernando"
              priority
            />
          </div>

          {/* Nome e título */}
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm text-neutral-500">Disponível para novos projetos</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">
              Luiz Fernando
            </h1>

            <div className="h-8">
              <TypeAnimation
                sequence={[
                  "Engenheiro de Software",
                  2000,
                  "Full Stack Developer",
                  2000,
                  "Python & TypeScript",
                  2000,
                ]}
                wrapper="p"
                cursor={true}
                repeat={Infinity}
                className="text-lg text-neutral-400"
              />
            </div>
          </div>

          {/* Descrição */}
          <p className="text-neutral-500 max-w-lg leading-relaxed">
            Construo aplicações web e mobile com foco em qualidade, performance e simplicidade.
            TypeScript, Python, Node.js, React e PostgreSQL.
          </p>

          {/* Botões */}
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="/Luiz-Fernando-de-Lima-e-Silva.pdf"
              download="Luiz-Fernando-de-Lima-e-Silva.pdf"
              className="px-5 py-2.5 bg-white text-neutral-900 text-sm font-medium rounded-lg hover:bg-neutral-200 transition-colors"
            >
              Baixar currículo
            </a>
            <a
              href="#contato"
              className="px-5 py-2.5 border border-neutral-700 text-neutral-300 text-sm font-medium rounded-lg hover:border-neutral-500 hover:text-white transition-colors"
            >
              Entre em contato
            </a>
          </div>

          {/* Links sociais */}
          <div className="flex gap-3">
            <a
              href="https://www.linkedin.com/in/luizpibo-fernando"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center border border-neutral-800 rounded-lg text-neutral-500 hover:text-white hover:border-neutral-600 transition-colors"
            >
              <Image src="/linkedin-icon.svg" alt="LinkedIn" width={18} height={18} />
            </a>
            <a
              href="https://www.github.com/luizpibo"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center border border-neutral-800 rounded-lg text-neutral-500 hover:text-white hover:border-neutral-600 transition-colors"
            >
              <Image src="/github-icon.svg" alt="GitHub" width={18} height={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
