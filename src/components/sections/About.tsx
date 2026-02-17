import Counter from "@/components/ui/Counter";
import AboutParticles from "@/components/ui/AboutParticles";



export default function About() {
  return (
    <section
      id="sobre"
      className="relative overflow-hidden bg-[#0b0b0b] text-white py-32 px-6"
    >
   
      {/*TOP/BOTTOM */}
     
     <div className="absolute top-0 left-0 w-full h-px gold-line opacity-80" />
<div className="absolute bottom-0 left-0 w-full h-px gold-line opacity-80" />

<AboutParticles />

      {/* Degradê lateral escuro */}
      <div className="absolute inset-0 bg-linear-to-r from-[#1a1205]/40 via-transparent to-transparent pointer-events-none" />

      {/* Glow radial dourado */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(198,163,67,0.15),transparent_50%)] pointer-events-none" />


      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 items-center">
        
        {/* left */}
        <div className="relative">
          <span className="text-[#C6A343] tracking-[0.4em] text-xl uppercase">
            Sobre
          </span>

          <div className="w-24 h-px bg-[#C6A343]/60 my-3" />

        </div>

        {/* right */}
        <div>
          <h2 className="text-5xl md:text-6xl font-serif leading-tight">
            Onde arte encontra <br />
            <span className="italic text-[#C6A343]">narrativa</span>
          </h2>

          <p className="mt-6 text-gray-400 leading-relaxed max-w-lg">
            Hécate nasceu da paixão por transformar histórias em
            imagens. Cada capa é criada com intenção, conceito e identidade
            única, pensada para transmitir a essência do livro antes mesmo da
            leitura.
          </p>

          {/* numbers */}
          <div className="flex gap-12 mt-16 pt-10 border-t border-white/10">
            
            <div className="pr-10 border-r border-white/10">
              <p className="text-3xl font-serif text-[#C6A343]">
                <Counter value={25} suffix="+" />
              </p>
              <span className="text-xs tracking-widest text-gray-500 uppercase">
                Capas Criadas
              </span>
            </div>

            <div className="pr-10 border-r border-white/10">
              <p className="text-3xl font-serif text-[#C6A343]">
                <Counter value={10} suffix="+" />
              </p>
              <span className="text-xs tracking-widest text-gray-500 uppercase">
                Autores Atendidos
              </span>
            </div>

            <div>
               <p className="text-3xl font-serif text-[#C6A343]">
                <Counter value={3} suffix="+" />
              </p>
              <span className="text-xs tracking-widest text-gray-500 uppercase">
                Anos de Experiência como Designer
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
