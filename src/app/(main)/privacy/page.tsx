import { Container } from "@/components/ui"
import { AlertCircle, Eye, FileText, Lock, Phone, Shield } from "lucide-react"

const PrivacyPage = () => {
	const lastUpdated = "01.12.2025"

	return (
		<>
			{/* Hero Section */}
			<section className="relative overflow-hidden py-16 md:py-24 border-b">
				<Container className="relative z-10">
					<div className="text-center max-w-3xl mx-auto">
						<div className="border-primary/20 bg-primary/10 text-primary mb-6 inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-semibold">
							<Shield className="h-4 w-4 mr-2" />
							Qupıyalıq siyasatı
						</div>
						<h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
							Jeke maǵlıwmatlar <span className="text-primary">qorǵanıwı</span>
						</h1>
						<p className="text-muted-foreground text-lg md:text-xl">
							Sizdiń jeke maǵlıwmatlarıńız bizdiń platformamızda qalay jıynalıp,
							qorǵalıwı haqqında tolıq maǵlıwmat
						</p>
						<p className="text-sm text-muted-foreground mt-4">
							Sońǵı jańalanıw: {lastUpdated}
						</p>
					</div>
				</Container>
			</section>

			{/* Privacy Policy Content */}
			<section className="py-16 md:py-20">
				<Container>
					<div className="space-y-12">
						{/* Introduction */}
						<div className="space-y-4">
							<div className="flex items-start gap-3">
								<div className="inline-flex items-center justify-center rounded-lg bg-primary/10 p-2.5 text-primary mt-1">
									<FileText className="h-5 w-5" />
								</div>
								<div className="flex-1">
									<h2 className="text-2xl md:text-3xl font-bold mb-4">
										1. Kiris
									</h2>
									<div className="text-muted-foreground space-y-3 leading-relaxed">
										<p>
											Bul Qupıyalıq siyasatı Online School platforması (bunnan
											arı &ldquo;Platforma&rdquo;, &ldquo;biz&rdquo;,
											&ldquo;bizdiń&rdquo;) jeke maǵlıwmatlarıńızdı jıynaw,
											paydalanıw, ashıw hám qorǵaw boyınsha siziń huquqlarıńız
											hám bizdiń minnetlemelerimizdi belgileydi.
										</p>
										<p>
											Bul siyasat Ózbekstan Respublikasınıń tómendegi
											nızamlarına muwapıq islep shıǵılǵan:
										</p>
										<ul className="list-none space-y-2 mt-4 ml-6">
											<li className="flex gap-2">
												<span className="text-primary font-semibold min-w-8">
													1.1.
												</span>
												<span>
													Ózbekstan Respublikasınıń &ldquo;Jeke maǵlıwmatlar
													haqqında&rdquo;ǵı Nızamı
												</span>
											</li>
											<li className="flex gap-2">
												<span className="text-primary font-semibold min-w-8">
													1.2.
												</span>
												<span>
													Ózbekstan Respublikasınıń
													&ldquo;Informatizaciyalastırıw haqqında&rdquo;ǵı
													Nızamı
												</span>
											</li>
											<li className="flex gap-2">
												<span className="text-primary font-semibold min-w-8">
													1.3.
												</span>
												<span>Ózbekstan Respublikasınıń Puqaralıq Kodeksi</span>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>

						{/* Data Collection */}
						<div className="space-y-4">
							<div className="flex items-start gap-3">
								<div className="inline-flex items-center justify-center rounded-lg bg-primary/10 p-2.5 text-primary mt-1">
									<Eye className="h-5 w-5" />
								</div>
								<div className="flex-1">
									<h2 className="text-2xl md:text-3xl font-bold mb-4">
										2. Jıynalatuǵın maǵlıwmatlar
									</h2>
									<div className="text-muted-foreground space-y-3 leading-relaxed">
										<p>
											Platformamızda dizimnen ótiw hám xızmetlerden paydalanıw
											dawamında biz tómendegi jeke maǵlıwmatlarıńızdı jıynaymız:
										</p>
										<ul className="list-none space-y-2 mt-4 ml-6">
											<li className="flex gap-2">
												<span className="text-primary font-semibold min-w-8">
													2.1.
												</span>
												<span>
													<strong>Atıńız hám familiyańız</strong> - Siziń jeke
													profilingizdi jaratıw hám platformada
													identifikaciyalastırıw ushın
												</span>
											</li>
											<li className="flex gap-2">
												<span className="text-primary font-semibold min-w-8">
													2.2.
												</span>
												<span>
													<strong>Telefon nomeri</strong> - Siz benen
													baylanısıw, akkountıńızdı tastıyıqlaw hám
													qáwipsizlikti támiyinlew ushın
												</span>
											</li>
											<li className="flex gap-2">
												<span className="text-primary font-semibold min-w-8">
													2.3.
												</span>
												<span>
													<strong>Email adresi</strong> - Dizimnen ótiw,
													bildiriwler hám jańa maǵlıwmatlar jiberiw ushın
												</span>
											</li>
											<li className="flex gap-2">
												<span className="text-primary font-semibold min-w-8">
													2.4.
												</span>
												<span>
													<strong>Paydalanıw maǵlıwmatları</strong> -
													Platformadan qalay paydalanıwıńız haqqında texnikalıq
													maǵlıwmatlar (IP adres, brauzer túri, kiriw waqtı)
												</span>
											</li>
											<li className="flex gap-2">
												<span className="text-primary font-semibold min-w-8">
													2.5.
												</span>
												<span>
													<strong>Tólem maǵlıwmatları</strong> - Kurslarǵa tólem
													islewde tólem usılı haqqında maǵlıwmat (tolıq karta
													maǵlıwmatları saqlanbaydı)
												</span>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>

						{/* Data Usage */}
						<div className="space-y-4">
							<div className="flex items-start gap-3">
								<div className="inline-flex items-center justify-center rounded-lg bg-primary/10 p-2.5 text-primary mt-1">
									<Phone className="h-5 w-5" />
								</div>
								<div className="flex-1">
									<h2 className="text-2xl md:text-3xl font-bold mb-4">
										3. Maǵlıwmatlardan paydalanıw
									</h2>
									<div className="text-muted-foreground space-y-3 leading-relaxed">
										<p>
											Jıynalǵan jeke maǵlıwmatlar tómendegi maqsetlerde
											paydalanıladı:
										</p>
										<ul className="list-none space-y-2 mt-4 ml-6">
											<li className="flex gap-2">
												<span className="text-primary font-semibold min-w-8">
													3.1.
												</span>
												<span>
													Platformada dizimnen ótiw hám akkount jaratıw
												</span>
											</li>
											<li className="flex gap-2">
												<span className="text-primary font-semibold min-w-8">
													3.2.
												</span>
												<span>
													Bilim beriw xızmetlerin kórsetiw (kurslar, sabaqlar,
													materiallar)
												</span>
											</li>
											<li className="flex gap-2">
												<span className="text-primary font-semibold min-w-8">
													3.3.
												</span>
												<span>
													Telefon nomeri arqalı sizge xabarlar hám bildiriwler
													jiberiw
												</span>
											</li>
											<li className="flex gap-2">
												<span className="text-primary font-semibold min-w-8">
													3.4.
												</span>
												<span>
													Texnikalıq qollap-quwatlaw hám servis xızmetlerin
													kórsetiw
												</span>
											</li>
											<li className="flex gap-2">
												<span className="text-primary font-semibold min-w-8">
													3.5.
												</span>
												<span>
													Platforma xızmetlerin jaqsılaw hám jańalıqlar haqqında
													maǵlıwmat beriw
												</span>
											</li>
											<li className="flex gap-2">
												<span className="text-primary font-semibold min-w-8">
													3.6.
												</span>
												<span>
													Qáwipsizlikti támiyinlew hám nızamsız háreketlerdiń
													aldın alıw
												</span>
											</li>
											<li className="flex gap-2">
												<span className="text-primary font-semibold min-w-8">
													3.7.
												</span>
												<span>Nızamıy minnetlemelerge ámel etiw</span>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>

						{/* Data Protection */}
						<div className="space-y-4">
							<div className="flex items-start gap-3">
								<div className="inline-flex items-center justify-center rounded-lg bg-primary/10 p-2.5 text-primary mt-1">
									<Lock className="h-5 w-5" />
								</div>
								<div className="flex-1">
									<h2 className="text-2xl md:text-3xl font-bold mb-4">
										4. Maǵlıwmatlar qorǵanıwı
									</h2>
									<div className="text-muted-foreground space-y-3 leading-relaxed">
										<p>
											Biz sizdiń jeke maǵlıwmatlarıńızdı qorǵaw ushın tómendegi
											sharalardı qollanamız:
										</p>
										<ul className="list-none space-y-2 mt-4 ml-6">
											<li className="flex gap-2">
												<span className="text-primary font-semibold min-w-8">
													4.1.
												</span>
												<span>
													SSL/TLS shifrlaw texnologiyası arqalı maǵlıwmatlar
													uzatıw
												</span>
											</li>
											<li className="flex gap-2">
												<span className="text-primary font-semibold min-w-8">
													4.2.
												</span>
												<span>
													Bazada telefon nomerleri hám jeke maǵlıwmatlar
													shifrlanǵan túrde saqlanıwı
												</span>
											</li>
											<li className="flex gap-2">
												<span className="text-primary font-semibold min-w-8">
													4.3.
												</span>
												<span>
													Maǵlıwmatlarǵa kiriw huquqın sheklew hám avtorizaciya
													sisteması
												</span>
											</li>
											<li className="flex gap-2">
												<span className="text-primary font-semibold min-w-8">
													4.4.
												</span>
												<span>
													Turaqlı túrde qáwipsizlik auditi hám sistema
													jańalanıwları
												</span>
											</li>
											<li className="flex gap-2">
												<span className="text-primary font-semibold min-w-8">
													4.5.
												</span>
												<span>
													Serverler Ózbekstan Respublikasınıń aymaǵında yamasa
													qorǵalǵan xalıqaralıq maǵlıwmatlar oraylarında
													(data-centers) jaylasqan
												</span>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>

						{/* User Rights */}
						<div className="space-y-4">
							<div className="flex items-start gap-3">
								<div className="inline-flex items-center justify-center rounded-lg bg-primary/10 p-2.5 text-primary mt-1">
									<Shield className="h-5 w-5" />
								</div>
								<div className="flex-1">
									<h2 className="text-2xl md:text-3xl font-bold mb-4">
										5. Sizdiń huquqlarıńız
									</h2>
									<div className="text-muted-foreground space-y-3 leading-relaxed">
										<p>
											Ózbekstan Respublikasınıń nızamlarına muwapıq, sizde
											tómendegi huquqlar bar:
										</p>
										<ul className="list-none space-y-2 mt-4 ml-6">
											<li className="flex gap-2">
												<span className="text-primary font-semibold min-w-8">
													5.1.
												</span>
												<span>
													Óz jeke maǵlıwmatlarıńız haqqında maǵlıwmat alıw
													huquqı
												</span>
											</li>
											<li className="flex gap-2">
												<span className="text-primary font-semibold min-w-8">
													5.2.
												</span>
												<span>
													Jeke maǵlıwmatlarıńızdı dúzetiw yamasa tolıqtırıw
													huquqı
												</span>
											</li>
											<li className="flex gap-2">
												<span className="text-primary font-semibold min-w-8">
													5.3.
												</span>
												<span>
													Jeke maǵlıwmatlarıńızdı óshiriwdi talap etiw huquqı
												</span>
											</li>
											<li className="flex gap-2">
												<span className="text-primary font-semibold min-w-8">
													5.4.
												</span>
												<span>
													Maǵlıwmatlar islep shıǵıwǵa qarsılıq bildiriw huquqı
												</span>
											</li>
											<li className="flex gap-2">
												<span className="text-primary font-semibold min-w-8">
													5.5.
												</span>
												<span>
													Jeke maǵlıwmatlarıńızdı basqa platformaǵa kóshiriw
													huquqı (portativlik)
												</span>
											</li>
											<li className="flex gap-2">
												<span className="text-primary font-semibold min-w-8">
													5.6.
												</span>
												<span>
													Marketing xabarların almawǵa qarsılıq bildiriw huquqı
												</span>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>

						{/* Data Retention */}
						<div className="space-y-4">
							<div className="flex items-start gap-3">
								<div className="inline-flex items-center justify-center rounded-lg bg-primary/10 p-2.5 text-primary mt-1">
									<FileText className="h-5 w-5" />
								</div>
								<div className="flex-1">
									<h2 className="text-2xl md:text-3xl font-bold mb-4">
										6. Maǵlıwmatlardı saqlaw múddeti
									</h2>
									<div className="text-muted-foreground space-y-3 leading-relaxed">
										<p>
											Jeke maǵlıwmatlar tómendegi múddetler dawamında saqlanadı:
										</p>
										<ul className="list-none space-y-2 mt-4 ml-6">
											<li className="flex gap-2">
												<span className="text-primary font-semibold min-w-8">
													6.1.
												</span>
												<span>
													Aktiv akkountlar ushın - akkount óshirilgenshe
												</span>
											</li>
											<li className="flex gap-2">
												<span className="text-primary font-semibold min-w-8">
													6.2.
												</span>
												<span>
													Akkount óshirilgennen keyin - 30 kún ishinde tolıq
													óshirilip taslanadı
												</span>
											</li>
											<li className="flex gap-2">
												<span className="text-primary font-semibold min-w-8">
													6.3.
												</span>
												<span>
													Tólem maǵlıwmatları - nızam talabı boyınsha 3 jıl
												</span>
											</li>
											<li className="flex gap-2">
												<span className="text-primary font-semibold min-w-8">
													6.4.
												</span>
												<span>Texnikalıq loglar - 12 ay</span>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>

						{/* Cookies */}
						<div className="space-y-4">
							<div className="flex items-start gap-3">
								<div className="inline-flex items-center justify-center rounded-lg bg-primary/10 p-2.5 text-primary mt-1">
									<AlertCircle className="h-5 w-5" />
								</div>
								<div className="flex-1">
									<h2 className="text-2xl md:text-3xl font-bold mb-4">
										7. Cookies hám paydalanıw
									</h2>
									<div className="text-muted-foreground space-y-3 leading-relaxed">
										<p>
											Platformamız tómendegi maqsetlerde cookies (fayllar)
											paydalanadı:
										</p>
										<ul className="list-none space-y-2 mt-4 ml-6">
											<li className="flex gap-2">
												<span className="text-primary font-semibold min-w-8">
													7.1.
												</span>
												<span>Seansqa kiriw hám autentifikaciya</span>
											</li>
											<li className="flex gap-2">
												<span className="text-primary font-semibold min-w-8">
													7.2.
												</span>
												<span>Paydalanıwshı sazlamaların yadta saqlaw</span>
											</li>
											<li className="flex gap-2">
												<span className="text-primary font-semibold min-w-8">
													7.3.
												</span>
												<span>Platforma islewin analiz etiw hám jaqsılaw</span>
											</li>
										</ul>
										<p className="mt-4">
											Siz brauzer sazlamalarında cookies-ti qabıl qılıwdan bas
											tartıwıńız múmkin, biraq bul platformanıń bazi
											funkciyaların sheklep qoyıwı múmkin.
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* Changes to Policy */}
						<div className="space-y-4">
							<div className="flex items-start gap-3">
								<div className="inline-flex items-center justify-center rounded-lg bg-primary/10 p-2.5 text-primary mt-1">
									<FileText className="h-5 w-5" />
								</div>
								<div className="flex-1">
									<h2 className="text-2xl md:text-3xl font-bold mb-4">
										8. Siyasatqa ózgerisler
									</h2>
									<div className="text-muted-foreground space-y-3 leading-relaxed">
										<p>
											Biz bul Qupıyalıq siyasatına waqtı-waqtı menen ózgerisler
											kirgizip turıwımız múmkin. Barlıq ózgerisler bul bette
											járyalanadı hám &ldquo;Sońǵı jańalanıw&rdquo; sánesi
											jańalanadı.
										</p>
										<ul className="list-none space-y-2 mt-4 ml-6">
											<li className="flex gap-2">
												<span className="text-primary font-semibold min-w-8">
													8.1.
												</span>
												<span>
													Áhmiyetli ózgerisler kirsetilgende 30 kún aldın xabar
													beremiz
												</span>
											</li>
											<li className="flex gap-2">
												<span className="text-primary font-semibold min-w-8">
													8.2.
												</span>
												<span>
													Ózgerislerdi qabıl qılmasańız, akkountıńızdı óshiriw
													huquqıńız bar
												</span>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>

						{/* Contact Information */}
						<div className="space-y-4">
							<div className="flex items-start gap-3">
								<div className="inline-flex items-center justify-center rounded-lg bg-primary/10 p-2.5 text-primary mt-1">
									<Phone className="h-5 w-5" />
								</div>
								<div className="flex-1">
									<h2 className="text-2xl md:text-3xl font-bold mb-4">
										9. Biz benen baylanısıw
									</h2>
									<div className="text-muted-foreground space-y-3 leading-relaxed">
										<p>
											Eger sizde bul Qupıyalıq siyasatı yamasa jeke
											maǵlıwmatlarıńız haqqında sorawlar bolsa, biz benen
											baylanısıń:
										</p>
										<ul className="list-none space-y-2 mt-4 ml-6">
											<li className="flex gap-2">
												<span className="text-primary font-semibold min-w-8">
													•
												</span>
												<span>
													<strong>Email:</strong> info@tindy.uz
												</span>
											</li>
											<li className="flex gap-2">
												<span className="text-primary font-semibold min-w-8">
													•
												</span>
												<span>
													<strong>Telefon:</strong> +998 99 123 45 67
												</span>
											</li>
											<li className="flex gap-2">
												<span className="text-primary font-semibold min-w-8">
													•
												</span>
												<span>
													<strong>Adres:</strong> Nókis qalası, Qaraqalpaqstan
													Respublikası, Ózbekstan
												</span>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>

						{/* Important Notice */}
						<div className="rounded-xl border bg-muted/50 p-8">
							<div className="flex gap-4">
								<AlertCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
								<div className="space-y-2">
									<h3 className="text-lg font-semibold">Áhmiyetli esletpe</h3>
									<p className="text-sm text-muted-foreground leading-relaxed">
										Platformadan paydalanıw arqalı siz bul Qupıyalıq siyasatınıń
										shártlerin qabıl qılasız. Eger sizde qanday da bir sorawlar
										yamasa gúmanlar bolsa, platformadan paydalanıwdan aldın biz
										benen baylanısıń. Sizdiń jeke maǵlıwmatlarıńızdı qorǵaw -
										bizdiń tiykarǵı maqsetimiz.
									</p>
								</div>
							</div>
						</div>
					</div>
				</Container>
			</section>
		</>
	)
}

export default PrivacyPage
