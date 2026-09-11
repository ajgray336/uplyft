"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const router = useRouter();
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setMessage(error.message);
      return;
    }

    router.push("/dashboard");
    router.refresh();
  }

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16">
      <div className="mx-auto max-w-md">
        <div className="mb-8 text-center">
          <div className="text-3xl font-black">
            uplyft<span className="text-violet-600">.</span>
          </div>

          <h1 className="mt-6 text-3xl font-black">
            Welcome back
          </h1>

          <p className="mt-2 text-slate-600">
            Log in to continue your job search.
          </p>
        </div>

        <form
          onSubmit={handleLogin}
          className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
        >
          <label className="block text-sm font-semibold">
            Email
          </label>

          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-violet-600"
            placeholder="you@example.com"
          />

          <label className="mt-6 block text-sm font-semibold">
            Password
          </label>

          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-violet-600"
            placeholder="Enter your password"
          />

          <button
            type="submit"
            disabled={loading}
            className="mt-7 w-full rounded-full bg-violet-600 px-6 py-3.5 font-bold text-white hover:bg-violet-700 disabled:opacity-60"
          >
            {loading ? "Logging In..." : "Log In"}
          </button>

          {message && (
            <p className="mt-4 text-center text-sm text-red-600">
              {message}
            </p>
          )}

          <p className="mt-6 text-center text-sm text-slate-600">
            Don&apos;t have an account?{" "}
            <a
              href="/signup"
              className="font-bold text-violet-600"
            >
              Sign up
            </a>
          </p>
        </form>
      </div>
    </main>
  );
}