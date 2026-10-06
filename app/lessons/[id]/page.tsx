export default function LessonPage() {
  return (
    <div className="container-shell py-20">
      <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">Session</p>
            <h1 className="mt-2 text-3xl font-black text-slate-900">Python Functions Lab</h1>
          </div>
          <div className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
            Completed
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <div className="rounded-3xl bg-slate-900 p-6 text-white">
              <div className="flex items-center justify-between">
                <span>Live session</span>
                <span className="rounded-full bg-white/10 px-2 py-1 text-xs">Zoom</span>
              </div>
              <div className="mt-6 flex h-52 items-center justify-center rounded-2xl border border-dashed border-white/30 bg-white/5 text-lg font-semibold">
                Video room ready
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 p-6">
              <h2 className="text-2xl font-black text-slate-900">Agenda</h2>
              <ul className="mt-4 space-y-3 text-slate-600">
                <li>• Review function parameters and return values</li>
                <li>• Solve 3 practice exercises</li>
                <li>• Discuss debugging strategies</li>
              </ul>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-slate-200 p-6">
              <h2 className="text-xl font-black text-slate-900">Tutor notes</h2>
              <p className="mt-4 text-sm text-slate-600">
                Strong improvement in function decomposition. Continue practicing nested functions and default arguments.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-6">
              <h2 className="text-xl font-black text-slate-900">Materials</h2>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li>• Worksheet: function drills</li>
                <li>• Revision guide</li>
                <li>• Homework set</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
