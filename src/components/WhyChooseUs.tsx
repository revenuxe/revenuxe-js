const WhyChooseUs = ({ cityName }: { cityName?: string }) => {
  const goals = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="10" fill="hsl(75, 45%, 72%)" />
          <circle cx="16" cy="16" r="8" fill="hsl(75, 45%, 72%)" />
          <circle cx="32" cy="16" r="8" fill="hsl(75, 45%, 72%)" />
          <circle cx="16" cy="32" r="8" fill="hsl(75, 45%, 72%)" />
          <circle cx="32" cy="32" r="8" fill="hsl(75, 45%, 72%)" />
        </svg>
      ),
      title: `Maximize Return on Investments${cityName ? ` in ${cityName}` : ""}`,
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="14" r="5" fill="hsl(24, 85%, 55%)" />
          <circle cx="14" cy="24" r="5" fill="hsl(24, 85%, 55%)" />
          <circle cx="34" cy="24" r="5" fill="hsl(24, 85%, 55%)" />
          <circle cx="24" cy="34" r="5" fill="hsl(24, 85%, 55%)" />
          <circle cx="17" cy="17" r="4" fill="hsl(24, 85%, 55%)" />
          <circle cx="31" cy="17" r="4" fill="hsl(24, 85%, 55%)" />
          <circle cx="17" cy="31" r="4" fill="hsl(24, 85%, 55%)" />
        </svg>
      ),
      title: "Simplify Marketing Decisions Effectively",
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 8L28 20H40L30 28L34 40L24 32L14 40L18 28L8 20H20L24 8Z" fill="white" />
        </svg>
      ),
      title: "Build Long-Term Growth Strategically",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[hsl(var(--section-dark))]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white leading-tight">
              <span className="italic font-normal">Achieve</span>{" "}
              <span className="font-bold">Your Ambitions</span>
              <br />
              <span className="font-normal">Goal Setting for Success</span>
            </h2>
          </div>

          {/* Goals Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {goals.map((goal, index) => (
              <div
                key={index}
                className="bg-[hsl(var(--section-dark-card))] rounded-2xl p-8 flex flex-col justify-between min-h-[220px] hover:bg-[hsl(155,25%,28%)] transition-colors"
              >
                <div className="mb-8">
                  {goal.icon}
                </div>
                <p className="text-white text-lg font-medium leading-snug">
                  {goal.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;