"use client";

import { FormShell } from "./FormShell";
import { Field, Input, Select } from "@/components/ui/Input";

export function DemoForm() {
  return (
    <FormShell
      title="Request a demo"
      description="See the LIVSmart app and dashboards live — sized to your use case. We will share a session link via email."
      submitLabel="Request demo"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" required>
          <Input required />
        </Field>
        <Field label="Company">
          <Input />
        </Field>
        <Field label="Role">
          <Input placeholder="e.g. Estate manager, Operations lead" />
        </Field>
        <Field label="Organisation type">
          <Select>
            <option>Household</option>
            <option>Estate / community</option>
            <option>Commercial</option>
            <option>Industrial</option>
            <option>Developer</option>
            <option>Municipality</option>
            <option>Service provider</option>
          </Select>
        </Field>
        <Field label="Number of meters / sites">
          <Input type="number" placeholder="Approximate is fine" />
        </Field>
        <Field label="Dashboard type of interest">
          <Select>
            <option>Customer app</option>
            <option>Site dashboard</option>
            <option>Operations portal</option>
            <option>Portfolio dashboard</option>
            <option>All of the above</option>
          </Select>
        </Field>
        <Field label="App users required">
          <Input type="number" />
        </Field>
        <Field label="Billing integration needed?">
          <Select>
            <option>No</option>
            <option>Yes – future phase</option>
            <option>Yes – now</option>
          </Select>
        </Field>
        <Field label="Preferred demo date">
          <Input type="date" />
        </Field>
        <Field label="Email" required>
          <Input type="email" required />
        </Field>
      </div>
    </FormShell>
  );
}
