import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
	Container,
} from "@/components/ui"
import { BookOpen, CreditCard, HelpCircle, Settings, Users } from "lucide-react"

const FAQPage = () => {
	const faqCategories = [
		{
			id: "general",
			title: "Umumiy sorawlar",
			icon: HelpCircle,
			questions: [
				{
					question: "Online mektep platforması qanday islidi?",
					answer:
						"Bizdiń platformamız studentlerge qálegendegi waqıtta hám qálegendegi jerde oqıw imkaniyatın beredi. Siz tiykarǵı videosabaqlarǵa, ámeliy tapsırmalarǵa hám qosımsha materiallarǵa kiriw imkaniyatına iye bolasız. Hár bir kurs modullar hám sabaqlarǵa bólingen, bul sistemalı oqıwǵa járdem beredi.",
				},
				{
					question: "Kurslardan qanday paydalanıw kerek?",
					answer:
						"Platformamızda dizimnen ótkennen keyin, kurslar katalogınan ózińizge jaqqan kurslardı tańlań. Kurslardı satıp alǵannan soń, sizde ómir boyı kiriw imkaniyatı boladı. Hár bir sabaqtı tamamlaǵannan soń keyingi sabaqqa óte alasız.",
				},
				{
					question: "Sertifikat ala alaman ba?",
					answer:
						"Álbette! Kurslardı tabıslı tamamlaǵan studentler bizdiń sertifikatlarımızdı ala aladı. Sertifikat alıw ushın hár bir modul boyınsha testlerden ótip, ámeliy tapsırmalardan eń kemi 80% ball jıynawıńız kerek.",
				},
				{
					question: "Qollap-quwatlaw xızmeti qanday islidi?",
					answer:
						"Bizde 24/7 rejiminde isleytuǵın qollap-quwatlaw xızmeti bar. Siz biz benen email, telefon yamasa chat arqalı baylanısa alasız. Ortasha juwap beriw waqtı 2 saattan aspaydı.",
				},
			],
		},
		{
			id: "courses",
			title: "Kurslar haqqında",
			icon: BookOpen,
			questions: [
				{
					question: "Kurslar qansha waqıtqa mólsherlengen?",
					answer:
						"Hár bir kurstıń óz dawamlılıǵı bar. Ortasha alǵanda, kurslar 4-12 hápte aralıǵına mólsherlengen. Biraq siz ózińizge qolaylı tezlikte oqıy alasız - tezletseńiz yamasa jaylastırsańız da boladı.",
				},
				{
					question: "Kurstan keyin neni úyrene alaman?",
					answer:
						"Hár bir kurstıń tolıq táriypinde siz kurs dawamında iyeleytuǵın kónlikpeler hám bilimlerdi kóre alasız. Kurslar ámeliyatqa baǵdarlanǵan hám real joybarlar ústinde islew menen juwmaqlanadı.",
				},
				{
					question: "Kurslarǵa kirıwdiń waqıt shegarası bar ma?",
					answer:
						"Yaq, kurslarǵa kirıw múddeti sheklanbegen. Kurstı satıp alǵannan soń, sizde turaqlı kiriw huquqı boladı. Siz qálegen waqtıńızda sabaqlarǵa qayta kiriwıńiz múmkin.",
				},
				{
					question: "Jańa kurslar qalay qosıladı?",
					answer:
						"Biz turaqlı túrde platformamızǵa jańa kurslardı qosıp baramız. Jańa kurslar haqqında maǵlıwmat alıw ushın bizdiń jańalıqlarǵa aǵza bolıń.",
				},
			],
		},
		{
			id: "payment",
			title: "Tólem hám qaytarıw",
			icon: CreditCard,
			questions: [
				{
					question: "Qanday tólem usılların qabıllaysız?",
					answer:
						"Biz hár túrli tólem usılların qabıllaymız: bank kartaları (Visa, MasterCard, UzCard, Humo), Click, Payme hám PayPal. Barlıq tólemler HTTPS protokolı arqalı qorǵalǵan.",
				},
				{
					question: "Qaytarıw siyasatı qalay islidi?",
					answer:
						"Satıp alǵannan keyin 14 kún ishinde, eger siz kurs materiallarınıń 20%-inen kóp bolmaǵan bólimin kórgen bolsańız, pulıńızdı tolıq qaytarıp ala alasız. Qaytarıw ushın qollap-quwatlaw xızmetine xabar beriń.",
				},
				{
					question: "Kurs jańalanıwları tólemli me?",
					answer:
						"Yaq, eger siz kurstı satıp alǵan bolsańız, barlıq keleshektegi jańalanıwlar hám qosımsha materiallar siz ushın biypul boladı.",
				},
				{
					question: "Aksiyalar bar ma?",
					answer:
						"Álbette! Biz turaqlı túrde arnawlı usınıslar hám aksiyalar ótkerip turamız. Jańalıqlardan birinshi bolıp xabardar bolıw ushın bizdiń kanallarımızǵa aǵza bolıń.",
				},
			],
		},
		{
			id: "account",
			title: "Akkount hám profil",
			icon: Users,
			questions: [
				{
					question: "Akkounttı qalay jarataman?",
					answer:
						"Akkount jaratıw júdá ańsat. 'Dizimnen ótiw' túymesin basıp, email, atı-familiyańız hám parolińizdi kirgiziń. Telefon nomer tastıyıqlaǵannan keyin platformadan tolıq paydalana alasız.",
				},
				{
					question: "Parolimdi unutıp qaldım, ne islewim kerek?",
					answer:
						"Kiriw betinde 'Parolimdi unıttım' ssilkasın basıń. Emailıńızǵa kelgen kórsetpelerge ámel etip, jańa parol qoyıń.",
				},
				{
					question: "Profilimdi qanday ózgertiw múmkin?",
					answer:
						"Profilingizge kirip 'Sazlamalar' bólimin ashıń. Bul jerde siz óz atıńızdı, emailıńızdı, súretińizdi hám basqa maǵlıwmatlarıńızdı ózgerte alasız.",
				},
				{
					question: "Akkountımdı óshirse boladı ma?",
					answer:
						"Álbette, eger siz akkountıńızdı óshiriwdi qáleseńiz, qollap-quwatlaw xızmetine jazıń. Barlıq maǵlıwmatlarıńız qáwipsiz túrde óshiriledi.",
				},
			],
		},
		{
			id: "technical",
			title: "Texnikalıq sorawlar",
			icon: Settings,
			questions: [
				{
					question: "Qanday qurılmalardan kirse boladı?",
					answer:
						"Platformamız barlıq zamanagóy qurılmalarda islidi: kompyuter (Windows, macOS, Linux), planshet hám smartfonlar (iOS, Android). Qurılmada internet brauzeri bolıwı jetkilikli.",
				},
				{
					question: "Minimal sistema talapları qanday?",
					answer:
						"Zamanagóy internet brauzeri (Chrome, Firefox, Safari, Edge), internet baylanısı (video kóriw ushın eń kemi 5 Mbps) hám JavaScript qosılǵan bolıwı kerek.",
				},
				{
					question: "Oflayn rejimde islese boladı ma?",
					answer:
						"Házirgi waqıtta platformamız internet baylanısın talap etedi. Biraq biz oflayn rejimde jumıs islew imkaniyatın qosıw ústinde jumıs alıp barmaqtamız.",
				},
				{
					question: "Videolar ashılmaytir, ne islew kerek?",
					answer:
						"Eń dáslep internet baylanısıńızdı tekserip kóriń. Brauzerińizdi jańalań yamasa basqa brauzerden kirip kóriń. Másele sheshilmese, qollap-quwatlaw xızmetine xabar beriń.",
				},
			],
		},
	]

	return (
		<>
			{/* Hero Section */}
			<section className="relative overflow-hidden py-16 md:py-24 border-b">
				<Container className="relative z-10">
					<div className="text-center max-w-3xl mx-auto">
						<div className="border-primary/20 bg-primary/10 text-primary mb-6 inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-semibold">
							Járdem merkezi
						</div>
						<h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
							Tez-tez soralatuǵın <span className="text-primary">sorawlar</span>
						</h1>
						<p className="text-muted-foreground text-lg md:text-xl">
							Platformamız haqqında eń kóp beriletuǵın sorawlarǵa juwaplar. Eger
							juwabıńızdı taba almasańız, biz benen baylanısıń.
						</p>
					</div>
				</Container>
			</section>

			{/* FAQ Categories */}
			<section className="py-16 md:py-20">
				<Container className="max-w-4xl">
					<div className="space-y-12">
						{faqCategories.map((category) => (
							<div key={category.id} className="space-y-6">
								{/* Category Header */}
								<div className="flex items-center gap-3">
									<div className="inline-flex items-center justify-center rounded-lg bg-primary/10 p-2.5 text-primary">
										<category.icon className="h-5 w-5" />
									</div>
									<h2 className="text-2xl md:text-3xl font-bold">
										{category.title}
									</h2>
								</div>

								{/* FAQ Accordion */}
								<Accordion type="multiple" className="w-full space-y-3">
									{category.questions.map((faq, index) => (
										<AccordionItem
											key={index}
											value={`${category.id}-${index}`}
											className="border rounded-lg px-6 bg-card hover:shadow-md transition-shadow"
										>
											<AccordionTrigger className="hover:no-underline text-left py-5">
												<span className="font-semibold text-base md:text-lg pr-4">
													{faq.question}
												</span>
											</AccordionTrigger>
											<AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
												{faq.answer}
											</AccordionContent>
										</AccordionItem>
									))}
								</Accordion>
							</div>
						))}
					</div>

					{/* Contact CTA */}
					<div className="mt-16 text-center rounded-xl border bg-card p-3 md:p-6 lg:p-12">
						<HelpCircle className="h-12 w-12 mx-auto mb-4 text-primary" />
						<h3 className="text-2xl font-bold mb-2">
							Juwabıńızdı taba almadıńız ba?
						</h3>
						<p className="text-muted-foreground mb-6 max-w-xl mx-auto">
							Eger sorawıńıza juwap taba almasańız, biz benen baylanısıń.
							Qollap-quwatlaw xızmetimiz hárdayım járdem beriwge tayar.
						</p>
						<a
							href="/contact"
							className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
						>
							Biz benen baylanısıń
						</a>
					</div>
				</Container>
			</section>
		</>
	)
}

export default FAQPage
