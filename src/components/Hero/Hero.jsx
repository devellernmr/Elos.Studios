import "./Hero.scss";

export default function Hero() {
  return (
    <section className="hero-bg w-full min-h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
        Bem-vindo ao Elos Studios
      </h1>
      <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-2xl">
        Transformando ideias em experiências digitais incríveis. Explore nossos
        projetos e serviços.
      </p>
      <a
        href="#projetos"
        className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
      >
        Veja Nossos Projetos
      </a>
    </section>
  );
}
