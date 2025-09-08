export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          <div className="flex items-center">
            <div className="text-[var(--primary-gradient-start)]">
              
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-900">
              MindMate
            </h2>
          </div>

          <nav className="hidden md:flex items-center gap-10">
            <a href="#" className="text-base font-medium text-[var(--text-secondary)] hover:text-[var(--primary-gradient-start)]">About</a>
            <a href="#how-it-works" className="text-base font-medium text-[var(--text-secondary)] hover:text-[var(--primary-gradient-start)]">How It Works</a>
            <a href="#" className="text-base font-medium text-[var(--text-secondary)] hover:text-[var(--primary-gradient-start)]">Contact</a>
          </nav>

          <a href="#ai-assistant" className="neon-cta text-white py-3 px-8 rounded-full text-base font-bold">
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}
