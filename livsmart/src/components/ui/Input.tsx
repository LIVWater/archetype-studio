import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={cn(
      "flex h-11 w-full rounded-lg border border-white/10 bg-white/[0.03] px-3.5 text-sm placeholder:text-white/40 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/30",
      className,
    )}
    {...props}
  />
));
Input.displayName = "Input";

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "flex min-h-[120px] w-full rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-3 text-sm placeholder:text-white/40 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/30",
      className,
    )}
    {...props}
  />
));
Textarea.displayName = "Textarea";

export const Select = React.forwardRef<
  HTMLSelectElement,
  React.SelectHTMLAttributes<HTMLSelectElement>
>(({ className, children, ...props }, ref) => (
  <select
    ref={ref}
    className={cn(
      "flex h-11 w-full rounded-lg border border-white/10 bg-white/[0.03] px-3 text-sm placeholder:text-white/40 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/30",
      className,
    )}
    {...props}
  >
    {children}
  </select>
));
Select.displayName = "Select";

export function Label({
  htmlFor,
  children,
  className,
}: {
  htmlFor?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className={cn(
        "block text-xs font-medium uppercase tracking-wider text-white/65",
        className,
      )}
    >
      {children}
    </label>
  );
}

export function Field({
  label,
  htmlFor,
  hint,
  required,
  children,
  className,
}: {
  label: string;
  htmlFor?: string;
  hint?: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("space-y-1.5", className)}>
      <Label htmlFor={htmlFor}>
        {label}
        {required && <span className="text-accent-600"> *</span>}
      </Label>
      {children}
      {hint && <p className="text-xs text-white/55">{hint}</p>}
    </div>
  );
}

export function FileUploadPlaceholder({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-dashed border-white/15 bg-white/[0.02] px-4 py-3 text-sm text-white/65">
      <span>{label}</span>
      <span className="text-xs text-white/40">Upload placeholder</span>
    </div>
  );
}
