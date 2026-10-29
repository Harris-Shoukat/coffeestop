'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { storyImage } from '@/lib/images'

export default function OurStory() {
  const t = useTranslations('home.story')

  return (
    <section id="story" className="w-full bg-cream-base py-20 md:py-[120px]">
      <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl"
        >
          <Image
            src={storyImage}
            alt={t('imageAlt')}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            loading="lazy"
            decoding="async"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col gap-6"
        >
          <span className="font-serif text-xs font-semibold uppercase tracking-[0.2em] text-oak-accent">
            {t('eyebrow')}
          </span>
          <h2 className="font-serif text-3xl leading-tight text-espresso-ink md:text-4xl">
            {t('title')}
          </h2>
          <p className="text-base leading-relaxed text-on-surface-variant">
            {t('paragraph1')}
          </p>
          <p className="text-base leading-relaxed text-on-surface-variant">
            {t('paragraph2')}
          </p>
          <blockquote className="relative border-l-2 border-oak-accent pl-6">
            <p className="font-serif text-lg italic leading-relaxed text-espresso-ink">
              &ldquo;{t('quote')}&rdquo;
            </p>
            <footer className="mt-3 text-sm font-medium text-on-surface-variant">
              — {t('author')}
            </footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  )
}
