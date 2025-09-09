export default function Wellness() {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* Text */}
          <div className="text-center lg:text-left fade-in">
            <h2 className="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl">
              A Modern Approach to Student Wellness
            </h2>
            <p className="mt-6 text-xl text-gray-600">
              Our platform blends technology and empathy to provide accessible,
              professional, and genuinely caring support. We foster a safe
              environment where you can build resilience and achieve personal
              well-being alongside academic success.
            </p>

            <ul className="mt-8 space-y-4 text-lg text-gray-500">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-teal-500">
                  check_circle
                </span>
                Increased access to immediate mental health support.
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-teal-500">
                  check_circle
                </span>
                Reduced feelings of isolation and stress.
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-teal-500">
                  check_circle
                </span>
                Improved coping skills and emotional resilience.
              </li>
            </ul>
          </div>

          {/* Image */}
          <div className="relative flex justify-center items-center h-full fade-in fade-in-delay-1">
            <div className="absolute -inset-16 bg-gradient-to-br from-teal-300 via-sky-300 to-emerald-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUiLMLkss-DW2w3TsIP2PH7s9izmn6g4tPX-44Lz8OfzfCcjm5fTf-_dohefauBPt94TSgR38RT9wH-DsPhDDOUYdUwWhDKjKTEv4ymOQkK3haWtB-tvZ9qO3BMF0zhiGM1-Da_hlAVri9rEHI5-MZhhwumSIU5A8y0q94Vag2mpzrn46UBdyGDFjPQfXbu4hpMv0hpGy5V6krkS7YaOCcVGx4U0SAjPQj6FpWAt_8Es4stDJgZQHALurb3XKHSZWsZhzkoIk9"
              alt="Mind wellness vector graphic"
              className="relative w-full max-w-md floating-logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
