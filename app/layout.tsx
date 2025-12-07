import '@splidejs/react-splide/css';
import '../styles/globals.css'
import { Roboto_Mono } from 'next/font/google'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Luiz Fernando | Arquiteto de Software & Engenheiro Full Stack',
  description: 'Portfólio de Luiz Fernando, Arquiteto de Software e Cofundador da Interage.ai. Especialista em arquitetura de sistemas distribuídos, desenvolvimento full-stack (Node.js, React, Next.js) e soluções de IA.',
  keywords: ['Luiz Fernando', 'Arquiteto de Software', 'Engenheiro de Software', 'Full Stack', 'Next.js', 'React', 'Node.js', 'Interage.ai', 'Desenvolvedor Web', 'Brasília', 'SaaS', 'IA'],
  authors: [{ name: 'Luiz Fernando de Lima e Silva', url: 'https://luizpibo.vercel.app' }],
  creator: 'Luiz Fernando de Lima e Silva',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://luizpibo.vercel.app',
    title: 'Luiz Fernando | Arquiteto de Software & Engenheiro Full Stack',
    description: 'Transformando visões de negócio em tecnologia escalável. Especialista em arquitetura de software, full-stack e IA.',
    siteName: 'Portfólio Luiz Fernando',
    images: [
      {
        url: '/profile_picture.jpg',
        width: 1200,
        height: 630,
        alt: 'Luiz Fernando - Arquiteto de Software',
      },
    ],
  },
  icons: {
    icon: '/favicon.ico',
  },
}

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className={`${roboto_mono.variable} min-h-screen`}>
      <body>{children}</body>
    </html>
  )
}
