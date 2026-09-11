import { Linkedin, Mail, User } from "lucide-react";
import { PageIntro } from "@/components/sections";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const team = [
  {
    name: "Prasad Polineni",
    role: "Director",

    bio: "Leads company strategy and market direction, with a sharp eye on operational efficiency.",
  },
  {
    name: "Ananya Rao",
    role: "Mining Consultant",

    bio: "Oversees site safety and extraction planning across our quartz and feldspar mines.",
  },
  {
    name: "Vikram Shetty",
    role: "Quality Control Engineer",

    bio: "Ensures every processed batch meets purity and grading standards before export.",
  },
  {
    name: "Meera Iyer",
    role: "Export & Logistics Manager",

    bio: "Coordinates shipping, documentation, and delivery timelines for international clients.",
  },
  {
    name: "Arjun Nair",
    role: "Sales & Marketing Lead",

    bio: "Manages client relationships and guides inquiries from first contact to order fulfilment.",
  },
];

export default function TeamPage() {
  useDocumentTitle("Our Team — Pras Minerals");
  return (
    <>
      <PageIntro eyebrow="Our team" title="The people behind every shipment." description="" />
      <section className="container-page section-pad">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <div key={member.name} className="rounded-2xl border border-line bg-card p-6 text-center shadow-card">
              <div className="mx-auto grid size-28 place-items-center rounded-full bg-brand-soft text-brand shadow-card">
                <User className="size-12" strokeWidth={1.5} />
              </div>
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
