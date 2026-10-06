import Link from 'next/link';
import { tutors, subjectCategories, formatCurrency } from '@/lib/mock-data';
import { TutorCard } from '@/components/tutor-card';

export default function HomePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-sky-100 via-white to-brand-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <span className="inline-flex items-center rounded-full border border-sky-200 bg-white px-3 py-1 text-sm font-medium text-brand-700 shadow-sm">
                Trusted by 18,000+ learners
              </span>
              <h1 className="mt-6 text-5xl font-black tracking-tight text-slate-900 md:text-6xl">
                Learn faster with expert tutors who care about your growth.
              </h1>
              <p className="mt-6 max-w-xl text-lg text-slate-600">
                Personalized 1:1 tutoring, certified mentors, weekly progress dashboards, and live sessions built for real academic progress.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/tutors" className="rounded-full bg-brand-600 px-6 py-3 font-semibold text-white shadow-lg shadow-brand-600/25 transition hover:bg-brand-700">
                  Find a tutor
                </Link>
                <Link href="/signup" className="rounded-full border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
                  Become a tutor
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-8 text-sm text-slate-600">
                <div>
                  <p className="text-2xl font-bold text-slate-900">4.9/5</p>
                  <p>Average rating</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">42k+</p>
                  <p>Lessons completed</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">96%</p>
                  <p>Student satisfaction</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
              <div className="rounded-2xl bg-slate-900 p-5 text-white">
                <p className="text-sm text-slate-300">This month</p>
                <div className="mt-4 flex items-end justify-between">
                  <div>
                    <p className="text-4xl font-black">$4,820</p>
                    <p className="mt-1 text-sm text-slate-300">Tutoring revenue</p>
                  </div>
                  <div className="rounded-full bg-emerald-500/20 px-2 py-1 text-xs font-semibold text-emerald-300">
                    +18.2%
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {tutors.slice(0, 3).map((tutor) => (
                  <div key={tutor.id} className="flex items-center justify-between rounded-2xl border border-slate-200 p-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-brand-100 to-sky-200 font-bold text-brand-700">
                        {tutor.name
                          .split(' ')
                          .map((n) => n[0])
                          .slice(0, 2)
                          .join('')}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">{tutor.name}</p>
                        <p className="text-sm text-slate-500">{tutor.subjects[0]}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-slate-900">{formatCurrency(tutor.hourlyRate)}/hr</p>
                      <p className="text-xs text-emerald-600">Available today</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-600">Subjects</p>
            <h2 className="mt-2 text-3xl font-black text-slate-900">Explore top learning tracks</h2>
          </div>
          <Link href="/tutors" className="text-sm font-semibold text-brand-600 hover:text-brand-700">
            See all tutors →
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {subjectCategories.map((category) => (
            <div key={category.name} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-xl text-brand-700">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900">{category.name}</h3>
              <p className="mt-2 text-sm text-slate-600">{category.description}</p>
              <p className="mt-6 text-sm font-semibold text-brand-600">{category.tutors} expert tutors</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sky-300">Meet the mentors</p>
              <h2 className="mt-2 text-3xl font-black">Top-rated tutors for every learning goal</h2>
            </div>
            <Link href="/signup" className="text-sm font-semibold text-sky-300 hover:text-sky-200">
              Join as a tutor →
            </Link>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {tutors.slice(0, 3).map((tutor) => (
              <TutorCard key={tutor.id} tutor={tutor} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: 'Live tutoring sessions',
              text: 'Book instant or scheduled sessions with experts using secure video tools and whiteboard collaboration.',
            },
            {
              title: 'Progress dashboards',
              text: 'Track mastery, performance, assignments, and milestone achievements with weekly progress snapshots.',
            },
            {
              title: 'Pay once, learn anytime',
              text: 'Flexible billing for single sessions, memberships, and structured learning plans that fit your goals.',
            },
          ].map((feature) => (
            <div key={feature.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-xl text-emerald-600">✓</div>
              <h3 className="text-2xl font-bold text-slate-900">{feature.title}</h3>
              <p className="mt-4 text-slate-600">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
