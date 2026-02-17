export default function About() {
  return (
    <section
      id="sobre"
      className="relative overflow-hidden bg-[#0a0a0a] text-white py-32 px-6"
    >
      {/* Glow radial dourado no fundo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(198,163,67,0.15),transparent_40%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center relative z-10">
        
        {/* LADO ESQUERDO */}
        <div className="relative">
          <span className="text-gold tracking-[0.4em] text-xs uppercase">
            Sobre
          </span>

          <div className="w-24 h-px bg-gold/60 my-6" />

          {/* Número gigante no fundo */}
          <h2 className="absolute -top-10 left-0 text-[180px] font-serif text-gold/5 select-none">
            01
          </h2>
        </div>

        {/* LADO DIREITO */}
        <div>
          <h2 className="text-4xl md:text-5xl font-serif text-gold leading-tight">
            Onde arte encontra <br />
            <span className="italic text-white">narrativa</span>
          </h2>

          <p className="mt-6 text-gray-400 leading-relaxed max-w-lg">
            Hécate Capista nasceu da paixão por transformar histórias em
            imagens. Cada capa é criada com intenção, conceito e identidade
            única, pensada para transmitir a essência do livro antes mesmo da
            leitura.
          </p>

          {/* Métricas */}
          <div className="flex gap-12 mt-12 border-t border-white/10 pt-8">
            
            <div className="pr-8 border-r border-white/10">
              <p className="text-3xl font-serif text-gold">100+</p>
              <span className="text-xs tracking-widest text-gray-500 uppercase">
                Capas Criadas
              </span>
            </div>

            <div className="pr-8 border-r border-white/10">
              <p className="text-3xl font-serif text-gold">50+</p>
              <span className="text-xs tracking-widest text-gray-500 uppercase">
                Autores Atendidos
              </span>
            </div>

            <div>
              <p className="text-3xl font-serif text-gold">3+</p>
              <span className="text-xs tracking-widest text-gray-500 uppercase">
                Anos de Experiência
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
