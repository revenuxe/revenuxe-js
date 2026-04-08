import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { InternalLinkItem } from "@/lib/internalLinking";

interface InternalLinkSectionProps {
  eyebrow?: string;
  title: string;
  description?: string;
  links: InternalLinkItem[];
  muted?: boolean;
}

const InternalLinkSection = ({
  eyebrow,
  title,
  description,
  links,
  muted = false,
}: InternalLinkSectionProps) => {
  if (!links.length) return null;

  return (
    <section className={`py-14 md:py-20 ${muted ? "bg-muted/30" : "bg-background"}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-10 md:mb-12">
            {eyebrow && (
              <span className="text-accent font-semibold text-sm tracking-wider uppercase">
                {eyebrow}
              </span>
            )}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mt-2">
              {title}
            </h2>
            {description && (
              <p className="text-muted-foreground text-sm md:text-base mt-4 leading-relaxed">
                {description}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group rounded-2xl border border-border bg-card p-5 md:p-6 transition-all duration-300 hover:border-accent/50 hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-base md:text-lg font-display font-bold group-hover:text-accent transition-colors">
                      {link.title}
                    </h3>
                    {link.description && (
                      <p className="text-xs md:text-sm text-muted-foreground mt-2 leading-relaxed">
                        {link.description}
                      </p>
                    )}
                  </div>
                  <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-accent flex-shrink-0" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternalLinkSection;
