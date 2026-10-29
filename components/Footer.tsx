'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full bg-espresso-ink">
      <div className="mx-auto max-w-[1280px] px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="flex flex-col gap-4">
            <span className="font-serif text-2xl font-bold tracking-tight text-cream-base">
              Coffeepoint
            </span>
            <p className="text-sm leading-relaxed text-cream-base/60">
              Crafting exceptional coffee experiences since 2010. Every sip
              tells a story.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-oak-accent">
              Location
            </span>
            <p className="text-sm leading-relaxed text-cream-base/60">
              123 Coffee Lane
              <br />
              Brewtown, BC 10001
            </p>
            <p className="text-sm text-cream-base/60">hello@coffeepoint.com</p>
            <p className="text-sm text-cream-base/60">+1 (555) 123-4567</p>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-oak-accent">
              Quick Links
            </span>
            <Link
              href="/"
              className="text-sm text-cream-base/60 transition-colors hover:text-cream-base"
            >
              Home
            </Link>
            <Link
              href="/menu"
              className="text-sm text-cream-base/60 transition-colors hover:text-cream-base"
            >
              Menu
            </Link>
            <Link
              href="/#story"
              className="text-sm text-cream-base/60 transition-colors hover:text-cream-base"
            >
              Our Story
            </Link>
            <Link
              href="/contact"
              className="text-sm text-cream-base/60 transition-colors hover:text-cream-base"
            >
              Contact
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-oak-accent">
              Newsletter
            </span>
            <p className="text-sm leading-relaxed text-cream-base/60">
              Get 10% off your first order when you subscribe.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex overflow-hidden rounded-full border border-cream-base/20"
            >
              <input
                type="email"
                placeholder="Your email"
                className="min-w-0 flex-1 bg-transparent px-4 py-2.5 text-sm text-cream-base placeholder-cream-base/40 outline-none"
              />
              <button
                type="submit"
                className="bg-oak-accent px-5 py-2.5 text-sm font-medium text-espresso-ink transition-colors hover:bg-oak-accent/90"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="border-t border-cream-base/10">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-cream-base/40 md:flex-row">
          <span>&copy; {new Date().getFullYear()} Coffeepoint. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="#" className="transition-colors hover:text-cream-base/60">
              Instagram
            </Link>
            <Link href="#" className="transition-colors hover:text-cream-base/60">
              Twitter
            </Link>
            <Link href="#" className="transition-colors hover:text-cream-base/60">
              Facebook
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
