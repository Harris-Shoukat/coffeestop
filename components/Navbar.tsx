'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import logo from '@/public/l1.png'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Menu', href: '/menu' },
  { label: 'Story', href: '/#story' },
  { label: 'Contact', href: '/#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <nav
      className={`sticky top-0 z-50 w-full bg-cream-base/80 backdrop-blur-md transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6">
        <Link href="/">
          <Image src={logo} alt="Coffeestop" className="h-14 w-auto sm:h-16" priority />
        </Link>

        <div className="hidden items-center gap-8 sm:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-on-surface-variant transition-colors hover:text-espresso-ink"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/menu"
            className="rounded-full bg-espresso-ink px-5 py-2 text-sm font-medium text-cream-base transition-colors hover:bg-oak-accent"
          >
            Order Now
          </Link>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center sm:hidden"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X className="h-6 w-6 text-espresso-ink" /> : <Menu className="h-6 w-6 text-espresso-ink" />}
        </button>
      </div>

      <div
        className={`absolute left-0 right-0 top-full overflow-hidden bg-cream-base/95 backdrop-blur-md transition-all duration-300 sm:hidden ${
          isMenuOpen ? 'max-h-80 border-b border-espresso-ink/10' : 'max-h-0 border-none'
        }`}
      >
        <div className="mx-auto flex max-w-[1280px] flex-col gap-1 px-6 py-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 text-base font-medium text-on-surface-variant transition-colors hover:bg-surface-variant hover:text-espresso-ink"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/menu"
            onClick={closeMenu}
            className="mt-3 rounded-full bg-espresso-ink px-5 py-3 text-center text-sm font-medium text-cream-base transition-colors hover:bg-oak-accent"
          >
            Order Now
          </Link>
        </div>
      </div>
    </nav>
  )
}
