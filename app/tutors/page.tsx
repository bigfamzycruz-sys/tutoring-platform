import Link from 'next/link';
import { tutors, getTutorById } from '@/lib/mock-data';

export default function TutorsPage() {
  return (
    <div className="container-shell py-20">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">Find the right fit</p>
          <h1 className="mt-2 text-4xl font-black text-slate-900">Browse tutors</h1>
        </div>
        <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm">
          {tutors.length} tutors available
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {tutors.map((tutor) => (
          <div key={tutor.id} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-100 to-sky-200 font-bold text-brand-700">
                {tutor.name
                  .split(' ')
                  .map((item) => item[0])
                  .slice(0, 2)
                  .join('')}
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900">{tutor.name}</h2>
                <p className="text-sm text-slate-500">{tutor.role}</p>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-2 text-sm text-amber-500">
              <span>★</span>
              <span>{tutor.rating}</span>
              <span className="text-slate-400">({tutor.reviews} reviews)</span>
            </div>

            <p className="mt-4 text-sm text-slate-600">{tutor.bio}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {tutor.subjects.map((subject) => (
                <span key={subject} className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-700">
                  {subject}
                </span>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">From</p>
                <p className="text-xl font-black text-slate-900">${tutor.hourlyRate}/hr</p>
              </div>
              <Link href={`/tutors/${tutor.id}`} className="rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700">
                View profile
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
