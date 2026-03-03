import HeroSection from '../src/components/HeroSection'
import Header from '../src/components/Header'
import Experience from '../src/components/Experience'
import Skills from '../src/components/Skills'
import Education from '../src/components/Education'
import Contact from '../src/components/Contact'

export default function Home() {
  const headerProps = [
    { title: "Início", url: "#inicio" },
    { title: "Sobre", url: "#sobre" },
    { title: "Experiência", url: "#experiencia" },
    { title: "Habilidades", url: "#habilidades" },
    { title: "Formação", url: "#formacao" },
    { title: "Contato", url: "#contato" },
  ];

  return (
    <div className="w-full min-h-screen bg-neutral-950 text-neutral-300 overflow-x-hidden">
      <Header navbarItens={headerProps} />

      <main>
        <HeroSection />

        {/* Sobre Mim */}
        <section id="sobre" className="py-24 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold text-white mb-8">
              Sobre mim
            </h2>
            <div className="space-y-5 text-neutral-400 leading-relaxed">
              <p>
                Engenheiro de Software com 3+ anos de experiência construindo aplicações web e mobile.
                Formado em Ciência da Computação pela Universidade Católica de Brasília.
              </p>
              <p>
                Cofundei a <span className="text-neutral-200">Interage.ai</span>, onde arquitetei e
                desenvolvi do zero uma plataforma SaaS multi-tenant de automação para WhatsApp —
                back-end, front-end, mobile e infraestrutura.
              </p>
              <p>
                Antes disso, trabalhei como Engenheiro de Dados no <span className="text-neutral-200">AI.Labs da UnB</span>,
                processando milhares de documentos jurídicos do TST com pipelines ETL e técnicas de NLP.
              </p>
            </div>
          </div>
        </section>

        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
    </div>
  )
}
