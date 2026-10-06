import Link from 'next/link';
import { studentOverview, progressData, lessonHistory } from '@/lib/mock-data';

export default function StudentDashboardPage() {
  return (
    <div className="container-shell py-20">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">Student portal</p>
        <h1 className="mt-2 text-4xl font-black text-slate-900">Dashboard</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {[
          { label: 'Upcoming lessons', value: studentOverview.upcomingLessons },
          { label: 'Completion rate', value: `${studentOverview.completionRate}%` },
          { label: 'Saved resources', value: studentOverview.savedResources },
          { label: 'Next milestone', value: studentOverview.nextMilestone },
        ].map((item) => (
          <div key={item.label} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
            <p className="text-sm text-slate-500">{item.label}</p>
            <p className="mt-4 text-3xl font-black text-slate-900">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-black text-slate-900">Progress overview</h2>
            <Link href="/progress" className="text-sm font-semibold text-brand-600">View details</Link>
          </div>

          <div className="mt-8 space-y-5">
            {progressData.map((item) => (
              <div key={item.label}>
                <div className="mb-2 flex items-center justify-between text-sm font-semibold text-slate-700">
                  <span>{item.label}</span>
                  <span className="text-emerald-600">{item.change}</span>
                </div>
                <div className="h-3 rounded-full bg-slate-100">
                  <div className="h-3 rounded-full bg-gradient-to-r from-brand-500 to-sky-400" style={{ width: `${item.score}%` }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
          <h2 className="text-2xl font-black text-slate-900">Upcoming sessions</h2>
          <div className="mt-6 space-y-4">
            {[
              'May 18 · Python Functions Lab',
              'May 22 · Physics Motion Practice',
              'May 24 · Essay Structure Review',
            ].map((session) => (
              <div key={session} className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
                {session}
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-black text-slate-900">Lesson history</h2>
          <Link href="/lessons/lesson-104" className="text-sm font-semibold text-brand-600">Open latest lesson</Link>
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
          <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
            <thead className="bg-slate-50 text-slate-600">
              <tr>
                <th className="px-4 py-3 font-semibold">Lesson</th>
                <th className="px-4 py-3 font-semibold">Date</th>
                <th className="px-4 py-3 font-semibold">Tutor</th>
                <th className="px-4 py-3 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {lessonHistory.map((lesson) => (
                <tr key={lesson.id}>
                  <td className="px-4 py-3 font-medium text-slate-900">{lesson.title}</td>
                  <td className="px-4 py-3 text-slate-600">{lesson.date}</td>
                  <td className="px-4 py-3 text-slate-600">{lesson.tutor}</td>
                  <td className="px-4 py-3">
                    <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${lesson.status === 'Completed' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'}`}>
                      {lesson.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
