import { cn } from "@/lib/utils"
import { GridPattern } from "@/components/shared"

import { ArrowRight, BookOpen, ExternalLink, GraduationCap, User } from "lucide-react"
import { Button, Container } from "@/components/ui"
import Link from "next/link"
import { ROUTES } from "@/constants"

export const HeroAbout = () => {
    return (
        <section className="relative overflow-hidden py-10 md:py-20">
            <Container className="relative z-10 flex flex-col items-center space-y-10 text-center">
                <div>
                    <div className="border-primary/20 bg-primary/10 text-primary mb-6 inline-flex items-center rounded-full border px-3 py-1 text-sm font-semibold">
                        Jańa programma
                    </div>
                    <h1 className="mb-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                        Siz ushın bilim
                        <span className="text-primary"> platforması</span>
                    </h1>
                    <p className="text-muted-foreground mx-auto max-w-[700px] md:text-xl">
                        Innovaciyalıq platformamız járdeminde talap joqarı bolǵan kásipler hám sanlı kónlikpelerdi úyreniń. Ámeliy jumıslar, qánigelerdiń járdemi hám tolıq qatnas.
                    </p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row">
                    <Button size="lg" asChild>
                        <Link href={ROUTES.COURSES.ROOT}>
                            Oqıwdı baslaw
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="gap-2" asChild>
                        <a href="#">
                            Videonı kóriw
                            <ExternalLink className="h-4 w-4" />
                        </a>
                    </Button>
                </div>

            </Container>
            <GridPattern className={cn(
                "mask-[radial-gradient(600px_circle_at_center,white,transparent)]",
                "skew-6")} />
            <Container>
                <div className="max-w-5xl px-4 xl:px-0 py-10 mx-auto">
                    <div className="border rounded-xl">
                        <div className="p-4 lg:p-8 rounded-xl">
                            <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-y-20 gap-x-12">
                                {/* Stats */}
                                <div className="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-border before:rotate-60 sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:translate-x-0 before:mt-3.5 sm:before:mt-0">
                                    <GraduationCap className="shrink-0 size-6 sm:size-8 mx-auto" />
                                    <div className="mt-3 sm:mt-5">
                                        <h3 className="text-lg sm:text-3xl font-semibold">
                                            150+
                                        </h3>
                                        <p className="mt-1 text-sm sm:text-base text-muted-foreground">
                                            Aktiv oqıwshılar
                                        </p>
                                    </div>
                                </div>
                                {/* End Stats */}


                                {/* Stats */}
                                <div className="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-border before:rotate-60 sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:translate-x-0 before:mt-3.5 sm:before:mt-0">
                                    <User className="shrink-0 size-6 sm:size-8 mx-auto" />
                                    <div className="mt-3 sm:mt-5">
                                        <h3 className="text-lg sm:text-3xl font-semibold">95%</h3>
                                        <p className="mt-1 text-sm sm:text-base text-muted-foreground">
                                            Bilim alıwdan qanaatlanıw
                                        </p>
                                    </div>
                                </div>
                                {/* End Stats */}


                                {/* Stats */}
                                <div className="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-border before:rotate-60 sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:translate-x-0 before:mt-3.5 sm:before:mt-0">
                                    <BookOpen className="shrink-0 size-6 sm:size-8 mx-auto" />
                                    <div className="mt-3 sm:mt-5">
                                        <h3 className="text-lg sm:text-3xl font-semibold">10+</h3>
                                        <p className="mt-1 text-sm sm:text-base text-muted-foreground">
                                            Kurslar
                                        </p>
                                    </div>
                                </div>
                                {/* End Stats */}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
