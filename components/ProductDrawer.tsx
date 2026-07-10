'use client'

import { useState, useEffect, startTransition } from 'react'
import Image from 'next/image'
import { X, Minus, Plus } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function ProductDrawer() {
  const { selectedProduct, isDrawerOpen, closeDrawer } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    if (isDrawerOpen) {
      startTransition(() => setQuantity(1))
      requestAnimationFrame(() => setAnimate(true))
      document.body.style.overflow = 'hidden'
    } else {
      startTransition(() => setAnimate(false))
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isDrawerOpen])

  if (!selectedProduct) return null

  const totalPrice = selectedProduct.price * quantity

  return (
    <>
      {isDrawerOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-300"
          onClick={closeDrawer}
        />
      )}
      <div
        className={`fixed right-0 top-0 z-50 h-full w-full max-w-md bg-cream-base shadow-2xl transition-transform duration-300 ease-out ${
          animate ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-espresso-ink/10 px-6 py-4">
            <h2 className="font-serif text-xl font-semibold text-espresso-ink">
              {selectedProduct.name}
            </h2>
            <button
              onClick={closeDrawer}
              className="rounded-full p-2 text-on-surface-variant transition-colors hover:bg-espresso-ink/5 hover:text-espresso-ink"
              aria-label="Close drawer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6">
            <div className="relative mb-6 aspect-[4/3] w-full overflow-hidden rounded-2xl">
              <Image
                src={selectedProduct.image}
                alt={selectedProduct.name}
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="mb-6 text-base leading-relaxed text-on-surface-variant">
              {selectedProduct.description}
            </p>

            <div className="mb-6">
              <p className="mb-3 text-sm font-medium text-espresso-ink">
                Quantity
              </p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="rounded-full border border-espresso-ink/20 p-2 text-espresso-ink transition-colors hover:bg-espresso-ink hover:text-cream-base"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="min-w-[2rem] text-center font-serif text-xl font-semibold text-espresso-ink">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="rounded-full border border-espresso-ink/20 p-2 text-espresso-ink transition-colors hover:bg-espresso-ink hover:text-cream-base"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-espresso-ink/10 px-6 py-4">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm text-on-surface-variant">Total</span>
              <span className="font-serif text-2xl font-bold text-oak-accent">
                ${totalPrice}
              </span>
            </div>
            <button
              onClick={() => {
                /* redux later */
              }}
              className="w-full rounded-full bg-espresso-ink py-3 text-sm font-medium text-cream-base transition-colors hover:bg-oak-accent"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
