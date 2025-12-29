import { cn } from "@/lib/utils"

type Props = {
    url?: string
    className?: string
}
const VideoPlayer = ({ url, className }: Props) => {
    const embedUrl = url?.replace("https://youtu.be/", "https://www.youtube.com/embed/")
        .replace("watch?v=", "embed/")
    return (
        <div className={cn('aspect-video', className)}>
            <iframe
                width="100%"
                height="100%"
                src={embedUrl}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
            />
        </div>
    )
}

export { VideoPlayer }