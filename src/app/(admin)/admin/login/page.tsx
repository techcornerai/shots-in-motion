import { loginAdmin } from "./actions";

type LoginPageProps = {
  searchParams: Promise<{ error?: string }>;
};

export default async function AdminLoginPage({ searchParams }: LoginPageProps) {
  const params = await searchParams;
  const hasError = params.error === "1";

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="section-shell flex min-h-screen items-center justify-center py-24">
        <div className="w-full max-w-md rounded-[28px] border border-white/10 bg-white/[0.03] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.38)]">
          <p className="eyebrow mb-4">Admin Access</p>
          <h1 className="heading-section mb-6">Sign In</h1>

          <p className="mb-6 text-sm leading-7 text-white/65">
            Enter your admin credentials to manage galleries.
          </p>

          <form action={loginAdmin} className="space-y-5">
            <div>
              <label className="mb-2 block text-[10px] uppercase tracking-[0.28em] text-white/45">
                Username
              </label>
              <input
                name="username"
                type="text"
                required
                className="h-12 w-full rounded-2xl border border-white/10 bg-black/40 px-4 text-white outline-none transition placeholder:text-white/30 focus:border-[#c6a66b]/40"
              />
            </div>

            <div>
              <label className="mb-2 block text-[10px] uppercase tracking-[0.28em] text-white/45">
                Password
              </label>
              <input
                name="password"
                type="password"
                required
                className="h-12 w-full rounded-2xl border border-white/10 bg-black/40 px-4 text-white outline-none transition placeholder:text-white/30 focus:border-[#c6a66b]/40"
              />
            </div>

            {hasError ? (
              <p className="text-sm text-red-400">Invalid username or password.</p>
            ) : null}

            <button
              type="submit"
              className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-[#c6a66b] px-6 py-3 text-[11px] uppercase tracking-[0.24em] text-black transition hover:opacity-90"
            >
              Sign In
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
