import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="container-shell py-20">
      <div className="mx-auto max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">Welcome back</p>
        <h1 className="mt-3 text-3xl font-black text-slate-900">Sign in to your account</h1>

        <form className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">Email</label>
            <input type="email" placeholder="you@example.com" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-500 focus:bg-white" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">Password</label>
            <input type="password" placeholder="••••••••" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-500 focus:bg-white" />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-slate-600">
              <input type="checkbox" className="rounded border-slate-300" />
              Remember me
            </label>
            <Link href="/" className="font-semibold text-brand-600">Forgot password?</Link>
          </div>

          <button type="submit" className="w-full rounded-2xl bg-brand-600 px-4 py-3 font-semibold text-white transition hover:bg-brand-700">
            Sign in
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-600">
          Need an account? <Link href="/signup" className="font-semibold text-brand-600">Create one</Link>
        </p>
      </div>
    </div>
  );
}
