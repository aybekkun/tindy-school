import { ReactNode } from "react"

import { AuthGuard } from "./auth-guard"
import { AuthProvider } from "./auth-provider"
import { TanstackQueryProvider } from "./tanstack-query-provider"

export const Providers = ({ children }: { children: ReactNode }) => {
	return (
		<TanstackQueryProvider>
			<AuthProvider>{children}</AuthProvider>
		</TanstackQueryProvider>
	)
}

export { AuthGuard }
