import { SidebarProvider } from "@/components/ui"

const StudentLayout = ({ children }: { children: React.ReactNode }) => {
	return <SidebarProvider>{children}</SidebarProvider>
}
export default StudentLayout
