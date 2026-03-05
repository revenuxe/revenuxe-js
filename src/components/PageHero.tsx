import googleTrustedBadge from "@/assets/google-trusted-badge.webp";

interface PageHeroProps {
  title: string;
  highlight?: string;
  subtitle?: string;
  children?: React.ReactNode;
}

const PageHero = ({ title, highlight, subtitle, children }: PageHeroProps) => {
  return (
    <section className="relative pt-28 pb-20 md:pt-32 md:pb-24 overflow-hidden bg-secondary">
      {/* Hexagonal pattern overlay */}
      <div className="absolute inset-0 opacity-[0.05]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hex-page" width="56" height="100" patternUnits="userSpaceOnUse" patternTransform="scale(1.5)">
              <path d="M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100" fill="none" stroke="hsl(220, 65%, 22%)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hex-page)"/>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-tight">
            {highlight ? (
              <>
                <span className="font-normal">{title}</span>{" "}
                <span className="font-bold italic text-accent">{highlight}</span>
              </>
            ) : (
              <span className="font-bold">{title}</span>
            )}
          </h1>
          {subtitle && (
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>

      {/* Curved bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60V0C360 50 720 60 1080 50C1260 45 1380 30 1440 0V60H0Z" fill="hsl(210, 20%, 97%)"/>
        </svg>
      </div>
    </section>
  );
};

export default PageHero;