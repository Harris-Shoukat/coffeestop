'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

export interface DrawerProduct {
  name: string
  description: string
  price: number
  image: string
  rating: number
}

interface CartContextType {
  selectedProduct: DrawerProduct | null
  isDrawerOpen: boolean
  openDrawer: (product: DrawerProduct) => void
  closeDrawer: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [selectedProduct, setSelectedProduct] = useState<DrawerProduct | null>(
    null,
  )
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const openDrawer = (product: DrawerProduct) => {
    setSelectedProduct(product)
    setIsDrawerOpen(true)
  }

  const closeDrawer = () => {
    setIsDrawerOpen(false)
  }

  return (
    <CartContext.Provider
      value={{ selectedProduct, isDrawerOpen, openDrawer, closeDrawer }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within a CartProvider')
  return context
}
