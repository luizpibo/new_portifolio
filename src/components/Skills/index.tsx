'use client'

export default function Skills() {
  const skillCategories = [
    {
      title: "Back-end",
      skills: ["Node.js", "Bun", "TypeScript", "Python", "REST APIs", "WebSockets", "SSE", "JWT", "OAuth"],
    },
    {
      title: "Front-end",
      skills: ["React", "Next.js", "React Native", "Tailwind CSS", "SSR/SSG", "HTML5", "CSS3"],
    },
    {
      title: "Banco de Dados",
      skills: ["PostgreSQL", "Redis", "SQL Server", "Drizzle ORM", "Modelagem relacional"],
    },
    {
      title: "Infraestrutura",
      skills: ["Docker", "Linux", "Nginx", "AWS", "Supabase", "CI/CD", "Git"],
    },
    {
      title: "Dados e IA",
      skills: ["Python", "Pandas", "Scikit-Learn", "ETL", "NLP", "LLMs (OpenAI, Anthropic)"],
    },
    {
      title: "Arquitetura",
      skills: ["DDD", "Clean Architecture", "Multi-Tenant", "Event-Driven", "SOLID"],
    },
  ];

  return (
    <section id="habilidades" className="py-24 px-4 bg-neutral-900/30">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold text-white mb-12">
          Habilidades
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {skillCategories.map((category, idx) => (
            <div key={idx}>
              <h3 className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-3">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="px-2.5 py-1 text-sm text-neutral-400 bg-neutral-900 border border-neutral-800 rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
