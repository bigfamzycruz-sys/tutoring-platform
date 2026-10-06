import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getTutorById } from '@/lib/mock-data';

export default function TutorProfilePage({ params }: { params: { id: string } }) {
  const tutor = getTutorById(params.id);

  if (!tutor) {
    notFound();
  }

  return (
    <div className="container-shell py-20">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <aside className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
          <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-brand-100 to-sky-200 text-2xl font-black text-brand-700">
            {tutor.name
              .split(' ')
              .map((item) => item[0])
              .slice(0, 2)
              .join('')}
          </div>

          <h1 className="mt-6 text-3xl font-black text-slate-900">{tutor.name}</h1>
          <p className="mt-2 text-lg text-slate-600">{tutor.role}</p>

          <div className="mt-4 flex items-center gap-2 text-sm text-amber-500">
            <span>★</span>
            <span>{tutor.rating}</span>
            <span className="text-slate-500">({tutor.reviews} reviews)</span>
          </div>

          <div className="mt-6 space-y-3 text-sm text-slate-600">
            <p><span className="font-semibold text-slate-900">Experience:</span> {tutor.experience}</p>
            <p><span className="font-semibold text-slate-900">Availability:</span> {tutor.availability.join(', ')}</p>
            <p><span className="font-semibold text-slate-900">Rate:</span> ${tutor.hourlyRate}/hour</p>
          </div>

          <Link href={`/book/${tutor.id}`} className="mt-8 inline-flex w-full items-center justify-center rounded-2xl bg-brand-600 px-5 py-3 font-semibold text-white transition hover:bg-brand-700">
            Book a session
          </Link>
        </aside>

        <div className="space-y-8">
          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
            <h2 className="text-2xl font-black text-slate-900">About this tutor</h2>
            <p className="mt-4 text-slate-600">{tutor.bio}</p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
            <h2 className="text-2xl font-black text-slate-900">Subjects</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {tutor.subjects.map((subject) => (
                <span key={subject} className="rounded-full bg-brand-50 px-3 py-1.5 text-sm font-medium text-brand-700">
                  {subject}
                </span>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
            <h2 className="text-2xl font-black text-slate-900">Specialties</h2>
            <ul className="mt-4 space-y-3 text-slate-600">
              {tutor.specialties.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-brand-500" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
            <h2 className="text-2xl font-black text-slate-900">Certifications</h2>
            <ul className="mt-4 space-y-3 text-slate-600">
              {tutor.certifications.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
