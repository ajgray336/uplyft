"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function ResetPasswordPage() {
  const router = useRouter();
  const supabase = createClient();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleReset(e: React.FormEvent) {
    e.preventDefault();

    if (password.length < 6) {
      setMessage("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.updateUser({
      password,
    });

    setLoading(false);

    if (error) {
      setMessage(error.message);
      return;
    }

    setMessage("Password updated successfully.");

    setTimeout(() => {
      router.push("/login");
    }, 1500);
  }

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16">
      <div className="mx-auto max-w-md">
        <div className="mb-8 text-center">
          <div className="text-3xl font-black">
            uplyft<span className="text-violet-600">.</span>
          </div>

          <h1 className="mt-6 text-3xl font-black">
            Create a new password
          </h1>

          <p className="mt-2 text-slate-600">
            Enter your new password below.
          </p>
        </div>

        <form
          onSubmit={handleReset}
          className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
        >
          <label className="block text-sm font-semibold">
            New password
          </label>

          <input
            type="password"
            required
            minLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-violet-600"
            placeholder="Enter new password"
          />

          <label className="mt-6 block text-sm font-semibold">
            Confirm new password
          </label>

          <input
            type="password"
            required
            minLength={6}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-violet-600"
            placeholder="Confirm new password"
          />

          <button
            type="submit"
            disabled={loading}
            className="mt-7 w-full rounded-full bg-violet-600 px-6 py-3.5 font-bold text-white hover:bg-violet-700 disabled:opacity-60"
          >
            {loading ? "Updating..." : "Update Password"}
          </button>

          {message && (
            <p className="mt-4 text-center text-sm text-slate-600">
              {message}
            </p>
          )}
        </form>
      </div>
    </main>
  );
}