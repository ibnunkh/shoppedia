"use client";
import useAuthStore from "@/stores/authStore";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

const DeleteAccountButton = () => {
  const { user, deleteUser } = useAuthStore();
  const router = useRouter();

  const handleDelete = () => {
    if (confirm("Yakin ingin menghapus akun ini?")) {
      const res = deleteUser();
      if (res.success) {
        toast.success("Akun berhasil dihapus");
        router.push("/register");
      } else {
        toast.error(res.message || "Gagal menghapus akun");
      }
    }
  };

  if (!user) return null;

  return (
    <button
      onClick={handleDelete}
      className="mt-4 w-30 px-2 py-2 font-semibold bg-red-500 text-white hover:bg-red-600 rounded hover:cursor-pointer"
    >
      Hapus Akun
    </button>
  );
};

export default DeleteAccountButton;
