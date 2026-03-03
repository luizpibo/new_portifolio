'use client'

export default function Experience() {
  const experiences = [
    {
      role: "Cofundador e Engenheiro de Software",
      company: "Interage.ai",
      period: "Jun 2024 — Presente",
      description: "Plataforma SaaS de automação e CRM multiagente para WhatsApp. Responsável pela arquitetura e desenvolvimento completo do produto.",
      highlights: [
        "Arquitetei sistema multi-tenant com DDD e isolamento de dados por cliente em PostgreSQL",
        "Implementei comunicação em tempo real com WebSockets para múltiplos atendentes simultâneos",
        "Desenvolvi back-end com Node.js/Bun/TypeScript — APIs REST, JWT, rate limiting, cache com Redis",
        "Construí front-end com React/Next.js e app mobile com React Native",
        "Integrei múltiplos modelos de IA (OpenAI, Anthropic) nos fluxos de automação via n8n",
        "Configurei pipeline de CI/CD com Docker e Nginx como reverse proxy",
      ],
      technologies: ["TypeScript", "Node.js", "Bun", "PostgreSQL", "Redis", "Next.js", "React", "React Native", "Docker", "Python", "n8n"],
    },
    {
      role: "Engenheiro de Dados",
      company: "AI.Labs — Universidade de Brasília (UnB)",
      period: "Dez 2022 — Dez 2023",
      description: "Laboratório de pesquisa em IA da UnB. Projetos de processamento de dados aplicados ao domínio jurídico.",
      highlights: [
        "Desenvolvi pipelines ETL em Python para processar milhares de documentos do TST",
        "Realizei engenharia de features com Pandas e Scikit-Learn para modelos preditivos",
        "Apliquei técnicas de NLP para classificação de documentos jurídicos não-estruturados",
        "Automatizei rotinas de coleta e transformação de dados integradas a bancos SQL",
      ],
      technologies: ["Python", "Pandas", "Scikit-Learn", "SQL", "NLP"],
    },
    {
      role: "Desenvolvedor Full Stack",
      company: "CélereCréd",
      period: "Mai 2023 — Jul 2023",
      description: "Fintech em estágio inicial. Construção e validação do MVP.",
      highlights: [
        "Desenvolvi API REST com Node.js/TypeScript e autenticação JWT",
        "Construí front-end da jornada de onboarding com React e TypeScript",
        "Entreguei MVP funcional que viabilizou a validação do modelo de negócio",
      ],
      technologies: ["Node.js", "TypeScript", "React", "PostgreSQL", "JWT"],
    },
  ];

  return (
    <section id="experiencia" className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold text-white mb-12">
          Experiência
        </h2>

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <div key={index} className="group">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
                <div>
                  <h3 className="text-lg font-medium text-white">
                    {exp.role}
                  </h3>
                  <p className="text-neutral-400">
                    {exp.company}
                  </p>
                </div>
                <span className="text-sm text-neutral-600 shrink-0">
                  {exp.period}
                </span>
              </div>

              {/* Descrição */}
              <p className="text-neutral-500 text-sm mb-4">
                {exp.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-2 mb-5">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex gap-3 text-sm text-neutral-400">
                    <span className="text-neutral-600 mt-1.5 shrink-0">-</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {/* Tecnologias */}
              <div className="flex flex-wrap gap-1.5">
                {exp.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-xs text-neutral-500 bg-neutral-900 border border-neutral-800 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Divider */}
              {index < experiences.length - 1 && (
                <div className="mt-16 h-px bg-neutral-900"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
