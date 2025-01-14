import React from 'react'
import GridCard from '../../components/GridCard'

const NuestrosProyectosSection = () => {
  return (
    <section className='flex flex-col max-w-7xl mx-auto py-16'>
        <span className='text-negro font-black text-xl'>
        Nuestros Proyectos
        </span>
        <span className='font-black text-azul text-wrap text-4xl'>
        Nuestras soluciones están diseñadas para ayudarte a alcanzar tus objetivos de manera eficiente y efectiva
        </span>
        <GridCard/>
    </section>
  )
}

export default NuestrosProyectosSection