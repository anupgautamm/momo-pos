"use client";

export default function Commitment() {
  return (
    <section className="relative pt-32 pb-28 overflow-hidden">
      {/* Animated Warm Vibrant Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500 via-red-500 to-rose-600 animate-bgOpacity"></div>

      {/* Light noise texture on top */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>

      <div className="relative z-10 text-center px-6">
        <h1 className="font-bold text-5xl md:text-6xl text-white drop-shadow-xl mb-4">
          Our Commitment
        </h1>

        <h2 className="text-3xl md:text-4xl text-white/90 tracking-wide font-light mb-10">
          MOMOHOLIC
        </h2>

        {/* Commitment cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          {/* Card 1 */}
          <div className="bg-white/15 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="text-5xl mb-4">🔥</div>
            <h3 className="text-2xl font-semibold text-white mb-3">Authentic Taste</h3>
            <p className="text-white/80 leading-relaxed">
              We serve momos crafted with authentic spices, fresh ingredients,
              and traditional Nepali cooking techniques.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/15 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="text-5xl mb-4">🍲</div>
            <h3 className="text-2xl font-semibold text-white mb-3">Premium Quality</h3>
            <p className="text-white/80 leading-relaxed">
              From farm-fresh chicken to hygiene-first kitchens, we maintain
              the highest standards of quality in every momo we serve.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/15 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="text-5xl mb-4">💛</div>
            <h3 className="text-2xl font-semibold text-white mb-3">Honest Service</h3>
            <p className="text-white/80 leading-relaxed">
              We believe in honesty, transparency, and serving every customer
              with warmth, care, and genuine hospitality.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
