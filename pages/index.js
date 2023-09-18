import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import MainLayout from '@/components/MainLayout'
import CardEmployee from '@/components/CardEmployee'

const inter = Inter({ subsets: ['latin'] })

/*
//*Guia De datos
Apellido
Correo
Direccion
Fecha de Nacimiento
Imagen
Nombre
Telefono
*/

export default function Home({data}) {
  console.log(data)
  return (
    <MainLayout>
    <div className='flex gap-6 justify-center'>
      {data.map((Element,id)=>(
        <CardEmployee Element={Element} key={id}/>
      ))}
    </div>
    </MainLayout>
  )
}
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://gyl716q9ce.execute-api.us-east-1.amazonaws.com/dev/prueba`)
  const data = await res.json()
 
  // Pass data to the page via props
  return { props: { data } }
}