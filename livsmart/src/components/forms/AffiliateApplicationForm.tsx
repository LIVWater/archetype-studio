"use client";

import { FormShell } from "./FormShell";
import { Field, Input, Select, Textarea, FileUploadPlaceholder } from "@/components/ui/Input";

export function AffiliateApplicationForm() {
  return (
    <FormShell
      title="Apply to the LIVWater Affiliate Network"
      description="Affiliate, referral, sales, technology and project introducer partners. Approvals are subject to LIVWater review."
      submitLabel="Submit application"
      successMessage="Application received. We will review and respond. Approved affiliates are issued referral codes and access to the LIVWater Affiliate Portal."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" required>
          <Input required />
        </Field>
        <Field label="Company">
          <Input />
        </Field>
        <Field label="Email" required>
          <Input type="email" required />
        </Field>
        <Field label="Phone">
          <Input type="tel" />
        </Field>
        <Field label="Affiliate type" required>
          <Select required>
            <option value="">Select affiliate type</option>
            <option>Referral partner</option>
            <option>Sales representative</option>
            <option>Installer partner</option>
            <option>Service provider</option>
            <option>Technology partner</option>
            <option>Developer partner</option>
            <option>Professional consultant</option>
            <option>Strategic project introducer</option>
          </Select>
        </Field>
        <Field label="Region">
          <Input placeholder="e.g. Cape Town, KZN, SADC" />
        </Field>
        <Field label="Target markets">
          <Input placeholder="Estates, commercial, industrial, agri…" />
        </Field>
        <Field label="Services / products represented">
          <Input placeholder="If you already represent others" />
        </Field>
        <Field label="Existing client base">
          <Input placeholder="Approx. size or notable clients" />
        </Field>
        <Field label="Years of experience">
          <Input type="number" />
        </Field>
        <Field label="Certifications">
          <Input placeholder="Professional / industry certifications" />
        </Field>
      </div>
      <Field label="Supporting documents">
        <FileUploadPlaceholder label="Company registration, VAT registration, capability statement" />
      </Field>
      <Field label="Why LIVWater?">
        <Textarea placeholder="Tell us how LIVWater fits your existing book of business and partner network." />
      </Field>
      <label className="flex items-start gap-2 text-xs text-white/65">
        <input type="checkbox" required className="mt-0.5 h-4 w-4 rounded border-white/15 text-accent-500 focus:ring-accent-500" />
        I agree to LIVWater&apos;s affiliate approval process and accept that bank and commission details are exchanged through a secure follow-up workflow.
      </label>
    </FormShell>
  );
}
