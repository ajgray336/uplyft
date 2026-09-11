"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function SignUpPage() {
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSignUp(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/login`,
      },
    });

    setLoading(false);

    if (error) {
      setMessage(error.message);
      return;
    }

    setMessage(
      "Account created! Check your email and click the confirmation link before logging in."
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16">
      <div className="mx-auto max-w-md">
        <div className="mb-8 text-center">
          <div className="text-3xl font-black">
            uplyft<span className="text-violet-600">.</span>
          </div>

          <h1 className="mt-6 text-3xl font-black">
            Create your account
          </h1>

          <p className="mt-2 text-slate-600">
            Start your AI-powered job search.
          </p>
        </div>

        <form
          onSubmit={handleSignUp}
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
            minLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-violet-600"
            placeholder="Create a password"
          />

          <button
            type="submit"
            disabled={loading}
            className="mt-7 w-full rounded-full bg-violet-600 px-6 py-3.5 font-bold text-white hover:bg-violet-700 disabled:opacity-60"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>

          {message && (
            <p className="mt-4 text-center text-sm text-slate-600">
              {message}
            </p>
          )}

          <p className="mt-6 text-center text-sm text-slate-600">
            Already have an account?{" "}
            <a
              href="/login"
              className="font-bold text-violet-600"
            >
              Log in
            </a>
          </p>
        </form>
      </div>
    </main>
  );
}