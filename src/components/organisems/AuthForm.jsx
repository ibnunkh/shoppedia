'use client'
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import useAuthStore from "@/stores/authStore"
import { toast } from "react-hot-toast"
import 'react-toastify/dist/ReactToastify.css'
import { FaEye, FaEyeSlash } from "react-icons/fa"

const AuthForm = ({type}) => {
    const router = useRouter();
    const isLogin = type === 'login';
    const isRegister = type === 'register';
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const { register, login } = useAuthStore();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        ...(isLogin ? {} : {name: ''}),
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isLogin) {
            if (formData.password.length < 8) {
                toast.error('Password harus memiliki minimal 8 karakter!');
                return;
            }
        }

        if (isRegister) {
            if (formData.password.length < 8) {
                toast.error('Password harus memiliki minimal 8 karakter!');
                return;
            }
        }

        if (isRegister) {
            if (formData.password !== formData.confirmPassword) {
                toast.error('Konfirmasi password tidak cocok!');
                return;
            }

            const res = register({
                name: formData.name,
                email: formData.email,
                password: formData.password,
            });

            if (res.success) {
                toast.success('Registrasi Berhasil!, silahkan login.');
                router.push('/login');
            } else {
                toast.error(res.message);
            }
        }

        if (isLogin) {
            const res = login({
                email: formData.email.trim(),
                password: formData.password.trim(),
            });

            if (res.success) {
                toast.success('Login Berhasil!');
                router.push('/');
            } else {
                toast.error(res.message || 'Login Gagal!');
            }
        }
    };

    return (
        <div className="p-2">
            <div className="mt-25 mb-2">
                <Link href="/">
                    <h1 className="font-bold text-2xl text-center bg-gradient-to-r from-orange-400 via-green-500 to-orange-500 text-transparent bg-clip-text hover:cursor-pointer">Shoppedia</h1>
                </Link>
            </div>
            <div className="max-w-md mx-auto p-6 rounded-xl border border-gray-200 shadow-xl">
                <h1 className="text-2xl font-bold mb-6 text-center">
                    {isLogin ? 'Login' : 'Register'}
                </h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {isLogin && (
                        <>
                            <input 
                                type="email"
                                name="email"
                                placeholder="Masukkan E-Mail"
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded" 
                            />
                            <div className="relative">
                                <input 
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    placeholder="Masukkan Password"
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded" 
                                />
                                <button type="button" className="absolute top-2.5 right-3 text-gray-500">
                                    {showPassword ? (
                                        <FaEye onClick={() => setShowPassword(!showPassword)} />
                                    ) : (
                                        <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />
                                    )}
                                </button>
                            </div>
                        </>
                    )}
                    {isRegister && (
                        <>
                            <input 
                                type="text"
                                name="name"
                                placeholder="Masukkan Nama Lengkap"
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded" 
                            />
                            <input 
                                type="email"
                                name="email"
                                placeholder="Masukkan E-Mail"
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded" 
                            />
                            <div className="relative">
                                <input 
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    placeholder="Masukkan Password"
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded" 
                                />
                                <button type="button" className="absolute top-2.5 right-3 text-gray-500">
                                    {showPassword ? (
                                        <FaEye onClick={() => setShowPassword(!showPassword)} />
                                    ) : (
                                        <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />
                                    )}
                                </button>
                            </div>
                            <div className="relative">
                                <input 
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    name="confirmPassword"
                                    placeholder="Masukkan Konfirmasi Password"
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded" 
                                />
                                <button type="button" className="absolute top-2.5 right-3 text-gray-500">
                                    {showConfirmPassword ? (
                                        <FaEye onClick={() => setShowConfirmPassword(!showConfirmPassword)} />
                                    ) : (
                                        <FaEyeSlash onClick={() => setShowConfirmPassword(!showConfirmPassword)} />
                                    )}
                                </button>
                            </div>
                        </>
                    )}

                        <div className="flex justify-end">
                            <button type="button" className="hover:underline hover:cursor-pointer">
                                Lupa Password?
                            </button>
                        </div>

                        <button type="submit" className="w-full bg-[#00A951] text-white py-2 rounded-lg font-bold text-md md:text-lg hover:bg-[#008A3D] hover:cursor-pointer">
                            {isLogin ? 'Login' : 'Register'}
                        </button>

                        {isLogin && (
                            <p className="text-center mt-4">
                                Belum Punya Akun? <Link href="/register" className="text-[#00A951] font-bold hover:underline">Register</Link>
                            </p>
                        )}
                        {isRegister && (
                            <p className="text-center mt-4">
                                Sudah Punya Akun? <Link href="/login" className="text-[#00A951] font-bold hover:underline">Login</Link>
                            </p>
                        )}
                </form>
            </div>
        </div>
    )
}

export default AuthForm