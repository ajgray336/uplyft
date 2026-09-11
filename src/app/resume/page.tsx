"use client";

import { useState } from "react";

export default function ResumePage() {
  const [fileName, setFileName] = useState("");

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (file) {
      setFileName(file.name);
    }
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="text-2xl font-black">
            uplyft<span className="text-violet-600">.</span>
          </div>

          <a
            href="/dashboard"
            className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold"
          >
            Back to Dashboard
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-14">
        <div className="text-center">
          <p className="text-sm font-bold text-violet-600">YOUR RESUME</p>

          <h1 className="mt-3 text-4xl font-black">
            Upload your resume
          </h1>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-600">
            Uplyft will use your resume to understand your experience,
            skills, education, and qualifications.
          </p>
        </div>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <label
            htmlFor="resume"
            className="flex cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-slate-300 px-6 py-14 text-center hover:border-violet-500"
          >
            <div className="text-lg font-bold">
              Choose your resume
            </div>

            <p className="mt-2 text-sm text-slate-500">
              PDF or DOCX
            </p>

            <input
              id="resume"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>

          {fileName && (
            <div className="mt-6 rounded-2xl bg-violet-50 p-4 text-sm font-semibold text-violet-700">
              Selected: {fileName}
            </div>
          )}

          <button
            type="button"
            className="mt-7 w-full rounded-full bg-violet-600 px-6 py-3.5 font-bold text-white hover:bg-violet-700"
          >
            Upload Resume
          </button>
        </div>
      </div>
    </main>
  );
}