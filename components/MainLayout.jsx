import React from 'react'

export default function MainLayout({ children }) {
  return (
    <div className='flex flex-col gap-6 w-full min-h-screen items-center-center'>
      <header className='flex py-6 bg-indigoFromi w-full justify-center'>
        <h1 className=' font-semibold text-3xl text-white'>Prueba Tecnica</h1>
      </header>
      {children}
    </div>
  )
}
