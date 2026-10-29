'use client'

import { motion } from 'framer-motion'

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-cream-base pt-16 pb-12 md:pt-24 md:pb-16">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-8 h-64 w-64 rounded-full bg-oak-accent/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-latte-tan/20 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative mx-auto max-w-2xl px-6 text-center"
      >
        <span className="font-serif text-xs font-semibold uppercase tracking-[0.2em] text-oak-accent">
          Contact
        </span>
        <h1 className="mt-3 font-serif text-4xl leading-tight tracking-tight text-espresso-ink md:text-6xl">
          Let&apos;s talk coffee.
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-on-surface-variant md:text-lg">
          Questions about the menu, a private event, or just want to say hello?
          Send us a note and we&apos;ll get back to you.
        </p>
      </motion.div>
    </section>
  )
}
