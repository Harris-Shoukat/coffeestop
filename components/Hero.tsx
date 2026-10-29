'use client'

import Image from 'next/image'
import { motion, type Variants } from 'framer-motion'
import { useTranslations } from 'next-intl'

const heroImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDeWTyFD6kk1ZKY5uLmsLFK8Apa99vlc49uVDpRonYGdHOU9dPrwco30EKI5GmxhquQHrNrSZOFC5KgIoINdQ9PKaoe89o2qYBLzAPtlH7i6RDOUkC44hmsiYvSInE0CSs87rpkNkVygwxojVvE3F6fNI052ZndcWMZexOh6leqW2UgvqrAhf2sH-_uuXA9WRClliE6IVck4x5l9bQWk47k1Qt2r6-8MA_oYIjtj4KnlOASQOxpEUTzpA'

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
}

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 },
  },
}

export default function Hero() {
  const t = useTranslations('home.hero')

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-cream-base"
    >
      <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-14">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6"
        >
          <motion.span
            variants={itemVariants}
            className="inline-block w-fit rounded-full bg-oak-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-oak-accent"
          >
            {t('badge')}
          </motion.span>
          <motion.h1
            variants={itemVariants}
            className="font-serif text-4xl leading-tight tracking-tight text-espresso-ink md:text-6xl"
          >
            {t('titleLine1')}
            <br />
            {t('titleLine2')}
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="max-w-md text-base leading-relaxed text-on-surface-variant md:text-lg"
          >
            {t('description')}
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <a
              href="#menu"
              className="rounded-full bg-espresso-ink px-8 py-3 text-sm font-medium text-cream-base transition-colors hover:bg-oak-accent"
            >
              {t('exploreMenu')}
            </a>
            <a
              href="#story"
              className="rounded-full border border-espresso-ink/20 px-8 py-3 text-sm font-medium text-espresso-ink transition-colors hover:bg-espresso-ink hover:text-cream-base"
            >
              {t('ourStory')}
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl md:aspect-[4/5]"
        >
          <Image
            src={heroImage}
            alt={t('imageAlt')}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            preload
            fetchPriority="high"
          />
        </motion.div>
      </div>
    </section>
  )
}
