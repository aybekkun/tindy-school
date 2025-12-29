import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui"
import { ICourse } from "@/services/course"

type Props = {
	creator: ICourse["creator"]
}

export const CourseInstructor = ({ creator }: Props) => {
	return (
		<div className="flex items-center gap-4">
			<Avatar className="h-14 w-14 border-2 border-background">
				<AvatarImage
					src={creator?.avatar || ""}
					alt={creator?.first_name || ""}
				/>
				<AvatarFallback>{creator?.first_name?.[0]}</AvatarFallback>
			</Avatar>
			<div className="space-y-1">
				<h4 className="font-semibold leading-none text-lg">
					{creator?.first_name} {creator?.last_name}
				</h4>
				<p className="text-sm text-muted-foreground">
					<span className="font-medium text-foreground">{creator?.bio}</span>
				</p>
			</div>
		</div>
	)
}
