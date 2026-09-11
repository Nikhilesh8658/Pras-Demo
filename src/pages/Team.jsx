import { Linkedin, Mail } from "lucide-react";
import { PageIntro } from "@/components/sections";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const team = [
  {
    name: "Prasad Polineni",
    role: "Director",
    photo: "https://i.pravatar.cc/400?img=12",
    bio: "Leads company strategy and market direction, with a sharp eye on operational efficiency.",
  },
  {
    name: "Ananya Rao",
    role: "Mining Consultant",
    photo: "https://i.pravatar.cc/400?img=47",
    bio: "Oversees site safety and extraction planning across our quartz and feldspar mines.",
  },
  {
    name: "Vikram Shetty",
    role: "Quality Control Engineer",
    photo: "https://i.pravatar.cc/400?img=33",
    bio: "Ensures every processed batch meets purity and grading standards before export.",
  },
  {
    name: "Meera Iyer",
    role: "Export & Logistics Manager",
    photo: "https://i.pravatar.cc/400?img=45",
    bio: "Coordinates shipping, documentation, and delivery timelines for international clients.",
  },
  {
    name: "Arjun Nair",
    role: "Sales & Marketing Lead",
    photo: "https://i.pravatar.cc/400?img=13",
    bio: "Manages client relationships and guides inquiries from first contact to order fulfilment.",
  },
];

export default function TeamPage() {
  useDocumentTitle("Our Team — Pras Minerals");
  return (
    <>
      <PageIntro eyebrow="Our team" title="The people behind every shipment." description="A small, experienced team of engineers, consultants, and specialists who keep our mining, processing, and export operations running smoothly." />
      <section className="container-page section-pad">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <div key={member.name} className="rounded-2xl border border-line bg-card p-6 text-center shadow-card">
              <img src={member.photo} alt={member.name} width={112} height={112} loading="lazy" className="mx-auto size-28 rounded-full object-cover shadow-card" />
              <h3 className="mt-5 font-display text-lg font-semibold">{member.name}</h3>
              <p className="text-sm font-semibold text-brand">{member.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
              <div className="mt-4 flex items-center justify-center gap-3 text-muted-foreground">
                <Mail className="size-4" />
                <Linkedin className="size-4" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
