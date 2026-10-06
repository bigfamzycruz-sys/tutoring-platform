import Link from 'next/link';
import { getTutorById } from '@/lib/mock-data';

export default function BookSessionPage({ params }: { params: { tutorId: string } }) {
  const tutor = getTutorById(params.tutorId);

  return (
    <div className="container-shell py-20">
      <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">Book a lesson</p>
            <h1 className="mt-2 text-3xl font-black text-slate-900">Schedule with {tutor.name}</h1>
          </div>
          <div className="rounded-full bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700">
            ${tutor.hourlyRate}/hour
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <form className="space-y-6">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">Select date</label>
              <input type="date" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-500 focus:bg-white" />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">Time slot</label>
              <select className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-500 focus:bg-white">
                <option>9:00 AM - 10:00 AM</option>
                <option>11:30 AM - 12:30 PM</option>
                <option>2:00 PM - 3:00 PM</option>
                <option>5:30 PM - 6:30 PM</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">Session type</label>
              <select className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-500 focus:bg-white">
                <option>One-time tutoring</option>
                <option>Weekly plan</option>
                <option>Exam prep package</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">Notes for the tutor</label>
              <textarea rows={4} placeholder="Topics to cover, goals, current pain points..." className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-500 focus:bg-white" />
            </div>

            <button type="submit" className="w-full rounded-2xl bg-brand-600 px-4 py-3 font-semibold text-white transition hover:bg-brand-700">
              Proceed to payment
            </button>
          </form>

          <div className="rounded-3xl bg-slate-900 p-6 text-white">
            <h2 className="text-xl font-bold">Session summary</h2>
            <div className="mt-6 space-y-4 text-sm text-slate-200">
              <div className="flex justify-between">
                <span>Tutor</span>
                <span className="font-semibold text-white">{tutor.name}</span>
              </div>
              <div className="flex justify-between">
                <span>Subject</span>
                <span className="font-semibold text-white">{tutor.subjects[0]}</span>
              </div>
              <div className="flex justify-between">
                <span>Duration</span>
                <span className="font-semibold text-white">60 minutes</span>
              </div>
              <div className="flex justify-between">
                <span>Rate</span>
                <span className="font-semibold text-white">${tutor.hourlyRate}</span>
              </div>
            </div>

            <div className="mt-8 rounded-2xl bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-sky-300">Includes</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-200">
                <li>• Secure live video session</li>
                <li>• Session notes and follow-up</li>
                <li>• Progress tracking after class</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 text-sm text-slate-500">
          Need a different time? <Link href="/tutors" className="font-semibold text-brand-600">Browse more tutors</Link>
        </div>
      </div>
    </div>
  );
}
