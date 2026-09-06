// components/Hero.tsx

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center px-4 pt-20">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Godwill Attisso</h1>
      <p className="text-lg md:text-2xl text-gray-500 mb-6">
        Electronic Systems Engineering Student
      </p>
      <p className="max-w-xl text-gray-400 mb-8">
        I am Electronics Systems Engineering student at the University of Regina. I build hardware
      </p>
      <a
        href="#projects"
        className="px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
      >
        View My Projects
      </a>
    </section>
  );
}
