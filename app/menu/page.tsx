'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { categories, getCategoryProducts } from '@/lib/products'
import StarRating from '@/components/StarRating'
import { useCart } from '@/context/CartContext'

export default function MenuPage() {
  const { openDrawer } = useCart()
  const [activeCategory, setActiveCategory] = useState('all')

  const filtered = useMemo(
    () => getCategoryProducts(activeCategory),
    [activeCategory],
  )

  return (
    <>
      <Navbar />
      <main>
        <section className="w-full bg-cream-base pt-8 pb-4 md:pt-16">
          <div className="mx-auto max-w-[1280px] px-6 text-center">
            <span className="font-serif text-xs font-semibold uppercase tracking-[0.2em] text-oak-accent">
              Our Menu
            </span>
            <h1 className="mt-3 font-serif text-4xl leading-tight text-espresso-ink md:text-5xl">
              Explore Our Collection
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-base text-on-surface-variant">
              From handcrafted espresso to freshly baked pastries — every item is made with passion.
            </p>
          </div>
        </section>

        <section className="w-full bg-cream-base pb-2">
          <div className="mx-auto max-w-[1280px] px-6">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                    activeCategory === cat.id
                      ? 'bg-espresso-ink text-cream-base'
                      : 'bg-surface-container text-on-surface-variant hover:bg-surface-variant'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full bg-surface-container-low py-12 md:py-20">
          <div className="mx-auto max-w-[1280px] px-6">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm text-on-surface-variant">
                Showing {filtered.length} {filtered.length === 1 ? 'item' : 'items'}
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((item) => (
                <div
                  key={item.id}
                  onClick={() => openDrawer(item)}
                  className="group flex flex-col overflow-hidden rounded-2xl bg-cream-base transition-shadow duration-300 hover:shadow-xl cursor-pointer"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {item.tag && (
                      <span className="absolute left-3 top-3 rounded-full bg-cream-base/90 px-3 py-1 text-xs font-medium text-espresso-ink backdrop-blur-sm">
                        {item.tag}
                      </span>
                    )}
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
                    <div className="mt-auto flex items-center justify-between pt-2">
                      <span className="font-serif text-lg font-bold text-oak-accent">
                        ${item.price}
                      </span>
                      <span className="text-xs text-on-surface-variant">
                        {item.category}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {filtered.length === 0 && (
              <div className="py-20 text-center">
                <span className="material-symbols-outlined text-4xl text-surface-variant">
                  search_off
                </span>
                <p className="mt-4 text-on-surface-variant">No items found in this category.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
