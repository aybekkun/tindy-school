"use client"

import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui"
import { useFilters } from "@/hooks/use-filters"
import { cn } from "@/lib/utils"
import React, { FC, Suspense } from "react"

interface Props {
	count: number
	limit?: number
	className?: string
}

export const ClientPagination: FC<Props> = ({ count, limit = 10, className = "" }) => {
	const totalPages = Math.ceil(count / limit)
	const { filters, setFilters } = useFilters()
	const currentPage = Number(filters.page ?? 1)
	const handlePageChange = (page: number) => {
		setFilters({
			...filters,
			page,
		})
	}

	const generatePagination = () => {
		if (totalPages <= 7) {
			return Array.from({ length: totalPages }, (_, i) => i + 1)
		}

		if (currentPage <= 3) {
			return [1, 2, 3, 4, "...", totalPages]
		}

		if (currentPage >= totalPages - 2) {
			return [
				1,
				"...",
				totalPages - 3,
				totalPages - 2,
				totalPages - 1,
				totalPages,
			]
		}

		return [
			1,
			"...",
			currentPage - 1,
			currentPage,
			currentPage + 1,
			"...",
			totalPages,
		]
	}

	const pagination = generatePagination()

	return (
		<Suspense fallback={<>...</>}>
			<div className={cn(className)}>
				<Pagination>
					<PaginationContent>
						{/* Previous */}
						<PaginationItem>
							<PaginationPrevious
								href={`?page=${Math.max(1, currentPage - 1)}`}
								className={
									currentPage === 1
										? "pointer-events-none opacity-50"
										: "cursor-pointer"
								}
								onClick={(e) => {
									e.preventDefault()
									handlePageChange(Math.max(1, currentPage - 1))
								}}
							/>
						</PaginationItem>

						{/* Numbers */}
						{pagination.map((page, index) => (
							<React.Fragment key={index}>
								{typeof page === "number" ? (
									<PaginationItem>
										<PaginationLink
											href={`?page=${page}`}
											className="cursor-pointer"
											isActive={page === currentPage}
											onClick={(e) => {
												e.preventDefault()
												handlePageChange(page)
											}}
										>
											{page}
										</PaginationLink>
									</PaginationItem>
								) : (
									<PaginationItem>
										<PaginationEllipsis />
									</PaginationItem>
								)}
							</React.Fragment>
						))}

						{/* Next */}
						<PaginationItem>
							<PaginationNext
								href={`?page=${Math.min(totalPages, currentPage + 1)}`}
								className={
									currentPage === totalPages
										? "pointer-events-none opacity-50"
										: "cursor-pointer"
								}
								onClick={(e) => {
									e.preventDefault()
									handlePageChange(Math.min(totalPages, currentPage + 1))
								}}
							/>
						</PaginationItem>
					</PaginationContent>
				</Pagination>
			</div>
		</Suspense>
	)
}
