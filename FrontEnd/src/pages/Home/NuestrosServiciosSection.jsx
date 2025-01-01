import React from 'react'
import SolucionesAdaptadas from './SolucionesAdaptadas'
import CardsServicios from './CardsServicios'

const NuestrosServiciosSection = () => {
  return (
    <section className='bg-celeste m-10 py-14 bg-opacity-10'>
      <SolucionesAdaptadas/>
      <CardsServicios/>
    </section>
  )
}

export default NuestrosServiciosSection