'use client'

import Image from "next/image";

export default function Contact() {
  const socialLinks = [
    { name: "LinkedIn", icon: "/linkedin-icon.svg", url: "https://www.linkedin.com/in/luizpibo-fernando" },
    { name: "GitHub", icon: "/github-icon.svg", url: "https://www.github.com/luizpibo" },
  ];

  return (
    <footer id="contato" className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="h-px bg-neutral-900 mb-24"></div>

        <div className="text-center space-y-6">
          <h2 className="text-3xl font-semibold text-white">
            Vamos conversar?
          </h2>
          <p className="text-neutral-500 max-w-md mx-auto">
            Estou aberto para discutir novos projetos e oportunidades.
          </p>

          {/* Contatos */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-4">
            <a
              href="mailto:luizpibodev@gmail.com"
              className="text-neutral-400 hover:text-white transition-colors text-sm"
            >
              luizpibodev@gmail.com
            </a>
            <a
              href="tel:+5561983385897"
              className="text-neutral-400 hover:text-white transition-colors text-sm"
            >
              (61) 98338-5897
            </a>
            <span className="text-neutral-500 text-sm">
              Brasília, DF
            </span>
          </div>

          {/* Sociais */}
          <div className="flex justify-center gap-3 pt-2">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-neutral-800 rounded-lg hover:border-neutral-600 transition-colors"
                aria-label={social.name}
              >
                <Image
                  src={social.icon}
                  alt={social.name}
                  width={18}
                  height={18}
                />
              </a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-neutral-900 text-center text-xs text-neutral-700">
          <p>&copy; 2026 Luiz Fernando de Lima e Silva</p>
        </div>
      </div>
    </footer>
  );
}
