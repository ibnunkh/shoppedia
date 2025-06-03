import AuthForm from "@/components/organisems/AuthForm"
import AuthLayout from "@/layouts/AuthLayout"

const LoginPage = () => {
    return (
        <AuthLayout>
            <AuthForm type="login" />
        </AuthLayout>
    )
}

export default LoginPage