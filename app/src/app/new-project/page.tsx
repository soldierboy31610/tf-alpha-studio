import Image from "next/image";
import Link from "next/link";

export default function NewProjectPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030303] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-red-600/15 blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 h-[420px] w-[420px] rounded-full bg-blue-600/15 blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:42px_42px]"
      />

      <div className="relative mx-auto min-h-screen w-full max-w-3xl px-5 pb-12 pt-6 sm:px-8">
        <header className="flex items-center justify-between">
          <Link
            href="/"
            className="flex min-h-11 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 text-sm font-medium text-zinc-300 active:scale-[0.98]"
          >
            <span aria-hidden="true">←</span>
            Dashboard
          </Link>

          <div className="flex items-center gap-3">
            <Image
              src="/brand/tf-alpha-logo.png"
              alt="TF Alpha logo"
              width={42}
              height={42}
              priority
              className="h-10 w-10 object-contain"
            />

            <div className="hidden text-right sm:block">
              <p className="text-sm font-semibold">TF Alpha Studio</p>
              <p className="text-xs text-zinc-500">New project</p>
            </div>
          </div>
        </header>

        <section className="pb-8 pt-12">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
            One-Tap Lyric Video
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Start with your song.
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-400">
            Add the basic project details now. Song uploading, lyrics, style
            selection, and AI generation will be added one small step at a time.
          </p>
        </section>

        <form className="space-y-5">
          <section className="rounded-2xl border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl sm:p-7">
            <div className="mb-6">
              <h2 className="text-xl font-semibold">Project details</h2>

              <p className="mt-2 text-sm leading-6 text-zinc-500">
                These details will identify the project in your library and
                appear in future exports.
              </p>
            </div>

            <div className="space-y-5">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-zinc-300">
                  Project name
                </span>

                <input
                  type="text"
                  name="projectName"
                  required
                  maxLength={80}
                  placeholder="Example: Midnight Drive Lyric Video"
                  className="min-h-14 w-full rounded-xl border border-white/10 bg-black/40 px-4 text-base text-white outline-none transition placeholder:text-zinc-700 focus:border-blue-500/70 focus:ring-2 focus:ring-blue-500/20"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-zinc-300">
                  Song title
                </span>

                <input
                  type="text"
                  name="songTitle"
                  required
                  maxLength={120}
                  placeholder="Enter the official song title"
                  className="min-h-14 w-full rounded-xl border border-white/10 bg-black/40 px-4 text-base text-white outline-none transition placeholder:text-zinc-700 focus:border-blue-500/70 focus:ring-2 focus:ring-blue-500/20"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-zinc-300">
                  Artist name
                </span>

                <input
                  type="text"
                  name="artistName"
                  required
                  maxLength={120}
                  placeholder="Enter the artist or group name"
                  className="min-h-14 w-full rounded-xl border border-white/10 bg-black/40 px-4 text-base text-white outline-none transition placeholder:text-zinc-700 focus:border-blue-500/70 focus:ring-2 focus:ring-blue-500/20"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-zinc-300">
                  Main export format
                </span>

                <select
                  name="format"
                  defaultValue="vertical"
                  className="min-h-14 w-full rounded-xl border border-white/10 bg-black/40 px-4 text-base text-white outline-none transition focus:border-blue-500/70 focus:ring-2 focus:ring-blue-500/20"
                >
                  <option value="vertical">
                    Vertical 9:16 — TikTok, Shorts and Reels
                  </option>

                  <option value="horizontal">
                    Horizontal 16:9 — regular YouTube
                  </option>
                </select>
              </label>
            </div>
          </section>

          <div className="rounded-2xl border border-blue-500/20 bg-blue-500/[0.06] p-5">
            <p className="text-sm leading-6 text-zinc-400">
              <span className="font-semibold text-blue-300">
                Next milestone:
              </span>{" "}
              we will make this form save the project information safely before
              adding audio upload.
            </p>
          </div>

          <button
            type="submit"
            className="min-h-14 w-full rounded-xl border border-blue-400/40 bg-gradient-to-r from-blue-700 to-blue-500 px-6 py-4 text-base font-semibold shadow-[0_0_35px_rgba(37,99,235,0.25)] transition active:scale-[0.99]"
          >
            Continue to Song Upload
          </button>
        </form>
      </div>
    </main>
  );
}