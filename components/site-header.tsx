import Link from 'next/link';

export function SiteHeader() {
  const navItems = [
    { label: 'Tutors', href: '/tutors' },
    { label: 'Dashboard', href: '/dashboard/student' },
    { label: 'Progress', href: '/progress' },
    { label: 'Payments', href: '/payments' },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur-xl">
      <div className="container-shell flex h-20 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-600 text-lg font-black text-white shadow-lg shadow-brand-600/25">
            T
          </div>
          <div>
            <p className="text-lg font-black tracking-tight text-slate-900">TutorFlow</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/login" className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
            Login
          </Link>
          <Link href="/signup" className="rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition hover:bg-brand-700">
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
}
