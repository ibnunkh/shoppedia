'use client'

const NewsletterCTA = () => {
    return (
        <section className="bg-green-100 px-6 py-8 text-center rounded-xl">
            <h2 className="text-lg font-semibold">Dapatkan penawaran terbaik setiap minggu!</h2>
            <p className="text-sm text-gray-600 mb-4">Masukkan email kamu dibawah untuk berlangganan.</p>
            <div className="flex flex-col sm:flex-grow gap-2 justify-center max-w-md mx-auto">
                <input type="email" placeholder="Email kamu" className="w-full p-2 rounded border border-gray-300" />
                <button type="button" className="bg-orange-500 text-white w-1/2 mx-auto px-4 py-2 rounded hover:bg-orange-600 hover:cursor-pointer">Langganan</button>
            </div>
        </section>
    )
}

export default NewsletterCTA