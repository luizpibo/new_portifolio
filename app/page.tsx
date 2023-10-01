import HeroSection from '../src/components/HeroSection'
import Header from '../src/components/Header'
import WhatIDo from '../src/components/WhatIDo'
import Projects from '../src/components/Projects'
import Contact from '../src/components/Contact'
import Link from 'next/link'
import Image from 'next/image'
import Background from '../src/components/Background-lottie'

export default function Home() {
  const headerProps = [
    { title: "Início", url: "#inicio" },
    { title: "Serviços", url: "#servicos" },
    { title: "Projetos", url: "#projetos" },
  ];
  const cardsContent = [
    {
      title: "Desenvolvedor React",
      imageUrl: "/reactjs-icon.svg",
    },
    {
      title: "Desenvolvedor Node",
      imageUrl: "/nodejs-icon.svg",
    },
    {
      title: "Desenvolvedor Spring boot",
      imageUrl: "/spring-icon.svg",
    },
    {
      title: "Desenvolvedor Front-end",
      imageUrl: "/front-icon.svg",
    },
    {
      title: "Desenvolvedor Back-end",
      imageUrl: "/back-icon.svg",
    },
    {
      title: "UX | IU Designer",
      imageUrl: "/ux-icon.svg",
    },
  ];
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
    <div className="w-full bg-slate-900 text-gray-300 overflow-hidden relative">
      <Background />
      <Header navbarItens={headerProps} />
      <div className='flex flex-col gap-8 max-w-6xl mx-auto overflow-hidden relative'>
        <HeroSection />
        <section className='flex flex-col justify-center items-center gap-6 z-10 max-w-4xl mx-auto'>
          <p className="pl-4 text-xl text-center md:text-1xl indent-4 p-8 rounded-lg backdrop-blur">
            Durante minha jornada acadêmica, adquiri habilidades relacionadas a todos os ciclos de desenvolvimento de software e os pilares da ciência da computação, incluindo: algoritmos de
            programação, arquitetura de software, design patterns, bancos de dados, engenharia de software, álgebra linear entre outros conhecimentos. <br /><br />
            Durante os últimos três anos busco aprofundar meus conhecimentos em desenvolvimento web, durante essa jornada estudei algumas das principais ferramentas utilizadas pelo mercado e a base para a criação
            de aplicações escaláveis.<br /><br />
            Atualmente sou aluno pesquisador trabalhando no módulo de jurisprudência do Software Sabiá (TST),projeto mantido pelo TST, CNJ e AI.Lab.
          </p>
          <ul className="flex gap-8 my-5">
            {socialMidiaButtons.map((socialMidia) => {
              return (
                <li
                  key={socialMidia.link}
                >
                  <Link href={socialMidia.link}>
                    <Image
                      src={socialMidia.icon}
                      className='hover:scale-110 transition-all'
                      alt="social midia icon"
                      height={50}
                      width={50}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
        <WhatIDo props={cardsContent} />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}
