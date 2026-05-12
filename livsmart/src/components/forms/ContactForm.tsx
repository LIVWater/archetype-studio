"use client";

import { FormShell } from "./FormShell";
import { Field, Input, Select, Textarea } from "@/components/ui/Input";

export function ContactForm() {
  return (
    <FormShell
      title="Contact LIVWater"
      description="Tell us how we can help — product, services, projects, partnerships or media."
      submitLabel="Send message"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" required>
          <Input required />
        </Field>
        <Field label="Email" required>
          <Input type="email" required />
        </Field>
        <Field label="Phone">
          <Input type="tel" />
        </Field>
        <Field label="Company">
          <Input />
        </Field>
        <Field label="Location">
          <Input placeholder="Town, region, country" />
        </Field>
        <Field label="Enquiry type" required>
          <Select required>
            <option value="">Select enquiry type</option>
            <option>Product or service</option>
            <option>Project assessment</option>
            <option>Provider partnership</option>
            <option>Affiliate / referral</option>
            <option>Technology partnership</option>
            <option>Media / PR</option>
            <option>Investor / commercial</option>
            <option>Other</option>
          </Select>
        </Field>
      </div>
      <Field label="Message" required>
        <Textarea required placeholder="What can we help with?" />
      </Field>
    </FormShell>
  );
}
