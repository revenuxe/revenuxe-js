const Stats = () => {
  const stats = [
    {
      value: "500%",
      label: "Average ROI Increase",
    },
    {
      value: "50+",
      label: "Successful Projects Delivered",
    },
    {
      value: "10M+",
      label: "Website Traffic Generated",
    },
    {
      value: "₹5Cr+",
      label: "Revenue Generated for Clients",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-background to-[hsl(0,30%,8%)] relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header - SEO Optimized */}
          <div className="mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-foreground">INDIA'S TRUSTED </span>
              <span className="text-primary">DIGITAL MARKETING EXPERTS</span>
            </h2>
            <p className="text-lg md:text-xl max-w-4xl">
              <span className="text-primary font-bold">ARROWMIND </span>
              <span className="text-foreground">is a full-service </span>
              <span className="text-primary">digital marketing agency </span>
              <span className="text-foreground">specializing in </span>
              <span className="text-primary">SEO, PPC advertising, social media marketing, </span>
              <span className="text-foreground">and </span>
              <span className="text-primary">website development </span>
              <span className="text-foreground">for startups, SMBs, and enterprises across India and globally.</span>
            </p>
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="border border-border rounded-lg p-8 md:p-10 hover:border-primary transition-all duration-300 animate-fade-in text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
          
          {/* Mission Statement - SEO Rich */}
          <div className="mt-16 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <p className="text-muted-foreground text-base md:text-lg max-w-4xl">
              Our mission is to help businesses <strong className="text-foreground">rank higher on Google</strong>, 
              <strong className="text-foreground"> increase organic traffic</strong>, and 
              <strong className="text-foreground"> generate more leads and sales</strong> through 
              data-driven digital marketing strategies. Whether you need <strong className="text-foreground">local SEO services</strong>, 
              <strong className="text-foreground"> Google Ads management</strong>, <strong className="text-foreground">Facebook advertising</strong>, 
              or a <strong className="text-foreground">complete website redesign</strong>, we deliver measurable results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
