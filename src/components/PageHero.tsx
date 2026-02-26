import googleTrustedBadge from "@/assets/google-trusted-badge.webp";

interface PageHeroProps {
  title: string;
  highlight?: string;
  subtitle?: string;
  children?: React.ReactNode;
}

const PageHero = ({ title, highlight, subtitle, children }: PageHeroProps) => {
  return (
    <section className="relative pt-32 pb-24 md:py-32 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Badge on mobile - left aligned */}
      <div className="absolute top-20 left-4 z-20 md:hidden">
        <img 
          src={googleTrustedBadge} 
          alt="Google Trusted AI Marketing Platform" 
          className="h-14 w-auto object-contain"
        />
      </div>

      {/* Floating Shapes */}
      <div className="absolute top-10 left-10 w-24 h-24 border-2 border-primary/20 rounded-full animate-pulse" />
      <div className="absolute bottom-10 right-16 w-16 h-16 border-2 border-primary/30 rotate-45" />
      <div className="absolute top-1/3 right-10 w-12 h-12 bg-primary/10 rounded-lg animate-pulse" />
      <div className="absolute top-16 left-10 text-primary text-5xl opacity-20 hidden md:block">+</div>
      <div className="absolute bottom-16 right-10 text-primary text-5xl opacity-20 hidden md:block">+</div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4 animate-fade-in">
          {/* Google Trusted Badge - desktop only */}
          <div className="hidden md:flex justify-end pr-4 mb-8">
            <img 
              src={googleTrustedBadge} 
              alt="Google Trusted AI Marketing Platform" 
              className="h-20 lg:h-24 w-auto object-contain"
            />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            {highlight ? (
              <>
                {title} <span className="text-primary">{highlight}</span>
              </>
            ) : (
              title
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
    </section>
  );
};

export default PageHero;
