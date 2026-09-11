export default function ConfirmedPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
      <div className="w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
        <div className="text-3xl font-black">
          uplyft<span className="text-violet-600">.</span>
        </div>

        <h1 className="mt-6 text-3xl font-black">
          Your email is confirmed
        </h1>

        <p className="mt-4 leading-7 text-slate-600">
          Your Uplyft account is ready. You can now log in and continue
          setting up your job search.
        </p>

        <a
          href="/login"
          className="mt-8 inline-block rounded-full bg-violet-600 px-7 py-3.5 font-bold text-white hover:bg-violet-700"
        >
          Log In to Uplyft
        </a>
      </div>
    </main>
  );
}