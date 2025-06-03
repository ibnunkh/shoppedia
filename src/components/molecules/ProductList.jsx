'use client'
import Image from "next/image"
import useCartStore from "@/stores/cartStore"
import toast from "react-hot-toast"
import useFilterStore from "@/stores/filterStore"

const products = [
    { id: 1, name: 'Laptop Pear', category: 'Elektronik', price: 9900000, image: '/images/laptop.jpg' },
    { id: 2, name: 'Sepatu Adidaw', category: 'Fashion', price: 499000, image: '/images/sneakers.jpg' },
    { id: 3, name: 'Meja Kerja', category: 'Rumah Tangga', price: 549000, image: '/images/meja.jpg' },
]

const ProductList = () => {
    const addToCart = useCartStore(state => state.addToCart)
    const selectedCategory = useFilterStore(state => state.selectedCategory)

    const filteredProducts = !selectedCategory || selectedCategory === 'Semua' ? products : products.filter(p => p.category === selectedCategory)

    const handleAddToCart = (product) => {
        addToCart({ ...product, qty: 1 })
        toast.success(`${product.name} berhasil ditambahkan ke keranjang!`, {
            duration: 4000,
        })
    }

    return (
        <section className="p-6 mt-4 mb-4">
            <h2 className="text-xl font-semibold mb-4">Produk Unggulan</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {filteredProducts.map(product => (
                    <div key={product.id} className="border border-gray-300 p-2 rounded-lg overflow-hidden shadow-md bg-white duration-300 hover:scale-105 hover:cursor-pointer hover:shadow-lg">
                        <Image src={product.image} alt={product.name} width={500} height={300} className="w-full h-56 object-cover" />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold">{product.name}</h3>
                            <p className="text-sm text-gray-500 mb-2">Rp. {product.price.toLocaleString('id-ID')}</p>
                            <button onClick={() => handleAddToCart(product)} className="bg-green-500 text-white px-4 py-2 rounded hover:cursor-pointer hover:bg-green-600 text-sm">
                                Tambah ke Keranjang
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ProductList