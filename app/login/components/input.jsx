import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
export default function Input() {
    return (
        <div className='space-y-4 flex flex-col justify-center items-center'>
            <Image
                    src="/LogoSenac_rodape.png"
                    alt="Imagem oficina Senac"
                    quality={100}
                    width={80}
                    height={80}                  
                    className="z-0 mb-10"
                  />
            <input type='email' className='w-[25.5em] h-[2.4em] bg-blue-800 border-b border-b-white p-2 text-white focus:outline-none focus:ring-0' placeholder='Digite seu email aqui'></input>
            <input type='password' className='w-[25.5em] h-[2.4em] bg-blue-800 border-b border-b-white p-2 text-white focus:outline-none focus:ring-0' placeholder='Digite sua senha'></input>
            <Link href={"paginas"} className='text-white underline text-sm'>Esqueci minha senha</Link>
            <div className=''>
                <Link href='paginas'>
                    <button className='w-[25.5em] h-[2.5em] bg-gradient-to-b from-orange-400 to-orange-600 rounded-lg text-white font-bold mt-4'>Entrar</button>
                </Link>
            </div>
        </div>
    )
}
