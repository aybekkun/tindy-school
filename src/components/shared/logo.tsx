import { ROUTES } from '@/constants'
import { cn } from '@/lib/utils'
import { BookOpenCheck } from 'lucide-react'
import Link from 'next/link'

type Props = {
    className?: string
}
export const Logo = ({ className }: Props) => {
    return (
        <Link href={ROUTES.HOME} className={cn(" flex items-center gap-x-3 text-xl font-bold text-primary", className)}>
            <BookOpenCheck className="size-8" />
            Tindy
        </Link>
    )
}
