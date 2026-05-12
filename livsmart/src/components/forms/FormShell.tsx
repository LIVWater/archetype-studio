"use client";

import * as React from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function FormShell({
  title,
  description,
  children,
  successTitle = "Submission received",
  successMessage = "We will be in touch within one business day. This is a demonstration submission — no data has been stored.",
  submitLabel = "Submit",
  onSubmitMock,
}: {
  title?: string;
  description?: string;
  children: React.ReactNode;
  successTitle?: string;
  successMessage?: string;
  submitLabel?: string;
  onSubmitMock?: () => void;
}) {
  const [submitted, setSubmitted] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    onSubmitMock?.();
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
          <CheckCircle2 className="h-6 w-6" />
        </div>
        <h3 className="heading-card mt-4 text-white">{successTitle}</h3>
        <p className="mt-2 text-sm text-white/80">{successMessage}</p>
        <Button
          className="mt-6"
          variant="secondary"
          onClick={() => setSubmitted(false)}
        >
          Submit another
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {(title || description) && (
        <div>
          {title && (
            <h3 className="heading-card text-white">{title}</h3>
          )}
          {description && (
            <p className="mt-2 text-sm text-white/65">{description}</p>
          )}
        </div>
      )}
      <div className="space-y-5">{children}</div>
      <div className="flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-white/55">
          Submissions in this MVP are not stored. Connect a backend for live data.
        </p>
        <Button type="submit" disabled={submitting}>
          {submitting ? "Submitting…" : submitLabel}
        </Button>
      </div>
    </form>
  );
}
