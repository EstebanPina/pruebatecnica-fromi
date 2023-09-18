import React, { useState } from 'react'
import ModalEmployee from './ModalEmployee';

export default function CardEmployee({Element}) {
  const [openModal, setOpenModal] = useState(false)
  const closeModal = () => setOpenModal(false);
  return (
    <div>
    <div className='flex flex-col rounded-xl p-6 items-center w-96 bg-gray-300 shadow-2xl hover:scale-105 hover:bg-gray-100 duration-300' onClick={()=>setOpenModal(true)}>
          <img src={Element.Imagen} alt={Element.Nombre} className='w-48 h-48 rounded-full object-top object-cover'/>
          <h2 className='text-2xl font-medium'>{Element.Nombre}</h2>
          <h2 className='text-2xl font-medium'>{Element.Apellido}</h2>
        </div>
    <ModalEmployee Element={Element} onClose={closeModal} isOpen={openModal}/>
    </div>
  )
}
