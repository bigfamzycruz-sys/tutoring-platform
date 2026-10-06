export default function PaymentsPage() {
  return (
    <div className="container-shell py-20">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">Billing</p>
        <h1 className="mt-2 text-4xl font-black text-slate-900">Payments</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
          <h2 className="text-2xl font-black text-slate-900">Billing summary</h2>
          <div className="mt-8 space-y-5 text-sm text-slate-600">
            <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
              <span>Session total</span>
              <span className="font-bold text-slate-900">$76.00</span>
            </div>
            <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
              <span>Platform fee</span>
              <span className="font-bold text-slate-900">$7.60</span>
            </div>
            <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
              <span>Tax</span>
              <span className="font-bold text-slate-900">$5.70</span>
            </div>
            <div className="flex items-center justify-between rounded-2xl bg-brand-50 p-4 text-brand-700">
              <span className="font-semibold">Total paid</span>
              <span className="text-lg font-black">$89.30</span>
            </div>
          </div>
        </section>

        <aside className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
          <h2 className="text-2xl font-black text-slate-900">Payment method</h2>
          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm text-slate-500">Visa ending in 4242</p>
            <p className="mt-2 text-lg font-bold text-slate-900">•••• 4242</p>
          </div>
          <button className="mt-6 w-full rounded-2xl bg-brand-600 px-4 py-3 font-semibold text-white transition hover:bg-brand-700">
            Pay now
          </button>
        </aside>
      </div>
    </div>
  );
}
