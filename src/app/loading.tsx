export default function Loading() {
  return (
    <div className="min-h-screen">
      {/* Page hero skeleton */}
      <div className="bg-bg-subtle pb-24 pt-36">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <div className="mb-6 h-3 w-20 animate-pulse rounded-full bg-border" />
          <div className="mb-3 h-5 w-40 animate-pulse rounded-full bg-border" />
          <div className="mb-4 h-11 w-2/3 animate-pulse rounded-xl bg-border" />
          <div className="mb-2 h-5 w-1/2 animate-pulse rounded-lg bg-border" />
          <div className="h-5 w-2/5 animate-pulse rounded-lg bg-border" />
          {/* Stats row */}
          <div className="mt-10 flex gap-10 border-t border-border pt-8">
            {[1, 2, 3].map((i) => (
              <div key={i}>
                <div className="mb-1 h-7 w-16 animate-pulse rounded-lg bg-border" />
                <div className="h-3 w-20 animate-pulse rounded-full bg-border" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cards skeleton */}
      <div className="py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          {/* Section header */}
          <div className="mb-14 flex flex-col items-center gap-3">
            <div className="h-6 w-28 animate-pulse rounded-full bg-border" />
            <div className="h-10 w-80 animate-pulse rounded-xl bg-border" />
            <div className="h-4 w-64 animate-pulse rounded-lg bg-border" />
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="rounded-2xl border border-border bg-card-bg p-7">
                <div className="mb-5 h-12 w-12 animate-pulse rounded-xl bg-border" />
                <div className="mb-3 h-5 w-3/4 animate-pulse rounded-lg bg-border" />
                <div className="mb-2 h-4 w-full animate-pulse rounded-lg bg-border" />
                <div className="mb-2 h-4 w-5/6 animate-pulse rounded-lg bg-border" />
                <div className="h-4 w-2/3 animate-pulse rounded-lg bg-border" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
