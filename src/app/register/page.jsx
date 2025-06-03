import AuthForm from "@/components/organisems/AuthForm"
import AuthLayout from "@/layouts/AuthLayout"

const RegisterPage = () => {
    return (
        <AuthLayout>
            <AuthForm type="register" />
        </AuthLayout>
    )
}

export default RegisterPage