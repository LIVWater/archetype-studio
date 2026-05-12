"use client";

import { FormShell } from "./FormShell";
import { Field, Input, Select, Textarea, FileUploadPlaceholder } from "@/components/ui/Input";

export function ProjectAssessmentForm() {
  return (
    <FormShell
      title="Request a project assessment"
      description="For larger systems and decentralised infrastructure projects. Final commercial structures depend on project qualification and LIVWater approval."
      submitLabel="Submit for project assessment"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Client type" required>
          <Select required>
            <option value="">Select client type</option>
            <option>Property developer</option>
            <option>Estate / community</option>
            <option>Commercial owner</option>
            <option>Industrial operator</option>
            <option>Municipality</option>
            <option>Agricultural operation</option>
            <option>Hospitality / lodge</option>
            <option>Project sponsor</option>
          </Select>
        </Field>
        <Field label="Project type" required>
          <Select required>
            <option value="">Select project type</option>
            <option>New development</option>
            <option>Retrofit</option>
            <option>Decentralised supply</option>
            <option>Decentralised wastewater</option>
            <option>Reuse infrastructure</option>
            <option>Monitoring & dashboards</option>
            <option>Lifecycle operations</option>
          </Select>
        </Field>
        <Field label="Site location" required>
          <Input placeholder="Town, region, country" required />
        </Field>
        <Field label="Estimated water demand (if known)">
          <Input placeholder="e.g. 280 kL/day" />
        </Field>
        <Field label="Source water type">
          <Select>
            <option value="">Select source</option>
            <option>Municipal</option>
            <option>Borehole</option>
            <option>Surface water</option>
            <option>Hybrid</option>
            <option>Unknown</option>
          </Select>
        </Field>
        <Field label="Wastewater requirement?">
          <Select>
            <option>Yes</option>
            <option>No</option>
            <option>Unsure</option>
          </Select>
        </Field>
        <Field label="Reuse requirement?">
          <Select>
            <option>Yes</option>
            <option>No</option>
            <option>Future phase</option>
          </Select>
        </Field>
        <Field label="Number of units / buildings">
          <Input type="number" />
        </Field>
        <Field label="Dashboard requirement?">
          <Select>
            <option>Yes</option>
            <option>No</option>
            <option>Recommended</option>
          </Select>
        </Field>
        <Field label="Financing structure interest">
          <Select>
            <option>Outright purchase</option>
            <option>Co-ownership</option>
            <option>Rent-to-own</option>
            <option>Service-based delivery</option>
            <option>Owner-operator</option>
            <option>Not sure yet</option>
          </Select>
        </Field>
      </div>
      <Field label="Key problem or objective" required>
        <Textarea
          required
          placeholder="What outcome are you trying to secure? Continuity, compliance, reuse, autonomy, ESG, infrastructure roll-out…"
        />
      </Field>
      <Field label="Supporting documents">
        <FileUploadPlaceholder label="Master plan, water balance, feasibility studies, drawings" />
      </Field>
      <div className="grid gap-5 sm:grid-cols-3">
        <Field label="Name" required>
          <Input required />
        </Field>
        <Field label="Organisation">
          <Input />
        </Field>
        <Field label="Email" required>
          <Input type="email" required />
        </Field>
      </div>
    </FormShell>
  );
}
