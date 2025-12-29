import { JoinSection } from "@/components/shared"
import { HeroAbout } from "./hero-about"
import { OurStory } from "./our-story"
import { OurValues } from "./our-values"

const AboutPage = () => {
    return (
        <>
            <HeroAbout />
            <OurStory />
            <OurValues />
            <JoinSection />
        </>
    )
}

export default AboutPage
