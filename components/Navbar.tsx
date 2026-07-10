'use client'

import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Menu', href: '/menu' },
  { label: 'Story', href: '/#story' },
  { label: 'Contact', href: '/#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 w-full bg-cream-base/80 backdrop-blur-md transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6">
        <span className="font-serif text-2xl font-bold tracking-tight text-espresso-ink">
          Coffeestop
        </span>
        <div className="hidden items-center gap-8 sm:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-on-surface-variant transition-colors hover:text-espresso-ink"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/menu"
            className="rounded-full bg-espresso-ink px-5 py-2 text-sm font-medium text-cream-base transition-colors hover:bg-oak-accent"
          >
            Order Now
          </a>
        </div>
        <button className="flex items-center sm:hidden" aria-label="Menu">
          <span className="material-symbols-outlined text-2xl text-espresso-ink">
            menu
          </span>
        </button>
      </div>
    </nav>
  )
}
