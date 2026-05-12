import { cn } from "@/lib/utils";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  inverted = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  inverted?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "eyebrow",
            inverted && "text-accent-300",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "heading-section mt-3 text-balance",
          inverted ? "text-white" : "text-white",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-pretty",
            inverted ? "lede" : "lede-light",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
