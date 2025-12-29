import { AuthLayout } from "@/components/layout/auth-layout"
import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "Authentication | Online School",
	description: "Sign in or create an account",
}

const Layout = ({ children }: { children: React.ReactNode }) => {
	return <AuthLayout>{children}</AuthLayout>
}

export default Layout
