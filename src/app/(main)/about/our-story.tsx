import { Container } from "@/components/ui"

export const OurStory = () => {
    return (
        <section className="py-7 bg-muted md:py-20 md:pb-24">
            <Container>
                <div className="flex flex-col items-center md:flex-row gap-12">

                    {/* Image */}
                    <div className="relative w-full md:w-1/2">
                        <img
                            src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Students learning"
                            className="rounded-lg"
                        />
                    </div>

                    {/* Content */}
                    <div className="w-full md:w-1/2">
                        <h2 className="mb-4 text-2xl font-semibold md:text-3xl lg:text-4xl">
                            Bilim alıw nátiyjeliligin arttırıń
                        </h2>

                        <p className="text-muted-foreground mb-6 text-lg">
                            Platformamız járdeminde talap joqarı bolǵan kásipler hám sanlı kónlikpelerdi úyreniń. Ámeliy jumıslar, qánigelerdiń járdemi hám tolıq qatnas.
                        </p>

                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <span className="bg-primary flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white">
                                    <span className="text-sm font-bold">✓</span>
                                </span>
                                <span className="text-muted-foreground">Zamanagóy oqıtıw usılları</span>
                            </li>

                            <li className="flex items-start gap-3">
                                <span className="bg-primary flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white">
                                    <span className="text-sm font-bold">✓</span>
                                </span>
                                <span className="text-muted-foreground">Qánigelerdiń járdemi</span>
                            </li>

                            <li className="flex items-start gap-3">
                                <span className="bg-primary flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white">
                                    <span className="text-sm font-bold">✓</span>
                                </span>
                                <span className="text-muted-foreground">Qolaylı bilimlendiriw formatları</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* SECOND BLOCK */}
                <div className="mt-20 flex flex-col items-center md:flex-row gap-12">

                    {/* Content */}
                    <div className="w-full md:w-1/2">
                        <h2 className="mb-4 text-2xl font-semibold md:text-3xl lg:text-4xl">
                            Aqıllı oqıw quralları
                        </h2>

                        <p className="text-muted-foreground mb-6 text-lg">
                            Waqıttı únemleń hám nátiyjeli úyreniń. Biziń sanlı sheshimlerimiz processti qáliplestiriw hám onıń barısın baqlap barıwǵa járdem beredi.
                        </p>

                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <span className="bg-primary flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white">
                                    <span className="text-sm font-bold">✓</span>
                                </span>
                                <span className="text-muted-foreground">TOP kurslar</span>
                            </li>

                            <li className="flex items-start gap-3">
                                <span className="bg-primary flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white">
                                    <span className="text-sm font-bold">✓</span>
                                </span>
                                <span className="text-muted-foreground">Oqıwshınıń rawajlanıw analitikası</span>
                            </li>

                            <li className="flex items-start gap-3">
                                <span className="bg-primary flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white">
                                    <span className="text-sm font-bold">✓</span>
                                </span>
                                <span className="text-muted-foreground">Interaktiv va praktik oqıw</span>
                            </li>
                        </ul>
                    </div>

                    {/* Image */}
                    <div className="relative w-full md:w-1/2">
                        <img
                            src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Learning tools"
                            className="rounded-lg"
                        />
                    </div>
                </div>
            </Container>
        </section>
    )
}
