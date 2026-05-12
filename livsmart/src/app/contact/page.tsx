import type { Metadata } from "next";
import { Section, Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact LIVWater — product, services, projects, partnerships, media and commercial enquiries.",
};

export default function ContactPage() {
  return (
    <>
      <Section surface="dark" className="!py-20">
        <Container wide>
          <p className="eyebrow text-accent-300">Contact</p>
          <h1 className="heading-hero mt-3 text-white text-balance max-w-3xl">
            Speak to LIVWater.
          </h1>
          <p className="lede mt-5 max-w-3xl text-pretty">
            For products, services, projects, partnerships or commercial enquiries.
            We aim to respond within one business day.
          </p>
        </Container>
      </Section>
      <Section surface="light">
        <Container wide>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
            <aside className="space-y-6 text-sm text-white/80">
              <Info icon={<Mail className="h-4 w-4 text-accent-500" />} label="Email" value="hello@livwater.io" />
              <Info icon={<Phone className="h-4 w-4 text-accent-500" />} label="Phone" value="+27 (0) 000 000 0000 · placeholder" />
              <Info icon={<MapPin className="h-4 w-4 text-accent-500" />} label="Locations" value="Cape Town · Johannesburg · Remote sites worldwide" />
              <Info icon={<Clock className="h-4 w-4 text-accent-500" />} label="Hours" value="Mon–Fri, 08:00–17:00 SAST" />
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                <p className="text-sm font-medium text-white">Looking for help with a specific request?</p>
                <ul className="mt-3 space-y-2 text-sm text-white/80">
                  <li>· Product or service: <a href="/quote-request" className="text-accent-300">Request Quote</a></li>
                  <li>· Project or infrastructure: <a href="/project-assessment" className="text-accent-300">Project Assessment</a></li>
                  <li>· App and dashboards: <a href="/demo-request" className="text-accent-300">Request Demo</a></li>
                  <li>· Provider or affiliate: <a href="/become-a-provider" className="text-accent-300">Provider</a> / <a href="/affiliate-application" className="text-accent-300">Affiliate</a></li>
                </ul>
              </div>
            </aside>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

function Info({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
      <p className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-white/55">
        {icon} {label}
      </p>
      <p className="mt-1 text-sm text-white">{value}</p>
    </div>
  );
}
