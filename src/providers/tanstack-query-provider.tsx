"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { type ReactNode, useState } from "react"
import { Toaster } from "sonner"

export function TanstackQueryProvider({ children }: { children: ReactNode }) {
	const [client] = useState(
		new QueryClient({
			defaultOptions: {
				queries: {
					staleTime: Infinity,
					refetchInterval: false,
					refetchOnWindowFocus: false,
					refetchOnReconnect: false,
					refetchOnMount: false,
				},
			},
		})
	)

	return (
		<QueryClientProvider client={client}>
			{children}
			<Toaster richColors position="top-center" />
		</QueryClientProvider>
	)
}
