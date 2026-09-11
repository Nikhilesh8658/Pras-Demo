import { Banknote, Building2, CreditCard, HardHat, Landmark, Mail, Pickaxe, Truck, Users, Wallet, Wrench } from "lucide-react";
import { PageIntro, WhyUs } from "@/components/sections";
import quartzMineral from "@/assets/minerals/quartz-mineral.jpg";
import potashFeldspar from "@/assets/minerals/potash-feldspar.jpg";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const infraStats = [
  { value: "2010", label: "Year established" },
  { value: "6", label: "Quartz mines (80+ hectares)" },
  { value: "2", label: "Feldspar mines (25 hectares)" },
  { value: "15+", label: "Years of export experience" },
];

const equipment = [
  { icon: Pickaxe, label: "Jack hammers" },
  { icon: HardHat, label: "Excavators" },
  { icon: Wrench, label: "Generator sets" },
  { icon: Building2, label: "Compressors" },
  { icon: Truck, label: "Tippers & tractors with trolley" },
];

const paymentOptions = [
  { icon: Wallet, label: "Advance payment" },
  { icon: Landmark, label: "Money transfer through bank" },
  { icon: CreditCard, label: "Letter of credit" },
  { icon: Banknote, label: "Demand draft" },
  { icon: Mail, label: "E-payment" },
];

export default function AboutPage() {
  useDocumentTitle("About Pras Minerals");
  return (
    <>
      <PageIntro eyebrow="About Pras Minerals" title="A decade of trusted mineral exports." description="Pras Mineral Exports Pvt. Ltd. is a Hyderabad-based Private Limited company and a leading processor, supplier, and exporter of Quartz Powder, Soda Feldspar, Granular Quartz Lump, and more." />

      <section className="container-page section-pad">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow text-brand">Our story</p>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">Built on strategic location and strong leadership.</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">Pras Minerals Exports is a well-established Private Limited company incorporated in 2010, headquartered in Kondapur, Hyderabad, Telangana. With extensive domain knowledge and abundant product availability, we have gained a strong foothold in the market.</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">Our proximity to mines and the seaports of Krishnapatnam and Chennai gives us a strategic advantage — easy accessibility to mines lowers our operational cost, which has a direct impact on final pricing for our clients across the domestic and international market.</p>
          </div>
          <img src={quartzMineral} alt="Quartz mineral specimen" width={1200} height={900} loading="lazy" className="aspect-[4/3] w-full rounded-2xl object-cover shadow-card" />
        </div>
      </section>

      <section className="border-y border-line bg-card">
        <div className="container-page section-pad">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <img src={potashFeldspar} alt="Potash feldspar specimen" width={1200} height={900} loading="lazy" className="aspect-[4/3] w-full rounded-2xl object-cover shadow-card lg:order-2" />
            <div>
              <p className="eyebrow text-brand">Leadership</p>
              <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">Guided by Director Mr. Prasad Polineni.</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">The firm operates under the astute guidance of its Director, Mr. Prasad Polineni, whose excellent farsightedness helps drive our various endeavours. Formulating strategic business policies is his forte — he keeps a sharp eye on market activity to guide decisions that bring consistent success.</p>
              <p className="mt-4 leading-relaxed text-muted-foreground">Our organization has seen marked success owing to a team of highly skilled professionals — engineers, mining consultants, technicians, quality personnel, and sales and marketing experts — with mining activities carried out under the utmost safety guidance of our mining consultants.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page section-pad">
        <p className="eyebrow text-brand">Infrastructure</p>
        <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">Mining operations built to scale.</h2>
        <div className="mt-9 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {infraStats.map((stat) => (
            <div key={stat.label} className="bg-card p-7">
              <strong className="font-display text-2xl">{stat.value}</strong>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-3xl leading-relaxed text-muted-foreground">We follow set norms and industrial guidelines under the Mines Act to carry out our mining operations, using top-quality equipment mechanized for efficiency:</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {equipment.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3 rounded-xl border border-line bg-card p-4">
              <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand"><Icon className="size-5" /></span>
              <span className="text-sm font-semibold">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-soft">
        <div className="container-page section-pad">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="eyebrow text-brand">Payment options</p>
              <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">Hassle-free transactions.</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">Being a customer-centric company, we offer a number of payment options for smooth, hassle-free transactions. We also provide product samples (5 kg) at nominal charges, including courier, delivery, taxes, levies, and insurance.</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {paymentOptions.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3 rounded-xl bg-card p-4 shadow-card">
                    <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand"><Icon className="size-4" /></span>
                    <span className="text-sm font-semibold">{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl bg-card p-8 shadow-card">
              <span className="grid size-11 place-items-center rounded-lg bg-brand-soft text-brand"><Users className="size-5" /></span>
              <p className="eyebrow mt-5 text-brand">Our team</p>
              <h3 className="mt-2 font-display text-2xl font-semibold">A team built for the field and the market.</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">Our team plays a significant role in providing clients with a pure and effective range of minerals. Engineers and mining consultants oversee site operations, while warehousing personnel manage processed goods safely and efficiently.</p>
              <p className="mt-4 leading-relaxed text-muted-foreground">Our supply network covers a considerably wide area across the domestic and international market, with sales and marketing professionals dedicated to a smooth client experience from inquiry to delivery.</p>
            </div>
          </div>
        </div>
      </section>

      <WhyUs />
    </>
  );
}
