import HeroSection from '../src/components/HeroSection'
import Header from '../src/components/Header'
import WhatIDo from '../src/components/WhatIDo'
import Projects from '../src/components/Projects'
import Contact from '../src/components/Contact'

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

  return (
    <div className="min-h-full min-w-full bg-zinc-900 text-gray-200">
      <div className='container mx-auto'>
        <Header navbarItens={headerProps} />
        <HeroSection />
        <WhatIDo props={cardsContent} />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}
