const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Food Blogger',
    quote:
      'Best coffee in town! The pour-over selection is incredible, and the baristas really know their craft.',
    rating: 5,
  },
  {
    name: 'Raj K.',
    role: 'Regular Customer',
    quote:
      'The ambiance is unmatched. I spend hours here working, and the cold brew keeps me going.',
    rating: 5,
  },
  {
    name: 'Priya S.',
    role: 'Graphic Designer',
    quote:
      'Their flat white is my morning ritual. The quality is consistently excellent, and the staff is always welcoming.',
    rating: 4,
  },
]

export default function Testimonials() {
  return (
    <section className="w-full bg-espresso-ink py-20 md:py-[120px]">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="mb-12 text-center">
          <span className="font-serif text-xs font-semibold uppercase tracking-[0.2em] text-oak-accent">
            Testimonials
          </span>
          <h2 className="mt-3 font-serif text-3xl leading-tight text-cream-base md:text-4xl">
            What Our Community Says
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col gap-4 rounded-2xl bg-cream-base/5 p-6 backdrop-blur-sm"
            >
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={`material-symbols-outlined text-sm ${
                      i < t.rating ? 'text-oak-accent' : 'text-cream-base/20'
                    }`}
                  >
                    star
                  </span>
                ))}
              </div>
              <p className="flex-1 text-base leading-relaxed text-cream-base/80">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="font-serif text-base font-semibold text-cream-base">
                  {t.name}
                </p>
                <p className="text-sm text-cream-base/60">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
