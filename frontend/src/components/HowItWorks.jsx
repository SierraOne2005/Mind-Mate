import React from "react";

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-24 sm:py-32 bg-gray-50/50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl fade-in">
            How It Works: A Clear Path to Serenity
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto fade-in fade-in-delay-1">
            We've designed a simple, secure, and confidential process to ensure
            you get the help you need, when you need it.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Step 1 */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200/80 card-hover-effect flex flex-col items-center text-center shadow-lg shadow-gray-200/50 fade-in">
            <div className="bg-gradient-to-br from-teal-100 to-sky-100 text-teal-500 rounded-full p-5 mb-6 shadow-inner-lg">
              <span className="material-symbols-outlined text-4xl">incognito</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800">1. Connect Anonymously</h3>
            <p className="mt-4 text-gray-600 flex-grow">
              Start a conversation with our AI chatbot or a peer supporter. Your
              identity is always protected, allowing you to speak freely and openly.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200/80 card-hover-effect flex flex-col items-center text-center shadow-lg shadow-gray-200/50 fade-in fade-in-delay-1">
            <div className="bg-gradient-to-br from-teal-100 to-sky-100 text-sky-500 rounded-full p-5 mb-6 shadow-inner-lg">
              <span className="material-symbols-outlined text-4xl">shield_lock</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800">2. Secure &amp; Confidential Support</h3>
            <p className="mt-4 text-gray-600 flex-grow">
              If you choose, we can connect you with licensed college counselors
              or psychiatrists in a secure, end-to-end encrypted environment.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200/80 card-hover-effect flex flex-col items-center text-center shadow-lg shadow-gray-200/50 fade-in fade-in-delay-2">
            <div className="bg-gradient-to-br from-teal-100 to-sky-100 text-emerald-500 rounded-full p-5 mb-6 shadow-inner-lg">
              <span className="material-symbols-outlined text-4xl">spa</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800">3. Find Your Solution</h3>
            <p className="mt-4 text-gray-600 flex-grow">
              Receive personalized guidance, coping strategies, and professional
              support to help you navigate your challenges and thrive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
