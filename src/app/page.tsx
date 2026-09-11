const plans = [
  {
    name: "Starter",
    price: "$20",
    applications: "25 applications / month",
    description: "Perfect for getting your job search moving.",
  },
  {
    name: "Pro",
    price: "$49",
    applications: "100 applications / month",
    description: "For serious job seekers ready to accelerate their search.",
    featured: true,
  },
  {
    name: "Elite",
    price: "$99",
    applications: "300 applications / month",
    description: "Maximum reach for an aggressive job search.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      {/* Navigation */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <div className="text-2xl font-black tracking-tight">
          uplyft<span className="text-violet-600">.</span>
        </div>

        <div className="hidden items-center gap-8 text-sm font-medium md:flex">
          <a href="#how-it-works" className="hover:text-violet-600">
            How It Works
          </a>
          <a href="#pricing" className="hover:text-violet-600">
            Pricing
          </a>
          <a href="#features" className="hover:text-violet-600">
            Features
          </a>
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden px-4 py-2 text-sm font-semibold sm:block">
            Log In
          </button>
          <button className="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-700">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-20 text-center lg:px-8 lg:pt-28">
        <div className="mx-auto mb-6 w-fit rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-700">
          AI-powered job applications
        </div>

        <h1 className="mx-auto max-w-5xl text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
          Stop applying.
          <br />
          Start getting{" "}
          <span className="text-violet-600">Uplyfted.</span>
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-600">
          Uplyft finds jobs that match your experience, prepares personalized
          applications, and helps handle the application process for you.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <button className="rounded-full bg-violet-600 px-8 py-4 font-bold text-white transition hover:bg-violet-700">
            Start My Job Search
          </button>

          <a
            href="#how-it-works"
            className="rounded-full border border-slate-300 px-8 py-4 font-bold transition hover:bg-slate-50"
          >
            See How It Works
          </a>
        </div>

        <p className="mt-5 text-sm text-slate-500">
          Upload your resume • Set your preferences • Let Uplyft get to work
        </p>
      </section>

      {/* How it works */}
      <section
        id="how-it-works"
        className="border-y border-slate-200 bg-slate-50 py-24"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="font-bold text-violet-600">HOW IT WORKS</p>
            <h2 className="mt-3 text-4xl font-black">
              Your job search, on autopilot.
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              [
                "01",
                "Upload your resume",
                "Uplyft analyzes your experience, skills, education, and career history.",
              ],
              [
                "02",
                "Tell us what you want",
                "Choose your job titles, salary range, location, work style, and other preferences.",
              ],
              [
                "03",
                "Uplyft gets to work",
                "We identify strong matches and prepare personalized applications based on your rules.",
              ],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 font-black text-violet-700">
                  {number}
                </div>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <p className="font-bold text-violet-600">YOUR AI JOB AGENT</p>
              <h2 className="mt-3 text-4xl font-black leading-tight">
                Spend less time applying.
                <br />
                Spend more time interviewing.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Uplyft handles the repetitive parts of your job search while
                keeping your preferences and qualifications at the center of
                every application.
              </p>
            </div>

            <div className="rounded-3xl bg-slate-950 p-8 text-white shadow-xl">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">THIS MONTH</p>
                  <p className="mt-1 text-2xl font-bold">Application Activity</p>
                </div>
                <div className="rounded-full bg-emerald-400/10 px-3 py-1 text-sm text-emerald-300">
                  Active
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  ["Jobs Matched", "142"],
                  ["Applications", "87"],
                  ["Responses", "14"],
                  ["Interviews", "6"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-slate-800 bg-slate-900 p-5"
                  >
                    <p className="text-sm text-slate-400">{label}</p>
                    <p className="mt-2 text-3xl font-black">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="font-bold text-violet-600">PRICING</p>
            <h2 className="mt-3 text-4xl font-black">
              Choose how far you want to go.
            </h2>
            <p className="mt-4 text-slate-600">
              Simple monthly plans. Upgrade or cancel anytime.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-7 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-3xl border p-8 ${
                  plan.featured
                    ? "border-violet-600 bg-slate-950 text-white shadow-xl"
                    : "border-slate-200 bg-white"
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-violet-600 px-4 py-1.5 text-xs font-bold text-white">
                    MOST POPULAR
                  </div>
                )}

                <h3 className="text-xl font-bold">{plan.name}</h3>

                <div className="mt-5 flex items-end gap-1">
                  <span className="text-5xl font-black">{plan.price}</span>
                  <span
                    className={
                      plan.featured ? "text-slate-400" : "text-slate-500"
                    }
                  >
                    /month
                  </span>
                </div>

                <p
                  className={`mt-5 font-semibold ${
                    plan.featured ? "text-violet-300" : "text-violet-700"
                  }`}
                >
                  {plan.applications}
                </p>

                <p
                  className={`mt-4 min-h-14 ${
                    plan.featured ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  {plan.description}
                </p>

                <button
                  className={`mt-8 w-full rounded-full px-6 py-3.5 font-bold ${
                    plan.featured
                      ? "bg-violet-600 text-white hover:bg-violet-500"
                      : "bg-slate-950 text-white hover:bg-violet-700"
                  }`}
                >
                  Choose {plan.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl rounded-[2.5rem] bg-violet-600 px-8 py-16 text-center text-white md:px-16">
          <h2 className="text-4xl font-black md:text-5xl">
            Your next opportunity is out there.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-violet-100">
            Let Uplyft help you reach more opportunities without spending every
            night filling out applications.
          </p>
          <button className="mt-9 rounded-full bg-white px-8 py-4 font-bold text-violet-700 transition hover:bg-violet-50">
            Get Started With Uplyft
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-slate-500 md:flex-row">
          <div className="font-black text-slate-950">uplyft.</div>
          <div>© 2026 Uplyft. All rights reserved.</div>
        </div>
      </footer>
    </main>
  );
}