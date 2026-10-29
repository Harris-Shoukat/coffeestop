'use client'

import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import StarRating from './StarRating'
import { useCart } from '@/context/CartContext'

const highlightImages = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCSAE28Im2BpzKWdAIKqYDC-fviRd73gazrGu8m_jyqvBTRXtwcRN6b4l7_NKRRbN01xBQ62TExul-sY3Eae_Eev55NRTpQ6A6gWKwWQ5JH7KQJNscv0BPGOjxpxQdR_4a44CsCcjDcNIYLf9dk-ggfioFO4nYT57Lf_ZlcFTwkZAYYZD1UZRAD383y9tdGlw107cbWZa2n-y41b_mPr69ETA2sh8hOl6IHCRpZ1qavigO8OkkyZkS6kw',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuD8H0Mhto4yVSEEtlPQNyBbzGTaNWaHKEFf1b2gg9Tz96b1xW29wafraEOHqyzFWuWCnoyPi9Nws3qEEMb4dzYHRXcqFGcrGJHF0_C5pMmknRvCNQhuWYFZFiau1ws_NKLkecNJJxWmU2RTwfx-DkTfpJLmZvkLYR1PNznf9QpmImzTXs5nTPVTJdg4oDFt25jASf8bgPNWQFyG7iJAvRIttG1bJWt0EX8Fw37-TTXsewByPLUQd0N65g',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBsJp3Q9Q0h8DQKH9zcb4oCSegFP9QmUJCHWljiGTijKe8R1o4VWfr5vLUlfAp2ChaAGthHZpzSNaHoY_A1w13CaBm6tvVv6vmpaoesprj9TOskXYfqPfnBkVPHClFD_cUKKT4XBI1lG7u6hkQLOQSb8kzOY1-fHlPsJ1Kf4SORLk0qwyJLLtdyl2z7paREJO06bRPJuuVgIJVX4V8jsViHZjd-zzW3TlH87OWp3X6v8Vw2B5EG2DQVIw',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuABtbm1LJH8BrPi9xxU2a4HyEi1sgKRYodVzAu5nnMPPJvB9NVfU9phEu6Ey1QCctk2n1hCVTb_7CJMvwRgEg3D_anv7FMF1SwrkotpCpNu7wtkfAdeNQFCv9s4MHeXz_NhKHtt23jqbElRH41ewlx9SCkMKEhETtabgXlpRwuDPvyD2TbBK78WoN68aj5aQw9ExJpKeLPYOANWdBJfoRAzOXJiCOphZeBIAA2oUd73CDnGEMMHTMipRQ',
]

export default function Highlights() {
  const t = useTranslations('home.highlights')
  const common = useTranslations('common')
  const { openDrawer } = useCart()
  const items = t.raw('items') as Array<{
    name: string
    description: string
    price: number
    rating: number
    tag: string
  }>
  const highlights = items.map((item, index) => ({
    ...item,
    image: highlightImages[index],
  }))

  return (
    <section className="w-full bg-surface-container-low py-20 md:py-[120px]">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="mb-12 flex flex-col items-center gap-4">
          <span className="font-serif text-xs font-semibold uppercase tracking-[0.2em] text-oak-accent">
            {t('eyebrow')}
          </span>
          <h2 className="font-serif text-3xl leading-tight text-espresso-ink md:text-4xl">
            {t('title')}
          </h2>
          <a
            href="/menu"
            className="mt-2 inline-flex items-center gap-2 rounded-full border border-espresso-ink/20 px-6 py-2.5 text-sm font-medium text-espresso-ink transition-colors hover:bg-espresso-ink hover:text-cream-base"
          >
            {common('viewAll')}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <div
              key={item.name}
              onClick={() => openDrawer(item)}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-cream-base transition-shadow duration-300 hover:shadow-xl cursor-pointer"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
                <span className="absolute left-3 top-3 rounded-full bg-cream-base/90 px-3 py-1 text-xs font-medium text-espresso-ink backdrop-blur-sm">
                  {item.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-2 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-lg font-semibold text-espresso-ink">
                    {item.name}
                  </h3>
                  <StarRating rating={item.rating} />
                </div>
                <p className="text-sm text-on-surface-variant">
                  {item.description}
                </p>
                <span className="mt-auto pt-2 font-serif text-lg font-bold text-oak-accent">
                  ${item.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
