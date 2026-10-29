'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'

export default function Footer() {
  const t = useTranslations('footer')
  const common = useTranslations('common')

  return (
    <footer className="w-full bg-espresso-ink">
      <div className="mx-auto max-w-[1280px] px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="flex flex-col gap-4">
            <span className="font-serif text-2xl font-bold tracking-tight text-cream-base">
              {common('brand')}
            </span>
            <p className="text-sm leading-relaxed text-cream-base/60">
              {t('tagline')}
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-oak-accent">
              {t('locationLabel')}
            </span>
            <p className="text-sm leading-relaxed text-cream-base/60">
              {t('addressLine1')}
              <br />
              {t('addressLine2')}
            </p>
            <p className="text-sm text-cream-base/60">{t('email')}</p>
            <p className="text-sm text-cream-base/60">{t('phone')}</p>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-oak-accent">
              {t('quickLinksLabel')}
            </span>
            <Link
              href="/"
              className="text-sm text-cream-base/60 transition-colors hover:text-cream-base"
            >
              {t('home')}
            </Link>
            <Link
              href="/menu"
              className="text-sm text-cream-base/60 transition-colors hover:text-cream-base"
            >
              {t('menu')}
            </Link>
            <Link
              href="/#story"
              className="text-sm text-cream-base/60 transition-colors hover:text-cream-base"
            >
              {t('ourStory')}
            </Link>
            <Link
              href="/contact"
              className="text-sm text-cream-base/60 transition-colors hover:text-cream-base"
            >
              {t('contact')}
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-oak-accent">
              {t('newsletterLabel')}
            </span>
            <p className="text-sm leading-relaxed text-cream-base/60">
              {t('newsletterText')}
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex overflow-hidden rounded-full border border-cream-base/20"
            >
              <input
                type="email"
                placeholder={t('emailPlaceholder')}
                className="min-w-0 flex-1 bg-transparent px-4 py-2.5 text-sm text-cream-base placeholder-cream-base/40 outline-none"
              />
              <button
                type="submit"
                className="bg-oak-accent px-5 py-2.5 text-sm font-medium text-espresso-ink transition-colors hover:bg-oak-accent/90"
              >
                {t('subscribe')}
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="border-t border-cream-base/10">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-cream-base/40 md:flex-row">
          <span>
            &copy; {new Date().getFullYear()} {t('copyright')}
          </span>
          <div className="flex gap-4">
            <Link href="#" className="transition-colors hover:text-cream-base/60">
              {t('instagram')}
            </Link>
            <Link href="#" className="transition-colors hover:text-cream-base/60">
              {t('twitter')}
            </Link>
            <Link href="#" className="transition-colors hover:text-cream-base/60">
              {t('facebook')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
