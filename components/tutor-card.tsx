import Link from 'next/link';
import type { Tutor } from '@/lib/mock-data';

export function TutorCard({ tutor }: { tutor: Tutor }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <div className="flex items-center gap-4 border-b border-slate-200 bg-slate-50 p-5">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-100 to-sky-200 font-bold text-brand-700">
          {tutor.name
            .split(' ')
            .map((item) => item[0])
            .slice(0, 2)
            .join('')}
        </div>
        <div>
          <h3 className="text-lg font-bold text-slate-900">{tutor.name}</h3>
          <p className="text-sm text-slate-500">{tutor.role}</p>
        </div>
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-center justify-between text-sm text-slate-600">
          <span className="font-medium text-amber-500">★ {tutor.rating}</span>
          <span>{tutor.reviews} reviews</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {tutor.subjects.slice(0, 3).map((subject) => (
            <span key={subject} className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-700">
              {subject}
            </span>
          ))}
        </div>

        <p className="text-sm text-slate-600">{tutor.bio}</p>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Starting at</p>
            <p className="text-xl font-black text-slate-900">${tutor.hourlyRate}</p>
          </div>
          <Link href={`/tutors/${tutor.id}`} className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700">
            View profile
          </Link>
        </div>
      </div>
    </article>
  );
}
