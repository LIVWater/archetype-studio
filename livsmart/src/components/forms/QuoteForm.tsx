"use client";

import * as React from "react";
import { FormShell } from "./FormShell";
import { Field, Input, Select, Textarea, FileUploadPlaceholder } from "@/components/ui/Input";

export function QuoteForm() {
  return (
    <FormShell
      title="Request a quote"
      description="Tell us about the product or service, your site and scale. We will route to the right LIVWater or approved provider team."
      submitLabel="Request quote"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Product or service category" required>
          <Select required>
            <option value="">Select category</option>
            <option>Smart Water & IoT</option>
            <option>Household Water</option>
            <option>LIVSupply Systems</option>
            <option>LIVWaste Systems</option>
            <option>LIVReuse Systems</option>
            <option>Commercial & Industrial</option>
            <option>Assessment</option>
            <option>Installation</option>
            <option>Maintenance</option>
            <option>Operations</option>
          </Select>
        </Field>
        <Field label="Intended use" required>
          <Input placeholder="e.g. borehole supply for 40-unit estate" required />
        </Field>
        <Field label="Property type" required>
          <Select required>
            <option value="">Select property type</option>
            <option>Household</option>
            <option>Estate</option>
            <option>Commercial</option>
            <option>Industrial</option>
            <option>Agricultural</option>
            <option>Hospitality</option>
            <option>Development</option>
          </Select>
        </Field>
        <Field label="Scale">
          <Select>
            <option value="">Select scale</option>
            <option>Small (1–10 users)</option>
            <option>Medium (10–100 users)</option>
            <option>Large (100–1,000 users)</option>
            <option>Project scale (1,000+ users / kL)</option>
          </Select>
        </Field>
        <Field label="Number of users / units">
          <Input type="number" placeholder="e.g. 240" />
        </Field>
        <Field label="Current water source">
          <Select>
            <option value="">Select source</option>
            <option>Municipal</option>
            <option>Borehole</option>
            <option>Surface water</option>
            <option>Hybrid</option>
            <option>Unknown</option>
          </Select>
        </Field>
        <Field label="Installation required">
          <Select>
            <option>Yes</option>
            <option>No</option>
            <option>Quote only</option>
          </Select>
        </Field>
        <Field label="Preferred timing">
          <Select>
            <option>Immediate (0–4 weeks)</option>
            <option>1–3 months</option>
            <option>3–6 months</option>
            <option>6+ months</option>
          </Select>
        </Field>
      </div>
      <Field label="Message">
        <Textarea placeholder="Site details, problem statement, constraints, deadlines…" />
      </Field>
      <Field label="Supporting documents">
        <FileUploadPlaceholder label="Site plans, water test reports, photos" />
      </Field>
      <div className="grid gap-5 sm:grid-cols-3">
        <Field label="Name" required>
          <Input required />
        </Field>
        <Field label="Email" required>
          <Input type="email" required />
        </Field>
        <Field label="Phone">
          <Input type="tel" />
        </Field>
      </div>
    </FormShell>
  );
}
