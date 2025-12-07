'use client'

export default function Skills() {
  const skillCategories = [
    {
      title: "Arquitetura & Design",
      icon: "🏗️",
      color: "from-cyan-500 to-blue-600",
      skills: [
        "Domain-Driven Design (DDD)",
        "Clean Architecture",
        "SaaS Multi-Tenant",
        "Event-Driven Architecture",
        "Design Patterns (GoF)",
        "Microserviços",
        "SOLID Principles",
        "Padrões de Escalabilidade",
        "Padrões de Resiliência",
        "API Design"
      ]
    },
    {
      title: "Backend & APIs",
      icon: "⚙️",
      color: "from-emerald-500 to-teal-600",
      skills: [
        "Node.js",
        "Bun Runtime",
        "TypeScript",
        "Python",
        "PHP",
        "WebSockets Nativos",
        "RESTful APIs",
        "Server-Sent Events (SSE)",
        "JWT",
        "OAuth",
        "API Keys",
        "Rate Limiting"
      ]
    },
    {
      title: "Frontend & UI",
      icon: "🎨",
      color: "from-purple-500 to-pink-600",
      skills: [
        "Next.js",
        "React",
        "Server-Side Rendering (SSR)",
        "Static Site Generation (SSG)",
        "Tailwind CSS",
        "Progressive Web Apps (PWA)",
        "Responsive Design",
        "HTML5 Semântico",
        "CSS3 (Flexbox/Grid)",
        "Acessibilidade (A11y)",
        "SEO Técnico",
        "Otimização de Imagens"
      ]
    },
    {
      title: "Dados & IA",
      icon: "🤖",
      color: "from-orange-500 to-red-600",
      skills: [
        "PostgreSQL",
        "SQL Server",
        "Redis",
        "Drizzle ORM",
        "Pipelines ETL",
        "Scikit-Learn",
        "Machine Learning",
        "Feature Engineering",
        "Processamento de Linguagem Natural (PLN)",
        "Modelagem de Dados (MER)",
        "Normalização",
        "Indexing",
        "Query Optimization"
      ]
    },
    {
      title: "DevOps & Infraestrutura",
      icon: "🚀",
      color: "from-blue-500 to-indigo-600",
      skills: [
        "Docker",
        "Docker Compose",
        "Linux (Debian/Ubuntu)",
        "AWS",
        "Supabase",
        "CI/CD Pipelines",
        "Nginx",
        "Shell Scripting",
        "Administração de Servidores",
        "Monitoramento",
        "Performance Tuning"
      ]
    },
    {
      title: "Ferramentas & Automação",
      icon: "🔧",
      color: "from-pink-500 to-rose-600",
      skills: [
        "Git & GitHub",
        "n8n Workflows",
        "SQL (DQL/DML/DDL/DCL/DTL)",
        "Jest Testing",
        "Agile/Scrum",
        "Componentização",
        "Gerenciamento de Estado",
        "Cache Strategies",
        "Debugging & Profiling"
      ]
    },
  ];

  return (
    <section id="habilidades" className="py-20 px-4 bg-gradient-to-b from-slate-900/30 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent mb-4">
            Habilidades Técnicas
          </h2>
          <p className="text-gray-400 text-lg">Tecnologias e competências que utilizo no dia a dia</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="group bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-slate-600 transition-all duration-500 hover:shadow-2xl hover:shadow-slate-500/10 hover:-translate-y-1"
            >
              {/* Header da categoria */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`text-4xl`}>
                  {category.icon}
                </div>
                <div>
                  <div className={`w-16 h-1 bg-gradient-to-r ${category.color} rounded-full mb-2`}></div>
                  <h3 className="text-xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>
              </div>

              {/* Lista de skills como tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className={`
                      px-3 py-1.5 text-sm font-medium rounded-lg
                      bg-slate-700/50 text-gray-300
                      border border-slate-600/50
                      hover:bg-slate-700 hover:text-white
                      transition-all duration-300 cursor-default
                      hover:scale-105
                    `}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Estatísticas adicionais */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-slate-800/30 rounded-2xl border border-slate-700/50 hover:border-slate-600 transition-all hover:scale-105">
            <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
              6+
            </div>
            <div className="text-gray-400 text-sm">Anos de Experiência</div>
          </div>
          <div className="text-center p-6 bg-slate-800/30 rounded-2xl border border-slate-700/50 hover:border-slate-600 transition-all hover:scale-105">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">
              30+
            </div>
            <div className="text-gray-400 text-sm">Tecnologias</div>
          </div>
          <div className="text-center p-6 bg-slate-800/30 rounded-2xl border border-slate-700/50 hover:border-slate-600 transition-all hover:scale-105">
            <div className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent mb-2">
              3
            </div>
            <div className="text-gray-400 text-sm">Empresas</div>
          </div>
          <div className="text-center p-6 bg-slate-800/30 rounded-2xl border border-slate-700/50 hover:border-slate-600 transition-all hover:scale-105">
            <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-2">
              1
            </div>
            <div className="text-gray-400 text-sm">Startup Fundada</div>
          </div>
        </div>
      </div>
    </section>
  );
}
