import React from 'react'
import Image from 'next/image'
export default function Foto() {
  return (
    <div>
      <Image
        src="/login.png"
        alt="Imagem oficina Senac"
        quality={100}
        width={960}
        height={500}                  
        className=""
      />
    </div>
  )
}
