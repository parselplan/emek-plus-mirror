function Block({ className }: { className: string }) {
  return <div className={`animate-pulse rounded-2xl bg-card/60 ${className}`} />;
}

export function HomeSkeleton() {
  return (
    <div className="app-frame pb-28">
      <div className="px-5 pt-12">
        <Block className="h-4 w-24" />
        <Block className="mt-2 h-7 w-40" />
        <Block className="mt-2 h-4 w-56" />
        <div className="mt-4 grid grid-cols-3 gap-2.5">
          <Block className="h-20" />
          <Block className="h-20" />
          <Block className="h-20" />
        </div>
      </div>
      <div className="mt-6 flex gap-3 px-5">
        <Block className="h-36 min-w-[64%]" />
        <Block className="h-36 min-w-[64%]" />
      </div>
      <div className="mt-8 grid grid-cols-3 gap-3 px-5">
        {Array.from({ length: 6 }).map((_, i) => (
          <Block key={i} className="h-24" />
        ))}
      </div>
      <div className="mt-8 space-y-2.5 px-5">
        <Block className="h-16" />
        <Block className="h-16" />
        <Block className="h-16" />
      </div>
    </div>
  );
}
