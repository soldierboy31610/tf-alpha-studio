import Image from "next/image";
import Link from "next/link";

const tools = [
  {
    icon: "♫",
    title: "One-Tap Lyric Video",
    description: "Turn your song and lyrics into a synchronized social video.",
    status: "Available soon",
  },
  {
    icon: "▶",
    title: "AI Music Video",
    description: "Create cinematic visuals that follow the emotion of your song.",
    status: "Future feature",
  },
  {
    icon: "▣",
    title: "Mini-Series",
    description: "Build connected episodes with recurring stories and characters.",
    status: "Future feature",
  },
  {
    icon: "✦",
    title: "Album Artwork",
    description: "Generate branded cover artwork for your artists and releases.",
    status: "Future feature",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030303] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-0 h-[430px] w-[430px] rounded-full bg-red-600/20 blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-24 h-[430px] w-[430px] rounded-full bg-blue-600/20 blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:42px_42px]"
      />

      <div className="relative mx-auto flex min-h-screen w-full max-w-5xl flex-col px-5 pb-12 pt-8 sm:px-8">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/brand/tf-alpha-logo.png"
              alt="TF Alpha logo"
              width={52}
              height={52}
              priority
              className="h-12 w-12 object-contain"
            />

            <div>
              <p className="text-sm font-semibold tracking-wide text-white">
                TF Alpha Studio
              </p>

              <p className="text-xs text-zinc-500">
                Powered by TF Alpha Productions
              </p>
            </div>
          </div>

          <button
            type="button"
            aria-label="Open profile"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-semibold text-zinc-200"
          >
            TF
          </button>
        </header>

        <section className="flex flex-col items-center pb-10 pt-14 text-center sm:pt-20">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute inset-4 rounded-full bg-gradient-to-r from-red-500/30 to-blue-500/30 blur-3xl"
            />

            <Image
              src="/brand/tf-alpha-logo.png"
              alt="TF Alpha corporate logo"
              width={230}
              height={230}
              priority
              className="relative h-auto w-[185px] object-contain sm:w-[230px]"
            />
          </div>

          <p className="mt-7 text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
            AI Creative Studio
          </p>

          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
            Turn one song into
            <span className="block bg-gradient-to-r from-red-400 via-zinc-100 to-blue-400 bg-clip-text text-transparent">
              endless content.
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg">
            Create lyric videos, music visuals, episodic stories, artwork, and
            social content without learning complicated editing software.
          </p>

          <Link
            href="/new-project"
            className="mt-8 flex min-h-14 items-center justify-center rounded-xl border border-blue-400/40 bg-gradient-to-r from-blue-700 to-blue-500 px-8 py-4 text-base font-semibold shadow-[0_0_35px_rgba(37,99,235,0.3)] transition active:scale-[0.98]"
          >
            + Start a New Project
          </Link>
        </section>

        <section className="mt-4">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-blue-400">
                Creative workspace
              </p>

              <h2 className="mt-1 text-2xl font-bold">
                What would you like to create?
              </h2>
            </div>

            <p className="hidden text-sm text-zinc-500 sm:block">
              TF Alpha Studio 1.0
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {tools.map((tool, index) => (
              <article
                key={tool.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl transition active:scale-[0.99]"
              >
                <div
                  aria-hidden="true"
                  className={`absolute left-0 top-0 h-full w-1 ${
                    index % 2 === 0 ? "bg-red-500" : "bg-blue-500"
                  }`}
                />

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-black/40 text-xl text-zinc-100">
                    {tool.icon}
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-white">
                      {tool.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-zinc-400">
                      {tool.description}
                    </p>

                    <p className="mt-4 text-xs font-medium uppercase tracking-wider text-zinc-600">
                      {tool.status}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-2xl border border-dashed border-white/10 bg-white/[0.025] px-6 py-10 text-center">
          <h2 className="text-lg font-semibold">No projects yet</h2>

          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-zinc-500">
            Your songs, lyric videos, and saved drafts will appear here after
            you create your first project.
          </p>
        </section>

        <footer className="mt-10 text-center text-xs text-zinc-700">
          © 2026 TF Alpha Productions
        </footer>
      </div>
    </main>
  );
}