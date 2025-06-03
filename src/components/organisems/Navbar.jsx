'use client'
import Image from "next/image"
import Link from "next/link"
import useCartStore from "@/stores/cartStore"
import useAuthStore from "@/stores/authStore"
import { useRouter } from "next/navigation"
import { toast } from "react-hot-toast"
import { useState } from "react"

const Navbar = () => {
    const router = useRouter()
    const cart = useCartStore(state => state.cart)
    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0)

    const { user, logout } = useAuthStore()
    const [menuOpen, setMenuOpen] = useState(false)

    const handleLogout = () => {
        logout()
        toast.success('Logout Berhasil')
        router.push('/')
    }

    return (
        <div className="w-full fixed top-0 left-0 z-50 bg-white shadow-sm border-b border-b-gray-200">
            <div className="w-full max-w-7xl mx-auto py-4 px-6">
                <nav className="flex flex-row justify-between items-center gap-2 md:gap-4">
                    <div className="w-full hidden md:block md:w-40">
                        <h1 className="text-3xl md:text-3xl font-semibold bg-gradient-to-r from-orange-400 via-green-400 to-green-500 text-transparent bg-clip-text">Shoppedia</h1>    
                    </div>

                    <div className="w-72 relative md:w-8/12">
                        <form>
                            <div className="flex items-center w-full">
                                <input 
                                    type="search"
                                    placeholder="Cari Produk/Nama Toko"
                                    className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-gray-100 focus:border-gray-100 outline-gray-100" 
                                />
                                <button 
                                    type="submit" 
                                    className="text-white absolute right-2 md:right-2 bottom-0.5 font-medium text-sm px-2 py-2">
                                        <Image 
                                            src="/icons/search.svg" 
                                            alt="search"
                                            width={20}
                                            height={20}
                                        />
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="flex items-center justify-end relative gap-4">
                        <Link href="/cart" className="relative">
                            <div className="flex items-center">
                                <Image
                                    src="/icons/cart.svg"
                                    alt="cart"
                                    width={30}
                                    height={30} 
                                />
                                {totalQty > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                                        {totalQty}
                                    </span>
                                )}
                            </div>
                        </Link>

                        {user ? (
                            <div className="hidden md:flex items-center gap-2">
                                <span className="text-md font-medium hidden md:block">Hi, {user.name}</span>
                                <Link href="/profile">
                                    <button className="bg-green-500 text-white font-semibold px-3 py-2 md:px-3 rounded-lg hover:bg-green-600 hover:cursor-pointer">
                                        Lihat Profil
                                    </button>
                                </Link>
                            </div>
                        ) : (
                            <Link href="/login">
                                <button className="bg-orange-500 text-white hidden md:block font-semibold py-3 px-2 md:px-5 rounded-lg hover:bg-orange-600 hover:cursor-pointer">
                                    Login/Daftar
                                </button>
                            </Link>
                        )}

                        <div className="md:hidden">
                            <button onClick={() => setMenuOpen(!menuOpen)} className="hover:cursor-pointer">
                                {menuOpen ? <Image src="/icons/xmark-solid.svg" alt="xmark" width={30} height={30} /> : <Image src="/icons/bars-v2.svg" alt="bars" width={30} height={30} />}
                            </button>
                            {menuOpen && (
                                <div className="absolute right-0 mt-4 w-38 justify-center bg-white border border-gray-300 shadow-md rounded p-4 z-90">
                                    {user ? (
                                        <div className="flex flex-col gap-2">
                                            <span className="text-sm font-medium">Hi, {user.name}</span>
                                            <button 
                                                onClick={() => {
                                                    handleLogout()
                                                    setMenuOpen(false)
                                                }} 
                                                className="bg-red-500 text-white font-semibold px-3 py-2 md:px-5 rounded-lg hover:bg-red-600 hover:cursor-pointer"
                                                >
                                                    Logout
                                                </button>
                                        </div>
                                    ) : (
                                        <Link href="/login" onClick={() => setMenuOpen(false)}>
                                            <button className="bg-orange-500 text-white text-sm  font-semibold py-2 px-4 md:px-5 rounded-lg hover:bg-orange-600 hover:cursor-pointer">
                                                Login/Daftar
                                            </button>
                                        </Link>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar