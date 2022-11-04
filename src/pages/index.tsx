import Head from 'next/head'
import '../styles/Home.module.css'
import HeroSection from '../components/HeroSection'
import Header from '../components/Header'
import WhatIDo from '../components/WhatIDo'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
export default function Home() {
  return (
    <div className="min-h-full w-full bg-zinc-900 text-gray-200">
      <Head>
        <title>💻 Luiz Fernando 💻</title>
        <meta name="description" content="Sou desenvolvedor full stack" />
      </Head>
      <Header/>
      <HeroSection />
      <WhatIDo />
    </div>
  )
}
