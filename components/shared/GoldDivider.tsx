import { cn } from "@/lib/utils";

interface GoldDividerProps {
  className?: string;
  centered?: boolean;
  width?: "sm" | "md" | "lg";
}

export default function GoldDivider({
  className,
  centered = true,
  width = "md",
}: GoldDividerProps) {
  const widths = { sm: "w-12", md: "w-24", lg: "w-36" };

  return (
    <div
      className={cn(
        "flex items-center gap-2",
        centered && "justify-center",
        className
      )}
    >
      <div className={cn("h-px bg-gold-300", widths[width])} />
      <div className="w-2 h-2 rotate-45 bg-gold-500 flex-shrink-0" />
      <div className={cn("h-px bg-gold-300", widths[width])} />
    </div>
  );
}

export function SectionLabel({
  children,
  centered = true,
  className,
}: {
  children: React.ReactNode;
  centered?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-3 mb-4", centered && "justify-center", className)}>
      <div className="w-8 h-px bg-gold-400" />
      <span className="text-gold-500 text-xs font-bold uppercase tracking-[0.2em]">
        {children}
      </span>
      <div className="w-8 h-px bg-gold-400" />
    </div>
  );
}
