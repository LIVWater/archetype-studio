"use client";

import { FormShell } from "./FormShell";
import { Field, Input, Select, Textarea, FileUploadPlaceholder } from "@/components/ui/Input";

export function TechnologyPartnerForm() {
  return (
    <FormShell
      title="Submit a water technology"
      description="LIVWater evaluates new water treatment, monitoring and analytics technologies for partnership, piloting and marketplace listing."
      submitLabel="Submit technology"
      successMessage="Submission received. The LIVWater technology team will review and respond. Pilot and partnership decisions are subject to technical evaluation."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Company" required>
          <Input required />
        </Field>
        <Field label="Technology category" required>
          <Select required>
            <option value="">Select category</option>
            <option>Advanced filtration</option>
            <option>Membrane systems</option>
            <option>MBR systems</option>
            <option>Engineered wetlands</option>
            <option>Disinfection</option>
            <option>Desalination</option>
            <option>Smart metering</option>
            <option>IoT devices</option>
            <option>AI & analytics</option>
            <option>Water reuse</option>
            <option>Sludge treatment</option>
            <option>Nutrient recovery</option>
            <option>Low-energy treatment</option>
            <option>Off-grid treatment</option>
            <option>Containerised treatment</option>
            <option>Remote monitoring</option>
          </Select>
        </Field>
        <Field label="Regions">
          <Input placeholder="Where can your technology be deployed today?" />
        </Field>
        <Field label="Pilot readiness">
          <Select>
            <option>Production</option>
            <option>Pilot-ready</option>
            <option>Prototype</option>
            <option>Concept</option>
          </Select>
        </Field>
        <Field label="Partnership interest">
          <Select>
            <option>Marketplace listing</option>
            <option>Pilot</option>
            <option>Strategic partnership</option>
            <option>OEM agreement</option>
            <option>Investment / co-development</option>
          </Select>
        </Field>
        <Field label="Contact email" required>
          <Input type="email" required />
        </Field>
      </div>
      <Field label="Description" required>
        <Textarea required placeholder="What does your technology do? What problem does it solve and at what scale?" />
      </Field>
      <Field label="Suitable applications">
        <Input placeholder="e.g. estates, industrial effluents, irrigation reuse" />
      </Field>
      <Field label="Technical documents">
        <FileUploadPlaceholder label="Datasheets, case studies, performance test data" />
      </Field>
    </FormShell>
  );
}
