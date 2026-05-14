import Link from "next/link";
import {
  ArrowUpRight,
  Bot,
  Cloud,
  Code2,
  CreditCard,
  Database,
  FileCode2,
  Layers3,
  Server,
} from "lucide-react";
import { technologyPages } from "@/data/technologyPages";

const iconMap = {
  nextjs: <Layers3 className="h-5 w-5" />,
  react: <Code2 className="h-5 w-5" />,
  typescript: <FileCode2 className="h-5 w-5" />,
  supabase: <Server className="h-5 w-5" />,
  postgresql: <Database className="h-5 w-5" />,
  aws: <Cloud className="h-5 w-5" />,
  ai: <Bot className="h-5 w-5" />,
  stripe: <CreditCard className="h-5 w-5" />,
};

const Stats = () => {
  return (
    <section id="technologies" className="py-12 md:py-16 bg-background border-y border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold">
              Technologies
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {technologyPages.map((tech) => (
              <Link
                key={tech.slug}
                href={`/technologies/${tech.slug}`}
                className="group rounded-xl border border-border bg-card p-5 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/70 hover:shadow-xl hover:shadow-black/20"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    {iconMap[tech.slug as keyof typeof iconMap]}
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-accent" />
                </div>
                <h3 className="mt-5 text-lg font-display font-bold">{tech.name}</h3>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-accent">
                  {tech.eyebrow}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                  {tech.summary}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
