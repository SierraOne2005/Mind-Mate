export default function AIAssistant() {
  return (
    <section
      id="ai-assistant"
      className="py-24 sm:py-32 bg-gradient-to-br from-teal-50 to-sky-100"
    >
      <div className="mx-auto max-w-4xl text-center px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-teal-300/50 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-sky-300/50 rounded-full filter blur-3xl opacity-50 animate-pulse animation-delay-2000"></div>

        <h2 className="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl fade-in">
          Ready to Take the First Step?
        </h2>

        <p className="mt-6 text-lg text-gray-600 fade-in fade-in-delay-1">
          Your well-being matters. Start a confidential conversation today. It's
          free, secure, and a sign of strength.
        </p>

        <div className="mt-12 fade-in fade-in-delay-2">
          <a
            href="#"
            className="neon-cta group inline-flex items-center gap-3 text-white py-4 px-10 rounded-full text-lg font-bold"
          >
            <span className="material-symbols-outlined transition-transform duration-300 group-hover:rotate-12">
              smart_toy
            </span>
            Talk to our AI Assistant Now
          </a>
        </div>
      </div>
    </section>
  );
}
