import { ArrowRight } from "lucide-react";

const AnnouncementBar = () => {
  const announcements = [
    "🚀 Free AI Marketing Audit — Limited Spots Available",
    "Book a Strategy Call Now",
    "🚀 Free AI Marketing Audit — Limited Spots Available",
    "Book a Strategy Call Now",
    "🚀 Free AI Marketing Audit — Limited Spots Available",
    "Book a Strategy Call Now",
    "🚀 Free AI Marketing Audit — Limited Spots Available",
    "Book a Strategy Call Now",
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-primary text-primary-foreground overflow-hidden">
      <a
        href="/contact"
        className="block relative h-9 overflow-hidden group"
      >
        <div className="flex items-center h-full animate-marquee whitespace-nowrap">
          {announcements.map((text, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 text-xs font-medium tracking-wide mx-8"
            >
              {text}
              {i % 2 !== 0 && (
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              )}
              <span className="text-primary-foreground/40">|</span>
            </span>
          ))}
        </div>
      </a>
    </div>
  );
};

export default AnnouncementBar;
