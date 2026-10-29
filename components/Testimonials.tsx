import { Star } from 'lucide-react'
import { getTranslations } from 'next-intl/server'

export default async function Testimonials() {
  const t = await getTranslations('home.testimonials')
  const testimonials = t.raw('items') as Array<{
    name: string
    role: string
    quote: string
    rating: number
  }>

  return (
    <section className="w-full bg-espresso-ink py-20 md:py-[120px]">
      <div className="mx-auto max-w-[1080px] px-6">
        <div className="mb-12 text-center">
          <span className="font-serif text-xs font-semibold uppercase tracking-[0.2em] text-oak-accent">
            {t('eyebrow')}
          </span>
          <h2 className="mt-3 font-serif text-3xl leading-tight text-cream-base md:text-4xl">
            {t('title')}
          </h2>
        </div>
        <div className="overflow-x-auto px-6 snap-x snap-mandatory scrollbar-hide">
          <div className="flex gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="flex w-[80vw] shrink-0 snap-start flex-col gap-4 rounded-2xl bg-cream-base/5 p-6 backdrop-blur-sm sm:w-[45vw] lg:w-[300px]"
              >
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < testimonial.rating
                          ? 'text-oak-accent'
                          : 'text-cream-base/20'
                      }`}
                      fill={i < testimonial.rating ? 'currentColor' : 'none'}
                      strokeWidth={i < testimonial.rating ? 0 : 1.5}
                    />
                  ))}
                </div>
                <p className="flex-1 text-base leading-relaxed text-cream-base/80">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <p className="font-serif text-base font-semibold text-cream-base">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-cream-base/60">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
