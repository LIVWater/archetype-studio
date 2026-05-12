"use client";

import { FormShell } from "./FormShell";
import { Field, Input, Select, Textarea, FileUploadPlaceholder } from "@/components/ui/Input";

export function ProviderApplicationForm() {
  return (
    <FormShell
      title="Become a LIVWater service provider"
      description="LIVWater hosts approved third-party providers. Submissions are reviewed for verification, insurance, qualifications and SLA capability."
      submitLabel="Submit application"
      successMessage="Submission received. LIVWater will review and follow up — providers are not publicly listed until approval."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Company name" required>
          <Input required />
        </Field>
        <Field label="Provider type" required>
          <Select required>
            <option value="">Select provider type</option>
            <option>Installer (mechanical / civil)</option>
            <option>Electrician</option>
            <option>Plumber</option>
            <option>Telemetry technician</option>
            <option>Hydrogeologist</option>
            <option>Environmental consultant</option>
            <option>Lab partner</option>
            <option>Operations team</option>
            <option>Drilling contractor</option>
            <option>Pump / tank / irrigation supplier</option>
          </Select>
        </Field>
        <Field label="Services offered" required>
          <Input
            required
            placeholder="e.g. installation, maintenance, monitoring, lab testing"
          />
        </Field>
        <Field label="Regions covered" required>
          <Input required placeholder="e.g. Western Cape, Gauteng, SADC" />
        </Field>
        <Field label="Years of experience">
          <Input type="number" />
        </Field>
        <Field label="Team size">
          <Select>
            <option>1–5</option>
            <option>5–10</option>
            <option>10–20</option>
            <option>20–50</option>
            <option>50+</option>
          </Select>
        </Field>
        <Field label="Qualifications">
          <Input placeholder="Engineers, technicians, registrations" />
        </Field>
        <Field label="Certifications">
          <Input placeholder="CIDB, SACNASP, SANAS, manufacturer accreditations" />
        </Field>
        <Field label="Insurance status">
          <Select>
            <option>Current</option>
            <option>Pending</option>
            <option>Not provided</option>
          </Select>
        </Field>
        <Field label="Emergency availability">
          <Select>
            <option>Yes – 24/7</option>
            <option>Business hours</option>
            <option>No</option>
          </Select>
        </Field>
      </div>
      <Field label="Description">
        <Textarea placeholder="Short summary of your company, focus areas and notable references." />
      </Field>
      <Field label="Supporting documents">
        <FileUploadPlaceholder label="Company registration, insurance, certifications, capability statements" />
      </Field>
      <label className="flex items-start gap-2 text-xs text-white/65">
        <input type="checkbox" required className="mt-0.5 h-4 w-4 rounded border-white/15 text-accent-500 focus:ring-accent-500" />
        I agree to LIVWater&apos;s provider approval process, including verification of insurance, qualifications, references and SLA capability before public listing.
      </label>
    </FormShell>
  );
}
