import Background from "./Background";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background with particles */}
      <Background />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xl font-semibold mb-6 tagline-gradient fade-in fade-in-delay-1">
          Empowering Futures, Fostering Resilience
        </p>

        <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter leading-tight mb-8 fade-in fade-in-delay-2">
          <span className="gradient-text">Navigate Your Mind,</span> <br />
          Unlock Your Potential.
        </h1>

        <p className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-600 fade-in fade-in-delay-3">
          You're not alone. MindfulU offers a judgment-free, secure, and
          intelligent platform to connect with support. Find genuine solutions
          and the healing you deserve.
        </p>

        <div className="mt-12 fade-in fade-in-delay-4">
          <a
            href="#ai-assistant"
            className="neon-cta group inline-flex items-center gap-3 text-white py-4 px-10 rounded-full text-lg font-bold"
          >
            <span className="material-symbols-outlined transition-transform duration-300 group-hover:rotate-12">
              psychology
            </span>
            Begin Your Journey
          </a>
        </div>
      </div>
    </section>
  );
}
