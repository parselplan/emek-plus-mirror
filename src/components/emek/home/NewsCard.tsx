/**
 * İleride dinamik haber / duyuru alanı için placeholder.
 * Mevcut tasarımda ayrı bir haber bölümü yok; widget olarak eklenecek.
 */
interface NewsCardProps {
  title: string;
  summary: string;
  publishedAt?: string;
}

export function NewsCard({ title, summary, publishedAt }: NewsCardProps) {
  return (
    <article className="rounded-2xl border border-border/60 bg-gradient-card p-4 shadow-card">
      {publishedAt ? (
        <p className="text-[10px] font-medium text-muted-foreground">{publishedAt}</p>
      ) : null}
      <h3 className="mt-1 text-sm font-bold text-foreground">{title}</h3>
      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{summary}</p>
    </article>
  );
}
