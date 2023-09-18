import { modalVariants } from '@/constants/animation'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

export default function ModalEmployee({ Element, isOpen, onClose, }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed top-0 duration-200 left-0 w-full h-full bg-black z-50 safari-z bg-opacity-30 backdrop-blur-sm p-4 flex justify-center items-center xl:bg-opacity-60 cursor-pointer"
          onClick={onClose}
          variants={modalVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <motion.div
            className=" bg-white max-w-5xl w-8/12 flex flex-col justify-center items-center text-center p-6 gap-4 rounded-xl cursor-default max-h-[90vh]"
            variants={modalVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <div className='flex items-center'>
            <div className='w-1/2 flex'>
              <img src={Element.Imagen} alt={Element.Nombre} className='w-full h-full' />
            </div>
            <div className='w-1/2 text-left p-6'>
              <p className='text-6xl font-medium text-center py-6'>{Element.Nombre} {Element.Apellido}</p>
              <p><span className='font-bold'>Correo: </span>{Element.Correo}</p>
              <p><span className='font-bold'>Telefono: </span>{Element.Telefono}</p>
              <p><span className='font-bold'>Direccion: </span>{Element.Direccion}</p>
              <p><span className='font-bold'>Fecha de Nacimiento: </span>{Element['Fecha de Nacimiento']}</p>
            </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
