'use client'

export default function Education() {
  const education = [
    {
      degree: "Ciência da Computação",
      institution: "Universidade Católica de Brasília",
      period: "Mar 2018 - Dez 2023",
      location: "Brasília, Brasil",
      icon: "🎓"
    },
    {
      degree: "Técnico Administrativo",
      institution: "ISBET",
      period: "Ago 2019 - Jun 2021",
      location: "Brasília, Brasil",
      icon: "📚"
    },
    {
      degree: "Montagem, Manutenção e Redes",
      institution: "Microlins",
      period: "Jan 2008 - Dez 2008",
      location: "Brasília, Brasil",
      icon: "🔧"
    },
  ];

  return (
    <section id="formacao" className="py-20 px-4 bg-gradient-to-b from-transparent to-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-4">
            Formação Acadêmica
          </h2>
          <p className="text-gray-400 text-lg">Minha trajetória educacional</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2"
            >
              {/* Ícone */}
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {edu.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                {edu.degree}
              </h3>

              <p className="text-purple-400 font-semibold mb-4">
                {edu.institution}
              </p>

              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {edu.period}
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {edu.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
