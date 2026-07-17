import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { generateBreadcrumbSchema } from "@/lib/schema";
import type { Breadcrumb } from "@/types";

interface BreadcrumbsProps {
  items: Breadcrumb[];
  className?: string;
}

export default function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  const allItems = [{ name: "Home", href: "/" }, ...items];
  const schema = generateBreadcrumbSchema(allItems);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav
        aria-label="Breadcrumb"
        className={`flex items-center gap-1 text-sm text-gray-500 ${className}`}
      >
        <ol className="flex items-center flex-wrap gap-1">
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-1">
                {index === 0 ? (
                  <Link
                    href={item.href}
                    aria-label="Home"
                    className="text-gray-400 hover:text-gold-500 transition-colors"
                  >
                    <Home className="w-3.5 h-3.5" />
                  </Link>
                ) : isLast ? (
                  <span
                    aria-current="page"
                    className="text-gray-700 font-medium truncate max-w-[200px]"
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-gold-500 transition-colors truncate max-w-[150px]"
                  >
                    {item.name}
                  </Link>
                )}
                {!isLast && (
                  <ChevronRight className="w-3.5 h-3.5 text-gray-300 flex-shrink-0" />
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
