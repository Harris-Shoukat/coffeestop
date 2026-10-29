'use client'

import Image from 'next/image'
import { motion, type Variants } from 'framer-motion'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { storyImage } from '@/lib/images'

const listVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

const details = [
  {
    icon: Clock,
    title: 'Opening hours',
    lines: ['Mon to Fri, 7:00 AM to 8:00 PM', 'Sat and Sun, 8:00 AM to 6:00 PM'],
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['hello@coffeepoint.com'],
  },
  {
    icon: Phone,
    title: 'Phone',
    lines: ['+1 (555) 123-4567'],
  },
]

export default function ContactInfo() {
  return (
    <div className="flex h-full flex-col gap-4">
      <motion.a
        href="https://maps.google.com/?q=123+Coffee+Lane+Brewtown+BC+10001"
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="group relative block aspect-[4/3] overflow-hidden rounded-[28px] lg:aspect-auto lg:min-h-[220px] lg:flex-1"
      >
        <Image
          src={storyImage}
          alt="Inside Coffeepoint"
          fill
          sizes="(max-width: 1024px) 100vw, 40vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso-ink/85 via-espresso-ink/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-cream-base/90 px-3 py-1 text-xs font-medium text-espresso-ink backdrop-blur-sm">
            <MapPin className="h-3.5 w-3.5" />
            Visit us
          </span>
          <p className="mt-3 font-serif text-2xl text-cream-base">
            123 Coffee Lane
          </p>
          <p className="text-sm text-cream-base/70">Brewtown, BC 10001</p>
          <p className="mt-2 text-xs font-medium text-oak-accent">
            Get directions
          </p>
        </div>
      </motion.a>

      <motion.div
        variants={listVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1"
      >
        {details.map((detail) => {
          const Icon = detail.icon
          const content = (
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-oak-accent/15 text-oak-accent">
                <Icon className="h-4.5 w-4.5" />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-[0.15em] text-oak-accent">
                  {detail.title}
                </span>
                {detail.lines.map((line) => (
                  <span
                    key={line}
                    className="mt-1 block text-sm leading-relaxed text-on-surface-variant"
                  >
                    {line}
                  </span>
                ))}
              </span>
            </div>
          )

          return (
            <motion.div
              key={detail.title}
              variants={cardVariants}
              className="rounded-2xl border border-espresso-ink/10 bg-cream-base p-5"
            >
              {content}
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}
