import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Protect the dashboard
  if (!user) {
    redirect("/signup");
  }

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="text-2xl font-black">
            uplyft<span className="text-violet-600">.</span>
          </div>

          <div className="text-sm font-medium text-slate-600">
            {user.email}
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div>
          <p className="text-sm font-bold text-violet-600">
            DASHBOARD
          </p>

          <h1 className="mt-2 text-4xl font-black">
            Welcome to Uplyft
          </h1>

          <p className="mt-3 text-slate-600">
            Let&apos;s get your job search set up.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            ["Jobs Matched", "0"],
            ["Applications", "0"],
            ["Responses", "0"],
            ["Interviews", "0"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="text-sm text-slate-500">
                {label}
              </p>

              <p className="mt-2 text-4xl font-black">
                {value}
              </p>
            </div>
          ))}
        </div>

        {/* Setup Cards */}
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {/* Resume */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 font-black text-violet-700">
              1
            </div>

            <h2 className="mt-6 text-2xl font-black">
              Upload your resume
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              Uplyft will analyze your work experience, skills,
              education, and qualifications.
            </p>

            <a
              href="/resume"
              className="mt-7 inline-block rounded-full bg-violet-600 px-6 py-3 font-bold text-white transition hover:bg-violet-700"
            >
              Upload Resume
            </a>
          </div>

          {/* Preferences */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 font-black text-violet-700">
              2
            </div>

            <h2 className="mt-6 text-2xl font-black">
              Set job preferences
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              Tell Uplyft which roles, locations, salaries, and work
              arrangements you want.
            </p>

            <button
              type="button"
              className="mt-7 rounded-full bg-slate-950 px-6 py-3 font-bold text-white transition hover:bg-violet-700"
            >
              Set Preferences
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}