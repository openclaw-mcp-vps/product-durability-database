export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff] mb-6">
          Community-Powered Durability Ratings
        </div>
        <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
          Rate Products by How Long They{" "}
          <span className="text-[#58a6ff]">Actually Last</span>
        </h1>
        <p className="text-xl text-[#8b949e] mb-10 max-w-2xl mx-auto">
          Stop guessing. DurabilityDB aggregates real longevity data from verified buyers so you always know what's built to last — and what isn't.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Start for $29/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto text-center">
          <div>
            <div className="text-3xl font-bold text-[#58a6ff]">48k+</div>
            <div className="text-sm text-[#8b949e] mt-1">Products Rated</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#58a6ff]">210k+</div>
            <div className="text-sm text-[#8b949e] mt-1">Verified Reviews</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#58a6ff]">94%</div>
            <div className="text-sm text-[#8b949e] mt-1">Accuracy Rate</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold text-white text-center mb-10">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#58a6ff] text-[#0d1117] text-xs font-bold px-3 py-1 rounded-full">
            MOST POPULAR
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Premium</h3>
          <div className="text-5xl font-bold text-[#58a6ff] mb-1">$29</div>
          <div className="text-[#8b949e] mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited product searches",
              "Advanced durability filters",
              "Manufacturer insight reports",
              "Verified purchase badge",
              "Export data to CSV",
              "Priority support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How are durability ratings verified?</h3>
            <p className="text-[#8b949e]">Users submit proof of purchase and rate products at multiple time intervals — 6 months, 1 year, and 2+ years — giving us longitudinal data that reflects real-world longevity.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">What does the Premium plan include?</h3>
            <p className="text-[#8b949e]">Premium unlocks advanced filtering by category, price range, and lifespan, plus manufacturer-level insights, CSV exports, and the ability to submit unlimited product reviews.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel anytime?</h3>
            <p className="text-[#8b949e]">Yes. Cancel anytime from your account dashboard with no penalties. Your access continues until the end of the billing period.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-[#8b949e] text-sm">
        © {new Date().getFullYear()} DurabilityDB. All rights reserved.
      </footer>
    </main>
  )
}
