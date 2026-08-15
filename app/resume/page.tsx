import Link from "next/link";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-ink px-6 py-12 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between">
          <Link
  href="/"
  className="bp-label hover:text-brass"
>
  ← Back to portfolio
</Link>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-brass px-5 py-2.5 font-mono text-sm font-medium text-ink"
          >
            Open PDF
          </a>
        </div>

        <iframe
          src="/resume.pdf"
          title="Jayant Shivankar Resume"
          className="h-[80vh] w-full rounded-lg border border-ink-line"
        />
      </div>
    </main>
  );
}