"use client"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import parser from "html-react-parser"
import { AlertTriangle, Check, RotateCcw, X } from "lucide-react"
import { useState, type JSX } from "react"

interface EditorBlock {
	id: string
	type: string
	data: any
}

interface EditorData {
	time?: number
	blocks: EditorBlock[]
	version?: string
}

interface EditorDataParserProps {
	data: string | EditorData | EditorBlock[]
}

export function EditorDataParser({ data }: EditorDataParserProps) {
	let blocks: EditorBlock[] | null = null

	if (typeof data === "string") {
		try {
			const parsed = JSON.parse(data)
			blocks = Array.isArray(parsed) ? parsed : parsed?.blocks || null
		} catch {
			// If not JSON, render as plain HTML
			return (
				<div className="prose prose-neutral max-w-none dark:prose-invert">
					{parser(data)}
				</div>
			)
		}
	} else {
		blocks = Array.isArray(data) ? data : data?.blocks || null
	}

	if (!blocks || !Array.isArray(blocks)) {
		return null
	}

	return (
		<div className="space-y-6 prose prose-neutral max-w-none dark:prose-invert">
			{blocks.map((block, index) => (
				<BlockRenderer key={block.id || index} block={block} />
			))}
		</div>
	)
}

function BlockRenderer({ block }: { block: EditorBlock }) {
	switch (block.type) {
		case "header":
			return <HeaderBlock data={block.data} />
		case "paragraph":
			return <ParagraphBlock data={block.data} />
		case "list":
			return <ListBlock data={block.data} />
		case "checklist":
			return <ChecklistBlock data={block.data} />
		case "code":
			return <CodeBlock data={block.data} />
		case "quote":
			return <QuoteBlock data={block.data} />
		case "delimiter":
			return <DelimiterBlock />
		case "warning":
			return <WarningBlock data={block.data} />
		case "table":
			return <TableBlock data={block.data} />
		case "image":
			return <ImageBlock data={block.data} />
		case "embed":
			return <EmbedBlock data={block.data} />
		case "raw":
			return <RawBlock data={block.data} />
		case "linkTool":
			return <LinkToolBlock data={block.data} />
		default:
			return null
	}
}

function HeaderBlock({ data }: { data: any }) {
	const { text, level = 1 } = data
	const Tag = `h${level}` as keyof JSX.IntrinsicElements
	const sizeClasses = {
		1: "text-4xl font-bold mb-6",
		2: "text-3xl font-bold mb-4",
		3: "text-2xl font-semibold mb-3",
		4: "text-xl font-semibold mb-2",
		5: "text-lg font-semibold mb-2",
		6: "text-base font-semibold mb-2",
	}

	return (
		<Tag
			className={`${
				sizeClasses[level as keyof typeof sizeClasses]
			} text-balance not-prose`}
		>
			<span>{parser(text)}</span>
		</Tag>
	)
}

function ParagraphBlock({ data }: { data: any }) {
	const { text } = data
	if (!text) return null
	return (
		<p className="text-base leading-relaxed text-pretty">
			<span>{parser(text)}</span>
		</p>
	)
}

function ListBlock({ data }: { data: any }) {
	const { style, items } = data
	const ListTag = style === "ordered" ? "ol" : "ul"
	const listClass = style === "ordered" ? "list-decimal" : "list-disc"

	if (style === "checklist") {
		return <InteractiveChecklist items={items} isListBlock />
	}

	return (
		<ListTag className={`${listClass} pl-6 space-y-2`}>
			{items.map((item: any, index: number) => {
				const content = item.content || item.text || item
				return (
					<li key={index} className="leading-relaxed">
						<span>{parser(content)}</span>
						{item.items && item.items.length > 0 && (
							<ListBlock data={{ style, items: item.items }} />
						)}
					</li>
				)
			})}
		</ListTag>
	)
}

function ChecklistBlock({ data }: { data: any }) {
	return <InteractiveChecklist items={data.items} />
}

function InteractiveChecklist({
	items,
	isListBlock = false,
}: {
	items: any[]
	isListBlock?: boolean
}) {
	const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

	const handleRetry = () => {
		setSelectedIndex(null)
	}

	return (
		<div className="space-y-3 not-prose">
			<div className="space-y-2">
				{items.map((item: any, index: number) => {
					const isCorrect = isListBlock ? item.meta?.checked : item.checked
					const isSelected = selectedIndex === index
					const text = isListBlock ? item.content || item.text : item.text

					let bgColor = "hover:bg-accent/50 border-muted-foreground/30"
					let iconColor = "border-muted-foreground/30 text-transparent"
					let Icon = Check

					if (selectedIndex !== null) {
						if (isCorrect) {
							// Show correct answer in green
							bgColor =
								"bg-green-500/10 border-green-500 text-green-700 dark:text-green-400"
							iconColor = "bg-green-500 border-green-500 text-white"
						} else if (isSelected) {
							// Show user's wrong choice in red
							bgColor =
								"bg-red-500/10 border-red-500 text-red-700 dark:text-red-400"
							iconColor = "bg-red-500 border-red-500 text-white"
							Icon = X
						}
					}

					return (
						<button
							key={index}
							onClick={() => setSelectedIndex(index)}
							disabled={selectedIndex !== null}
							className={`w-full flex items-start gap-3 p-3 rounded-lg border transition-all text-left ${bgColor} ${
								selectedIndex !== null ? "cursor-default" : "cursor-pointer"
							}`}
						>
							<div
								className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${iconColor}`}
							>
								<Icon className="h-3 w-3" />
							</div>
							<span className="flex-1 leading-relaxed">{parser(text)}</span>
						</button>
					)
				})}
			</div>

			{selectedIndex !== null && (
				<button
					onClick={handleRetry}
					className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-1 py-2"
				>
					<RotateCcw className="h-4 w-4" />
					Повторить
				</button>
			)}
		</div>
	)
}

function CodeBlock({ data }: { data: any }) {
	const { code } = data

	return (
		<pre className="bg-muted p-4 rounded-lg overflow-x-auto border not-prose">
			<code className="text-sm font-mono">{code}</code>
		</pre>
	)
}

function QuoteBlock({ data }: { data: any }) {
	const { text, caption } = data

	return (
		<blockquote className="border-l-4 border-primary pl-6 py-2 italic my-6">
			<p className="text-lg mb-2">{parser(text)}</p>
			{caption && (
				<footer className="text-sm text-muted-foreground not-italic">
					— {caption}
				</footer>
			)}
		</blockquote>
	)
}

function DelimiterBlock() {
	return (
		<div className="flex justify-center items-center gap-2 py-8 not-prose">
			<div className="h-1.5 w-1.5 rounded-full bg-muted-foreground/30" />
			<div className="h-1.5 w-1.5 rounded-full bg-muted-foreground/30" />
			<div className="h-1.5 w-1.5 rounded-full bg-muted-foreground/30" />
		</div>
	)
}

function WarningBlock({ data }: { data: any }) {
	const { title, message } = data

	return (
		<Alert variant="destructive" className="not-prose my-4">
			<AlertTriangle className="h-4 w-4" />
			<AlertTitle>{title}</AlertTitle>
			<AlertDescription>{message}</AlertDescription>
		</Alert>
	)
}

function TableBlock({ data }: { data: any }) {
	const { content, withHeadings = false } = data

	if (!content || !Array.isArray(content)) {
		return null
	}

	return (
		<div className="overflow-x-auto rounded-lg border my-6 not-prose">
			<table className="w-full">
				{withHeadings && content.length > 0 && (
					<thead className="bg-muted">
						<tr>
							{content[0].map((cell: string, index: number) => (
								<th
									key={index}
									className="px-4 py-3 text-left font-semibold border-b"
								>
									{cell}
								</th>
							))}
						</tr>
					</thead>
				)}
				<tbody>
					{(withHeadings ? content.slice(1) : content).map(
						(row: string[], rowIndex: number) => (
							<tr key={rowIndex} className="border-b last:border-0">
								{row.map((cell: string, cellIndex: number) => (
									<td key={cellIndex} className="px-4 py-3">
										{cell}
									</td>
								))}
							</tr>
						)
					)}
				</tbody>
			</table>
		</div>
	)
}

function ImageBlock({ data }: { data: any }) {
	const { file, caption, withBorder, withBackground, stretched } = data

	return (
		<figure
			className={`${stretched ? "w-full" : "max-w-3xl mx-auto"} my-8 not-prose`}
		>
			<img
				src={file?.url || "/placeholder.svg"}
				alt={caption || ""}
				className={`w-full h-auto rounded-lg ${withBorder ? "border-2" : ""} ${
					withBackground ? "bg-muted p-4" : ""
				}`}
			/>
			{caption && (
				<figcaption className="text-sm text-muted-foreground text-center mt-3">
					{caption}
				</figcaption>
			)}
		</figure>
	)
}

function EmbedBlock({ data }: { data: any }) {
	const { embed, caption } = data

	return (
		<figure className="max-w-3xl mx-auto my-8 not-prose">
			<div className="aspect-video rounded-lg overflow-hidden bg-black">
				{parser(embed)}
			</div>
			{caption && (
				<figcaption className="text-sm text-muted-foreground text-center mt-3">
					{caption}
				</figcaption>
			)}
		</figure>
	)
}

function RawBlock({ data }: { data: any }) {
	const { html } = data
	return <div className="raw-html-content my-6">{parser(html)}</div>
}

function LinkToolBlock({ data }: { data: any }) {
	const { link, meta } = data
	const title = meta?.title || link
	const description = meta?.description
	const image = meta?.image?.url

	return (
		<a
			href={link}
			target="_blank"
			rel="noopener noreferrer"
			className="flex flex-col sm:flex-row gap-4 p-4 rounded-xl border bg-card hover:bg-accent/50 transition-colors no-underline my-6 not-prose"
		>
			{image && (
				<div className="shrink-0 w-full sm:w-48 h-32 rounded-lg overflow-hidden bg-muted">
					<img src={image} alt="" className="w-full h-full object-cover" />
				</div>
			)}
			<div className="flex flex-col justify-center gap-1 overflow-hidden">
				<h4 className="font-semibold text-primary truncate leading-tight">
					{title}
				</h4>
				{description && (
					<p className="text-sm text-muted-foreground line-clamp-2 leading-snug">
						{description}
					</p>
				)}
				<span className="text-xs text-muted-foreground/60 truncate mt-1">
					{new URL(link).hostname}
				</span>
			</div>
		</a>
	)
}
