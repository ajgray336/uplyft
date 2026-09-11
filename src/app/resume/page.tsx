"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function ResumePage() {
  const router = useRouter();
  const supabase = createClient();

  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function checkUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.replace("/signup");
        return;
      }

      setCheckingAuth(false);
    }

    checkUser();
  }, [router, supabase]);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const selectedFile = e.target.files?.[0];

    if (!selectedFile) {
      return;
    }

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(selectedFile.type)) {
      setMessage("Please select a PDF, DOC, or DOCX file.");
      setFile(null);
      setFileName("");
      return;
    }

    setFile(selectedFile);
    setFileName(selectedFile.name);
    setMessage("");
  }

  async function handleUpload() {
    if (!file) {
      setMessage("Please choose a resume first.");
      return;
    }

    setLoading(true);
    setMessage("");

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      setLoading(false);
      setMessage("Your session expired. Please sign in again.");
      router.push("/signup");
      return;
    }

    const fileExtension = file.name.split(".").pop();
    const filePath = `${user.id}/resume.${fileExtension}`;

    const { error: uploadError } = await supabase.storage
      .from("resumes")
      .upload(filePath, file, {
        upsert: true,
        contentType: file.type,
      });

    setLoading(false);

    if (uploadError) {
      setMessage(uploadError.message);
      return;
    }

    setMessage("Resume uploaded successfully.");
  }

  if (checkingAuth) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50">
        <p className="text-slate-600">Checking your account...</p>
      </main>
    );
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
              PDF, DOC, or DOCX
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
            onClick={handleUpload}
            disabled={loading}
            className="mt-7 w-full rounded-full bg-violet-600 px-6 py-3.5 font-bold text-white hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Uploading..." : "Upload Resume"}
          </button>

          {message && (
            <p className="mt-4 text-center text-sm font-medium text-slate-600">
              {message}
            </p>
          )}
        </div>
      </div>
    </main>
  );
}