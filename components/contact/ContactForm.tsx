'use client'

import { useState, type FormEvent } from 'react'
import { motion, type Variants } from 'framer-motion'
import { CheckCircle2, Send } from 'lucide-react'

const formVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

const fieldVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

const inputClassName =
  'w-full rounded-xl border border-espresso-ink/10 bg-cream-base px-4 py-3 text-sm text-espresso-ink placeholder:text-on-surface-variant/50 outline-none transition-colors focus:border-oak-accent focus:ring-2 focus:ring-oak-accent/20'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    event.currentTarget.reset()
    setSubmitted(true)
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="h-full rounded-[28px] border border-espresso-ink/10 bg-surface-container-low p-6 md:p-10"
    >
      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="flex min-h-[420px] flex-col items-center justify-center text-center"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-oak-accent/15 text-oak-accent">
            <CheckCircle2 className="h-8 w-8" />
          </span>
          <h3 className="mt-6 font-serif text-2xl text-espresso-ink">
            Thanks for reaching out.
          </h3>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-on-surface-variant">
            We&apos;ll get back to you within one business day. In the meantime,
            the kettle is on.
          </p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="mt-8 rounded-full border border-espresso-ink/20 px-6 py-2.5 text-sm font-medium text-espresso-ink transition-colors hover:bg-espresso-ink hover:text-cream-base"
          >
            Send another message
          </button>
        </motion.div>
      ) : (
        <>
          <div className="mb-8">
            <span className="font-serif text-xs font-semibold uppercase tracking-[0.2em] text-oak-accent">
              Write to us
            </span>
            <h2 className="mt-3 font-serif text-3xl leading-tight text-espresso-ink md:text-4xl">
              Send us a note
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-on-surface-variant">
              Fill in the details below and we&apos;ll point you to the right
              person.
            </p>
          </div>

          <motion.form
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <motion.label
                variants={fieldVariants}
                className="flex flex-col gap-2 text-sm font-medium text-espresso-ink"
              >
                Name
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className={inputClassName}
                />
              </motion.label>
              <motion.label
                variants={fieldVariants}
                className="flex flex-col gap-2 text-sm font-medium text-espresso-ink"
              >
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  className={inputClassName}
                />
              </motion.label>
            </div>
            <motion.label
              variants={fieldVariants}
              className="flex flex-col gap-2 text-sm font-medium text-espresso-ink"
            >
              Subject
              <input
                type="text"
                name="subject"
                placeholder="What can we help with?"
                className={inputClassName}
              />
            </motion.label>
            <motion.label
              variants={fieldVariants}
              className="flex flex-col gap-2 text-sm font-medium text-espresso-ink"
            >
              Message
              <textarea
                name="message"
                rows={5}
                placeholder="Tell us a little about it..."
                required
                className={`${inputClassName} resize-none`}
              />
            </motion.label>
            <motion.div
              variants={fieldVariants}
              className="flex flex-col items-start gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between"
            >
              <p className="text-xs leading-relaxed text-on-surface-variant">
                We usually reply within one business day.
              </p>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-espresso-ink px-7 py-3 text-sm font-medium text-cream-base transition-colors hover:bg-oak-accent"
              >
                Send message
                <Send className="h-4 w-4" />
              </button>
            </motion.div>
          </motion.form>
        </>
      )}
    </motion.section>
  )
}
