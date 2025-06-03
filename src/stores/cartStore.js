// src/stores/cartStore.js
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useCartStore = create(persist(
  (set) => ({
    cart: [],

    addToCart: (product) => {
      set((state) => {
        const existing = state.cart.find(item => item.id === product.id)
        if (existing) {
          return {
            cart: state.cart.map(item =>
              item.id === product.id
                ? { ...item, qty: item.qty + (product.qty || 1) }
                : item
            )
          }
        }
        return { cart: [...state.cart, { ...product, qty: product.qty || 1 }] }
      })
    },

    updateQty: (id, amount) => {
      set((state) => ({
        cart: state.cart
          .map(item =>
            item.id === id
              ? { ...item, qty: item.qty + amount }
              : item
          )
          .filter(item => item.qty > 0) // otomatis hapus item jika qty <= 0
      }))
    },

    removeItem: (id) => {
      set((state) => ({
        cart: state.cart.filter(item => item.id !== id)
      }))
    },

    clearCart: () => {
      set({ cart: [] })
    }
  }),
  {
    name: 'cart-storage', // nama key di localStorage
  }
))

export default useCartStore
