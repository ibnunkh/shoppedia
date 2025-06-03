'use client'
import Image from "next/image"
import useCartStore from "@/stores/cartStore"
import Link from "next/link"

const Cart = () => {
  const cart = useCartStore(state => state.cart)
  const updateQty = useCartStore(state => state.updateQty)
  const removeItem = useCartStore(state => state.removeItem)
  const clearCart = useCartStore(state => state.clearCart)

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0)

  return (
    <section className="max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-lg border border-gray-300">
      <h2 className="text-xl font-semibold mb-4">Keranjang Belanja</h2>

      {cart.length === 0 ? (
        <p className="text-gray-600">Keranjang Kosong</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map(item => (
              <div key={item.id} className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b pb-4">
                <div className="flex items-center gap-4 w-full sm:w-2/3">
                  <Image src={item.image} alt={item.name} width={80} height={80} className="rounded-lg" />
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-500">Rp. {item.price.toLocaleString('id-ID')}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button onClick={() => updateQty(item.id, -1)} className="px-2 py-1 bg-gray-200 rounded hover:cursor-pointer">-</button>
                  <span>{item.qty}</span>
                  <button onClick={() => updateQty(item.id, 1)} className="px-2 py-1 bg-gray-200 rounded hover:cursor-pointer">+</button>
                </div>

                <div className="flex items-center gap-2">
                  <p className="font-semibold hidden sm:block">
                    Rp. {(item.price * item.qty).toLocaleString('id-ID')}
                  </p>
                  <button onClick={() => removeItem(item.id)} className="text-red-500 hover:underline text-sm hover:cursor-pointer">Hapus</button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-lg font-semibold">
              Total: Rp. {total.toLocaleString('id-ID')}
            </p>
            <div className="flex gap-4">
              <button onClick={clearCart} className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 text-sm text-white hover:cursor-pointer">
                Kosongkan
              </button>
              <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 hover:cursor-pointer">
                Checkout Sekarang
              </button>
            </div>
          </div>
        </>
      )}

      <div className="w-full flex items-center justify-start mt-6">
        <Link href="/">
          <button className="bg-green-500 px-4 py-2 text-white font-semibold rounded-lg hover:bg-green-600 hover:cursor-pointer">Kembali ke halaman utama</button>
        </Link>
      </div>
    </section>
  )
}

export default Cart
