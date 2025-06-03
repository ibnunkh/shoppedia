'use client'
import Image from "next/image"
import useFilterStore from "@/stores/filterStore"

const categories = [
    { name: 'Semua', icon: '/icons/all.svg' },
    { name: 'Elektronik', icon: '/icons/laptop-solid.svg' },
    { name: 'Fashion', icon: '/icons/shirt-solid.svg' },
    { name: 'Rumah Tangga', icon: '/icons/house-solid.svg' },
]

const CategoryList = () => {
    const setCategory = useFilterStore(state => state.setCategory)
    const selectedCategory = useFilterStore(state => state.selectedCategory)

    return (
        <section className="p-6 mt-4">
            <h2 className="text-2xl font-semibold mb-4 font-montserrat">Kategori</h2>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4 w-full md:w-xl hover:cursor-pointer">
                {categories.map((cat, i) => (
                    <div key={i} onClick={() => setCategory(cat.name)} className={`flex flex-col items-center p-4 bg-white shadow-md border rounded-lg ${
                            selectedCategory === cat.name ? 'border-orange-500' : 'border-gray-300'
                        } hover:shadow-lg`}>
                        <Image src={cat.icon} alt={cat.name} width={40} height={40} />
                        <p className="mt-2 text-sm font-medium">{cat.name}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default CategoryList