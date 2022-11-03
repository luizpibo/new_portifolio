import React from 'react'

export default function WhatIDo() {
    const cardsContent = [
        {title: "Desenvolvedor Front-end",
        text:"alguma coisa que eu vou ter que escrever",imageUrl: ""},
        {title: "Desenvolvedor Back-end",
        text:"alguma coisa que eu vou ter que escrever",imageUrl: ""},
        {title: "UX | IU Designer",
        text:"alguma coisa que eu vou ter que escrever",imageUrl: ""},
    ]
  return (
    <section className='bg-black py-8 w-full grid items-center justify-center shadow-lg shadow-black'>
        <h2 className='text-4xl text-center font-bold text-green-500 mb-6'>O que eu faço?</h2>
        <div className='flex flex-col lg:flex-row gap-6'>
        <div className='flex-1'>

        </div>
        {cardsContent.map((card)=>{
            return (<div className='transition py-10 px-6 bg-zinc-900 rounded-lg hover:shadow-lg hover:shadow-gray-900'>
                <div className="w-9/12">
                <h3 className='text-3xl'>{card.title}</h3>
                <p>{card.text}</p>
                </div>
            </div>)
        })}

        </div>
    </section>
  )
}
