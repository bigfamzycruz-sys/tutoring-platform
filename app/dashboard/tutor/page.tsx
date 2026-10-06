import { earningsData } from '@/lib/mock-data';

export default function TutorDashboardPage() {
  return (
    <div className="container-shell py-20">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">Tutor panel</p>
        <h1 className="mt-2 text-4xl font-black text-slate-900">Coach dashboard</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {[
          { label: 'Total bookings', value: '96' },
          { label: 'Monthly revenue', value: '$4,820' },
          { label: 'Student satisfaction', value: '98%' },
        ].map((card) => (
          <div key={card.label} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
            <p className="text-sm text-slate-500">{card.label}</p>
            <p className="mt-4 text-3xl font-black text-slate-900">{card.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
          <h2 className="text-2xl font-black text-slate-900">Earnings trend</h2>
          <div className="mt-8 flex h-56 items-end gap-4">
            {earningsData.map((item) => (
              <div key={item.month} className="flex flex-1 flex-col items-center gap-3">
                <div className="w-full rounded-t-2xl bg-gradient-to-t from-brand-600 to-sky-400" style={{ height: `${(item.value / 5000) * 100}%` }} />
                <span className="text-sm font-medium text-slate-500">{item.month}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
          <h2 className="text-2xl font-black text-slate-900">Today&apos;s schedule</h2>
          <div className="mt-6 space-y-4">
            {[
              '9:00 AM · Algebra Review',
              '11:30 AM · Essay Coaching',
              '3:00 PM · Python Lab',
            ].map((slot) => (
              <div key={slot} className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
                {slot}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
