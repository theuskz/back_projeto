import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white">
      <header className="flex items-center py-4 border-b border-gray-300 space-y-4">

        <Image
          src="/Senac_logo.png"
          alt="Imagem oficina Senac"
          quality={100}
          width={110}
          height={60}
          className="ml-10"
        />


        <div className="w-full flex flex-wrap justify-center gap-2">
          <button className="bg-[#004A8D] w-[130px] text-white px-4 py-2 rounded ml-[280px] ">Home</button>
          <button className="bg-[#004A8D] w-[130px] text-white px-4 py-2 rounded">Professores</button>
          <button className="bg-[#004A8D] w-[130px] text-white px-4 py-2 rounded">Notebooks</button>
          <button className="bg-[#004A8D] w-[130px] text-white px-4 py-2 rounded">Salas</button>
          <Link href={"/login"} className="bg-[#004A8D] w-[130px] text-center text-white px-4 py-2 rounded ml-[300px]">Login</Link>

        </div>

      </header>



    </div>
  )
}
