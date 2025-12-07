'use client'

import Image from "next/image";

export default function Contact() {
  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: "Email",
      value: "Luizfernandolima_09@hotmail.com",
      href: "mailto:Luizfernandolima_09@hotmail.com"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: "Telefone",
      value: "(61) 98338-5897",
      href: "tel:+5561983385897"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: "Localização",
      value: "Brasília, Brasil",
      href: null
    },
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: "/linkedin-icon.svg", url: "https://www.linkedin.com/in/luizpibo-fernando" },
    { name: "GitHub", icon: "/github-icon.svg", url: "https://www.github.com/luizpibo" },
  ];

  return (
    <footer id="contato" className="relative pt-20 pb-10 px-4 bg-gradient-to-b from-transparent to-slate-950">
      {/* Divider decorativo */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header da seção */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
            Vamos Conversar?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Estou sempre aberto para discutir novos projetos, ideias criativas ou oportunidades de fazer parte da sua visão.
          </p>
        </div>

        {/* Cards de contato */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, idx) => (
            <div
              key={idx}
              className="group bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 flex items-center justify-center bg-cyan-500/10 rounded-xl text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                  {info.icon}
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-1">{info.label}</p>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-gray-300 font-medium">{info.value}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Links sociais */}
        <div className="flex justify-center gap-4 mb-12">
          {socialLinks.map((social, idx) => (
            <a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-14 h-14 flex items-center justify-center bg-slate-800/40 hover:bg-cyan-500/10 border border-slate-700/50 hover:border-cyan-500 rounded-xl transition-all duration-300 hover:scale-110"
              aria-label={social.name}
            >
              <Image
                src={social.icon}
                alt={social.name}
                width={28}
                height={28}
                className="group-hover:scale-110 transition-transform"
              />
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-8"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>
            © 2025 <span className="text-gray-400 font-semibold">Luiz Fernando de Lima e Silva</span>. Todos os direitos reservados.
          </p>
          <p className="text-gray-600">
            Desenvolvido com <span className="text-red-500">♥</span> usando Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
