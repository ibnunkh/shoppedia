'use client'

const ServicesInfo = () => {
    return (
        <section className="grid grid-cols-1 mt-4 mb-4 px-4 sm:grid-cols-3 gap-4 text-center">
            <div className="bg-gray-200 p-4 rounded-lg">
                <h4 className="font-semibold">🚚 Pengiriman Cepat</h4>
                <p className="text-sm text-gray-600">1-3 hari sampai rumahmu!</p>
            </div>

            <div className="bg-gray-200 p-4 rounded-lg">
                <h4 className="font-semibold">🔒 Pembayaran Aman</h4>
                <p className="text-sm text-gray-600">Melalui e-wallet atau transfer</p>
            </div>

            <div className="bg-gray-200 p-4 rounded-lg">
                <h4 className="font-semibold">🔄️ Garansi 7 hari</h4>
                <p className="text-sm text-gray-600">Uang kembali jika barang tidak sesuai</p>
            </div>
        </section>
    )
}

export default ServicesInfo