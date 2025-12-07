'use client'

export default function Experience() {
  const experiences = [
    {
      role: "Cofundador & Arquiteto de Soluções",
      company: "Interage.ai",
      period: "Jun 2024 - Presente",
      location: "Brasília, Brasil",
      description: "Como sócio-fundador, arquitetei e construí a plataforma SaaS da empresa do zero, uma solução de automação e comunicação multiagente que hoje processa dezenas de interações diárias, integrando CRM ao WhatsApp.",
      highlights: [
        {
          title: "Arquitetura de Plataforma SaaS Multi-Tenant",
          description: "Desenvolvi uma arquitetura de software escalável utilizando princípios de Domain-Driven Design (DDD), garantindo isolamento de dados e recursos para múltiplos clientes B2B simultaneamente."
        },
        {
          title: "Engenharia de Sistemas em Tempo Real",
          description: "Implementei sistema de comunicação de alta performance com WebSockets nativos, projetado para baixa latência (<100ms) e alta concorrência, suportando múltiplos atendentes e volume crescente de eventos em tempo real."
        },
        {
          title: "Liderança Tecnológica End-to-End",
          description: "Como único responsável por decisões tecnológicas, defini o stack completo (Node.js, Bun, Drizzle ORM, PostgreSQL, Python), projetei APIs, configurei infraestrutura em nuvem, desenvolvi front-end e aplicativo mobile."
        },
        {
          title: "Otimização e Escalabilidade",
          description: "Implementei estratégias avançadas de cache (navegador e mensageria com Redis), otimizei queries com indexação e refatorei componentes críticos, reduzindo tempo de resposta em 60%."
        },
        {
          title: "Automação de Processos",
          description: "Orquestrei fluxos de automação complexos com n8n, integrando múltiplos sistemas e APIs, automatizando processos de negócio e reduzindo trabalho manual em 70%."
        }
      ],
      technologies: ["Node.js", "Bun", "TypeScript", "PostgreSQL", "Drizzle ORM", "Redis", "WebSockets", "n8n", "Next.js", "Docker", "Python"],
      color: "from-cyan-500 to-blue-600"
    },
    {
      role: "Engenheiro de Dados",
      company: "AI.Labs - Universidade de Brasília (UnB)",
      period: "Dez 2022 - Dez 2023",
      location: "Brasília, Brasil",
      description: "Atuação em ambiente de pesquisa e desenvolvimento de ponta, colaborando em projetos de Inteligência Artificial e Machine Learning para soluções jurídicas (Software Sabiá - TST).",
      highlights: [
        {
          title: "Desenvolvimento de Pipelines de Dados (ETL)",
          description: "Criei e otimizei pipelines de dados para coletar, processar e estruturar grandes volumes de dados não-estruturados de documentos jurídicos, preparando-os para modelos de Machine Learning."
        },
        {
          title: "Engenharia de Features",
          description: "Trabalhei diretamente com pesquisadores e cientistas de dados para identificar e construir features relevantes a partir de dados brutos, melhorando a performance dos modelos preditivos em 25%."
        },
        {
          title: "Infraestrutura de Dados",
          description: "Contribuí para a construção e manutenção da infraestrutura de dados do laboratório, garantindo disponibilidade 99.9% e eficiência no acesso aos datasets para projetos de pesquisa."
        },
        {
          title: "Processamento de Linguagem Natural (NLP)",
          description: "Aplicei técnicas de PLN para extração de informações de textos jurídicos, utilizando bibliotecas como Scikit-Learn e desenvolvendo scripts Python para análise de jurisprudência."
        }
      ],
      technologies: ["Python", "Scikit-Learn", "Pandas", "SQL", "ETL", "Machine Learning", "NLP", "Data Engineering"],
      color: "from-purple-500 to-pink-600"
    },
    {
      role: "Desenvolvedor Full Stack",
      company: "CélereCréd",
      period: "Mai 2023 - Jul 2023",
      location: "Brasília, Brasil",
      description: "Contratado em estágio inicial da fintech para materializar a visão de negócio dos fundadores em uma plataforma tecnológica funcional e escalável.",
      highlights: [
        {
          title: "Arquitetura de Negócio e Produto",
          description: "Colaborei diretamente com a liderança para desenhar a arquitetura de negócio e os fluxos de trabalho operacionais, traduzindo requisitos estratégicos em diagramas de processo e especificações técnicas."
        },
        {
          title: "Design da Jornada do Cliente",
          description: "Projetei e implementei a jornada completa de onboarding do cliente, desde prospecção até efetivação do empréstimo, otimizando UX e reduzindo tempo de processo em 40%."
        },
        {
          title: "Implementação do MVP",
          description: "Liderei a implementação técnica do produto mínimo viável (MVP) da plataforma, entregando solução end-to-end em 2 meses que permitiu à empresa validar modelo de negócio e captar primeiros clientes."
        },
        {
          title: "Stack Completo",
          description: "Desenvolvi backend com Node.js/TypeScript, frontend com React, integrei APIs de análise de crédito e implementei sistema de autenticação seguro com JWT."
        }
      ],
      technologies: ["Node.js", "TypeScript", "React", "PostgreSQL", "JWT", "REST APIs", "Git"],
      color: "from-emerald-500 to-teal-600"
    },
    {
      role: "Auxiliar Administrativo",
      company: "TECNO2000",
      period: "Jul 2019 - Jul 2022",
      location: "Brasília, Brasil",
      description: "Responsável por criar documentações para licitações, auxiliar nas tarefas do escritório e realizar manutenção de computadores e redes.",
      highlights: [
        {
          title: "Documentação de Licitações",
          description: "Criei e organizei documentações técnicas e administrativas para processos licitatórios, garantindo conformidade com normas e prazos."
        },
        {
          title: "Suporte Técnico",
          description: "Realizei manutenção preventiva e corretiva de computadores, configuração de redes e suporte técnico aos usuários, resolvendo 95% dos chamados no mesmo dia."
        }
      ],
      technologies: ["Windows", "Redes", "Hardware", "Office"],
      color: "from-gray-500 to-slate-600"
    },
  ];

  return (
    <section id="experiencia" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
            Experiência Profissional
          </h2>
          <p className="text-gray-400 text-lg">Minha jornada profissional e principais realizações</p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              {/* Badge colorido */}
              <div className={`absolute -top-3 -left-3 w-6 h-6 bg-gradient-to-br ${exp.color} rounded-full blur-sm group-hover:blur-md transition-all`}></div>
              <div className={`absolute -top-2 -left-2 w-4 h-4 bg-gradient-to-br ${exp.color} rounded-full`}></div>

              <div className="flex flex-col gap-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {exp.role}
                    </h3>
                    <p className={`text-xl font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent mb-2`}>
                      {exp.company}
                    </p>
                    <p className="text-gray-400 text-sm flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {exp.location}
                    </p>
                  </div>
                  <span className="text-gray-400 font-mono text-sm bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700/50 whitespace-nowrap h-fit">
                    {exp.period}
                  </span>
                </div>

                {/* Descrição */}
                <p className="text-gray-300 leading-relaxed">
                  {exp.description}
                </p>

                {/* Highlights detalhados */}
                <div className="space-y-4">
                  {exp.highlights.map((highlight, idx) => (
                    <div key={idx} className="group/item bg-slate-800/30 rounded-xl p-4 border border-slate-700/30 hover:border-slate-600/50 transition-all">
                      <div className="flex items-start gap-3">
                        <div className={`mt-1 w-2 h-2 rounded-full bg-gradient-to-r ${exp.color} group-hover/item:scale-150 transition-transform flex-shrink-0`}></div>
                        <div className="flex-1">
                          <h4 className="text-white font-semibold mb-1 group-hover/item:text-cyan-400 transition-colors">
                            {highlight.title}
                          </h4>
                          <p className="text-gray-400 text-sm leading-relaxed">
                            {highlight.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tecnologias utilizadas */}
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-3 font-semibold">Tecnologias Utilizadas</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${exp.color} bg-opacity-10 text-gray-300 border border-slate-600/50`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
