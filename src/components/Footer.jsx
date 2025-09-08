export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-[var(--primary-gradient-start)]">
            </div>
            <h2 className="text-2xl font-bold leading-tight tracking-tighter text-white">
              MindMate
            </h2>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            <a href="#" className="text-base text-gray-300 hover:text-teal-300">
              Privacy Policy
            </a>
            <a href="#" className="text-base text-gray-300 hover:text-teal-300">
              Terms of Service
            </a>
            <a href="#" className="text-base text-gray-300 hover:text-teal-300">
              Contact Us
            </a>
          </div>

          {/* Copyright */}
          <p className="text-base text-gray-400">
            © 2024 MindMate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
