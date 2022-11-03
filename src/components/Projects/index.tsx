import React from 'react'

export default function Projects() {
    const projectsContent = [
        {urlImage: "", title:"titulo", description:""},
        {urlImage: "", title:"titulo", description:""},
        {urlImage: "", title:"titulo", description:""},
        {urlImage: "", title:"titulo", description:""},
        {urlImage: "", title:"titulo", description:""},
    ]
  return (
    <div className='py-6 text-center'>
        <h2 className='text-4xl my-6'><b className='text-green-500'>Projetos</b> Recentes</h2>
        <p className='text-2xl'>Alguns projetos que eu desenvolvi</p>
    </div>
  )
}
