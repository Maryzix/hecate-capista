export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      
      {/* Efeito de fundo suave */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.08),transparent_60%)]" />

      {/* Conteúdo */}
      <div className="relative text-center max-w-4xl px-6">

        <p className="text-sm tracking-[0.4em] text-amber-400 uppercase mb-6">
          Design de Capas Literárias
        </p>

        <h1 className="text-6xl md:text-8xl font-serif font-bold text-amber-400 drop-shadow-[0_0_30px_rgba(255,215,0,0.3)]">
          Hécate
        </h1>

        <p className="text-2xl italic text-gray-400 mt-4">
          Capista
        </p>

        <div className="w-24 h-px bg-amber-400 mx-auto my-8" />

        <p className="text-gray-400 max-w-xl mx-auto mb-10">
          Capas que contam histórias antes mesmo da primeira página.
        </p>

        <button className="px-8 py-3 bg-amber-400 text-black font-semibold uppercase tracking-wider hover:bg-amber-300 transition duration-300">
          Explorar Portfólio →
        </button>

      </div>
    </main>
  );
}
