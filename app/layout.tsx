import '@splidejs/react-splide/css';
import '../styles/globals.css'
import { Roboto_Mono } from 'next/font/google'

export const metadata = {
  title: '💻 Luiz Fernando 💻',
  // description: 'Sou desenvolvedor full stack',
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
    <html lang="pt-br" className={`${roboto_mono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
