import { Container } from "@/components/ui"
import { Lightbulb, ShieldCheck, Users } from "lucide-react"

export const OurValues = () => {
    return (
        <section className="py-16 md:py-24">
            <Container>

                {/* Mission Statement Header */}
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                        Oqıw orayınıń missiyası
                    </h2>
                    <p className="text-muted-foreground mx-auto max-w-3xl text-lg md:text-xl">
                        Biz zamanagóy hám sapalı bilim beriwge umtılamız.
                        oqıwshılarǵa talap joqarı bolǵan kónlikpelerdi rawajlandırıwǵa járdem berip
                        tańlaǵan tarawında tabıslı jumıs islewge jol ashıp beriw.
                    </p>
                </div>

                {/* Three Pillars */}
                <div className="grid gap-8 md:grid-cols-3">

                    {/* Pillar 1 */}
                    <div className="bg-card flex flex-col items-center rounded-lg border p-8 text-center shadow-sm transition-all hover:shadow-md">
                        <div className="bg-primary/10 text-primary flex h-14 w-14 items-center justify-center rounded-full">
                            <ShieldCheck className="h-7 w-7" />
                        </div>
                        <h3 className="mt-6 text-xl font-semibold">Bilim beriw sapası</h3>
                        <p className="text-muted-foreground mt-3">
                            Biz oqıtıwdıń joqarı dárejesin, zamanagóy oqıw materialların hám oqıtıwdıń hár bir basqıshında individual qatnastı támiyinleymiz.
                        </p>
                    </div>

                    {/* Pillar 2 */}
                    <div className="bg-card flex flex-col items-center rounded-lg border p-8 text-center shadow-sm transition-all hover:shadow-md">
                        <div className="bg-primary/10 text-primary flex h-14 w-14 items-center justify-center rounded-full">
                            <Lightbulb className="h-7 w-7" />
                        </div>
                        <h3 className="mt-6 text-xl font-semibold">Innovaciyalıq kózqaras</h3>
                        <p className="text-muted-foreground mt-3">
                            Biz zamanagóy oqıtıw metodikaları, sanlı qurallar hám ámeliyatqa baǵdarlanǵan formatlardı engizip, oqıw procesin nátiyjeli hám qızıqlı etpektemiz.
                        </p>
                    </div>

                    {/* Pillar 3 */}
                    <div className="bg-card flex flex-col items-center rounded-lg border p-8 text-center shadow-sm transition-all hover:shadow-md">
                        <div className="bg-primary/10 text-primary flex h-14 w-14 items-center justify-center rounded-full">
                            <Users className="h-7 w-7" />
                        </div>
                        <h3 className="mt-6 text-xl font-semibold">Qollap-quwatlaw</h3>
                        <p className="text-muted-foreground mt-3">
                            Biz hár bir student ustazlardıń járdemin alatuǵın, qolaylı pátte rawajlanatuǵın hám pikirlesleri menen birge ósetuǵın jıllı hám qollap-quwatlawshı bilimlendiriw ortalıǵın jaratıp atırmız.
                        </p>
                    </div>

                </div>
            </Container>
        </section>
    )
}
