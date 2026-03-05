const WhyChooseUs = ({ cityName }: { cityName?: string }) => {
  const goals = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="10" fill="hsl(175, 65%, 42%)" />
          <circle cx="16" cy="16" r="8" fill="hsl(175, 65%, 42%)" />
          <circle cx="32" cy="16" r="8" fill="hsl(175, 65%, 42%)" />
          <circle cx="16" cy="32" r="8" fill="hsl(175, 65%, 42%)" />
          <circle cx="32" cy="32" r="8" fill="hsl(175, 65%, 42%)" />
        </svg>
      ),
      title: `Maximize Return on Investments${cityName ? ` in ${cityName}` : ""}`,
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="14" r="5" fill="hsl(195, 70%, 60%)" />
          <circle cx="14" cy="24" r="5" fill="hsl(195, 70%, 60%)" />
          <circle cx="34" cy="24" r="5" fill="hsl(195, 70%, 60%)" />
          <circle cx="24" cy="34" r="5" fill="hsl(195, 70%, 60%)" />
          <circle cx="17" cy="17" r="4" fill="hsl(195, 70%, 60%)" />
          <circle cx="31" cy="17" r="4" fill="hsl(195, 70%, 60%)" />
          <circle cx="17" cy="31" r="4" fill="hsl(195, 70%, 60%)" />
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
    <section className="py-14 md:py-24 bg-[hsl(var(--section-dark))]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display text-white leading-tight">
              <span className="italic font-normal">Achieve</span>{" "}
              <span className="font-bold">Your Ambitions</span>
              <br />
              <span className="font-normal">Goal Setting for Success</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
            {goals.map((goal, index) => (
              <div
                key={index}
                className="bg-[hsl(var(--section-dark-card))] rounded-2xl p-6 md:p-8 flex flex-col justify-between min-h-[180px] md:min-h-[220px] hover:bg-[hsl(220,45%,26%)] transition-colors"
              >
                <div className="mb-6 md:mb-8">
                  {goal.icon}
                </div>
                <p className="text-white text-base md:text-lg font-medium leading-snug">
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