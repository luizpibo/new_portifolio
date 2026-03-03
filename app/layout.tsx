import '@splidejs/react-splide/css';
import '../styles/globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Luiz Fernando | Engenheiro de Software',
  description: 'Portfólio de Luiz Fernando — Engenheiro de Software com experiência em TypeScript, Python, Node.js, React e arquitetura de sistemas. Cofundador da Interage.ai.',
  keywords: ['Luiz Fernando', 'Engenheiro de Software', 'Full Stack', 'TypeScript', 'Python', 'Node.js', 'React', 'Next.js', 'Interage.ai', 'Brasília'],
  authors: [{ name: 'Luiz Fernando de Lima e Silva', url: 'https://luizpibo.vercel.app' }],
  creator: 'Luiz Fernando de Lima e Silva',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://luizpibo.vercel.app',
    title: 'Luiz Fernando | Engenheiro de Software',
    description: 'Engenheiro de Software com experiência em TypeScript, Python, Node.js e React. Cofundador da Interage.ai.',
    siteName: 'Luiz Fernando — Portfólio',
    images: [
      {
        url: '/profile_picture.jpg',
        width: 1200,
        height: 630,
        alt: 'Luiz Fernando — Engenheiro de Software',
      },
    ],
  },
  icons: {
    icon: '/favicon.ico',
  },
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className={`${inter.variable}`}>
      <body className="min-h-screen bg-neutral-950 text-neutral-300 antialiased font-sans">{children}</body>
    </html>
  )
}
