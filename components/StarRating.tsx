import { Star } from 'lucide-react'

export default function StarRating({ rating, size = "sm" }: { rating: number; size?: "sm" | "base" }) {
  const sizeClass = size === "base" ? "h-5 w-5" : "h-4 w-4"

  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => {
        const fillPercent = Math.min(1, Math.max(0, rating - i))
        return (
          <span key={i} className="relative inline-block">
            <Star className={`${sizeClass} text-surface-variant`} strokeWidth={1.5} />
            {fillPercent > 0 && (
              <span
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${fillPercent * 100}%` }}
              >
                <Star className={`${sizeClass} text-oak-accent`} fill="currentColor" strokeWidth={0} />
              </span>
            )}
          </span>
        )
      })}
    </div>
  )
}
