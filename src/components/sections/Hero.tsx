import Image from "next/image";
import Particles from "@/components/ui/Particles";
import Reveal from "@/components/ui/Reveal";



export default function Home() {  
  return (
    <main className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">

      {/* Background Image */}
      <Image
        src="/images/hero-bg.png"
        alt="Hécate Background"
        fill
        priority
        className="object-cover"
      />

     
      <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/70 to-black/90" />

      {/* Hero Content */}
      <Particles />
      <section className="relative text-center px-6 max-w-4xl">
      <Reveal>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-transparent bg-clip-text bg-linear-to-r from-amber-300 to-yellow-500
          drop-shadow-[0_0_25px_rgba(255,215,0,0.3)]">
          Hécate 
        </h1>
      
        <p className="mt-6 text-gray-300 text-lg md:text-xl">
          Capas que contam histórias antes mesmo da primeira página.
        </p>

        <button className="mt-10 px-8 py-3 bg-amber-400 text-black font-semibold uppercase tracking-wider hover:bg-amber-300 transition duration-300 rounded-sm shadow-lg shadow-amber-500/20"
>
          <a href="/#portfolio"> Ver Capas Disponíveis</a>
        </button>
      </Reveal>
      </section>
      
    </main>
  );
}
