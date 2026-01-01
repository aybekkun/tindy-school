import { LoginForm } from "@/components/screens/auth"
import { Suspense } from "react"

const LoginPage = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<LoginForm />
		</Suspense>
	)
}

export default LoginPage
