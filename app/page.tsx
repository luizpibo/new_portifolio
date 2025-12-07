import HeroSection from '../src/components/HeroSection'
import Header from '../src/components/Header'
import Experience from '../src/components/Experience'
import Skills from '../src/components/Skills'
import Education from '../src/components/Education'
import Contact from '../src/components/Contact'
import Background from '../src/components/Background-lottie'

export default function Home() {
  const headerProps = [
    { title: "Início", url: "#inicio" },
    { title: "Experiência", url: "#experiencia" },
    { title: "Habilidades", url: "#habilidades" },
    { title: "Formação", url: "#formacao" },
    { title: "Contato", url: "#contato" },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-gray-300 overflow-hidden relative">
      {/* Background animado */}
      <Background />

      {/* Gradientes de fundo decorativos */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Header fixo */}
      <Header navbarItens={headerProps} />

      {/* Conteúdo principal */}
      <main className="relative z-10">
        <HeroSection />

        {/* Seção Sobre - Resumo profissional */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-slate-700/50 shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6 text-center">
                Sobre Mim
              </h2>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  <span className="text-cyan-400 font-semibold">Engenheiro de Software</span> com um perfil único que combina
                  <span className="text-white font-medium"> liderança executiva como Cofundador da Interage.ai</span>, uma startup de IA,
                  profundo conhecimento em <span className="text-white font-medium">arquitetura de sistemas distribuídos</span> e
                  experiência prática como <span className="text-white font-medium">Engenheiro de Dados no AI.Labs (UnB)</span>.
                </p>
                <p>
                  Paixão por transformar visões de negócio em produtos de tecnologia robustos, escaláveis e inteligentes,
                  dominando o ciclo completo de desenvolvimento, desde a concepção e design da arquitetura até a
                  implementação full-stack e a gestão da infraestrutura.
                </p>
                <p>
                  Atualmente, como <span className="text-cyan-400 font-semibold">Cofundador e Arquiteto de Soluções na Interage.ai</span>,
                  arquitetei e construí uma plataforma SaaS multi-tenant que processa dezenas de interações diárias,
                  utilizando tecnologias como <span className="text-white font-medium">Node.js, TypeScript, PostgreSQL e WebSockets</span>.
                </p>
              </div>
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
