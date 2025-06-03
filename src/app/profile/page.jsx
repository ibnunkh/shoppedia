import DeleteAccountButton from "@/components/organisems/DeleteAccountButton";
import Link from "next/link";

export default function ProfilePage() {
    return (
    <div className="max-w-2xl p-4">
        <h1 className="text-2xl font-semibold">Profil Saya</h1>
        <div className="flex flex-col">
            <DeleteAccountButton />
            <Link href="/">
                <button className="bg-green-500 px-4 py-2 mt-4 text-white font-semibold rounded hover:cursor-pointer hover:bg-green-600">Kembali ke Halaman utama</button>
            </Link>
        </div>
    </div>
    );
}
