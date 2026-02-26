import { BarChart3, TrendingUp, Users, Zap, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const tabs = [
  {
    id: "analytics",
    label: "AI Analytics",
    icon: <BarChart3 className="w-5 h-5" />,
    title: "Real-Time Marketing Analytics",
    description:
      "Track every campaign, click, and conversion with AI-powered dashboards that surface insights humans miss.",
    stats: [
      { label: "Avg. ROI Increase", value: "42%", trend: "+5% this month" },
      { label: "Campaigns Managed", value: "30+", trend: "Active now" },
      { label: "Data Points Analyzed", value: "500K+", trend: "Per month" },
    ],
    visual: (
      <div className="relative w-full aspect-[16/10] bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl border border-border overflow-hidden p-6">
        {/* Mock Dashboard */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="h-3 w-32 bg-primary/20 rounded-full" />
            <div className="flex gap-2">
              <div className="h-6 w-16 bg-accent/20 rounded-md" />
              <div className="h-6 w-16 bg-primary/20 rounded-md" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-3 space-y-2">
                <div className="h-2 w-12 bg-muted-foreground/20 rounded" />
                <div className="h-5 w-16 bg-primary/30 rounded" />
              </div>
            ))}
          </div>
          {/* Chart bars */}
          <div className="flex items-end gap-2 h-28 pt-4">
            {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-sm transition-all duration-500"
                style={{
                  height: `${h}%`,
                  background: i >= 8
                    ? "hsl(var(--accent))"
                    : "hsl(var(--primary) / 0.3)",
                }}
              />
            ))}
          </div>
        </div>
        {/* Floating card */}
        <div className="absolute bottom-4 right-4 bg-card border border-border shadow-lg rounded-lg p-3 flex items-center gap-3 animate-bounce-slow">
          <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-accent" />
          </div>
          <div>
            <p className="text-[10px] text-muted-foreground">Revenue Growth</p>
            <p className="text-sm font-bold text-foreground">+38%</p>
          </div>
        </div>
        {/* Animated scan line */}
        <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
          <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent animate-scan" />
        </div>
      </div>
    ),
  },
  {
    id: "automation",
    label: "AI Automation",
    icon: <Zap className="w-5 h-5" />,
    title: "Marketing Automation Engine",
    description:
      "Automate repetitive tasks, schedule campaigns, and trigger personalized workflows — all powered by AI.",
    stats: [
      { label: "Hours Saved / Month", value: "40+", trend: "Per client" },
      { label: "Workflows Active", value: "12", trend: "Running 24/7" },
      { label: "Response Time", value: "<5s", trend: "AI-powered" },
    ],
    visual: (
      <div className="relative w-full aspect-[16/10] bg-gradient-to-br from-accent/5 to-primary/5 rounded-xl border border-border overflow-hidden p-6">
        {/* Mock Automation Flow */}
        <div className="space-y-3">
          {["Lead Captured", "AI Scoring", "Auto Email Sequence", "CRM Update", "Slack Alert"].map(
            (step, i) => (
              <div
                key={i}
                className="flex items-center gap-3 animate-fade-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${
                    i <= 2
                      ? "bg-accent text-accent-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {i + 1}
                </div>
                <div className="flex-1 h-10 bg-card border border-border rounded-lg flex items-center px-3">
                  <span className="text-xs font-medium text-foreground">{step}</span>
                  {i <= 2 && (
                    <span className="ml-auto text-[10px] text-accent font-semibold">✓ Done</span>
                  )}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    ),
  },
  {
    id: "audience",
    label: "AI Audiences",
    icon: <Users className="w-5 h-5" />,
    title: "Smart Audience Targeting",
    description:
      "AI analyzes behavior patterns and segments your audience for hyper-targeted campaigns that convert.",
    stats: [
      { label: "Conversion Lift", value: "1.5x", trend: "vs. manual targeting" },
      { label: "Segments Created", value: "25+", trend: "Auto-generated" },
      { label: "Accuracy", value: "82%", trend: "Prediction rate" },
    ],
    visual: (
      <div className="relative w-full aspect-[16/10] bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl border border-border overflow-hidden p-6">
        <div className="grid grid-cols-2 gap-3 h-full">
          {[
            { label: "High Intent", pct: 34, color: "bg-accent" },
            { label: "Warm Leads", pct: 28, color: "bg-primary" },
            { label: "Retargeting", pct: 22, color: "bg-accent/60" },
            { label: "New Visitors", pct: 16, color: "bg-primary/40" },
          ].map((seg, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-lg p-4 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-foreground">{seg.label}</span>
                <ArrowUpRight className="w-3 h-3 text-accent" />
              </div>
              <div className="mt-2">
                <div className="text-2xl font-bold text-foreground">{seg.pct}%</div>
                <div className="w-full h-1.5 bg-muted rounded-full mt-2">
                  <div
                    className={`h-full rounded-full ${seg.color}`}
                    style={{ width: `${seg.pct * 2.5}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

const DashboardShowcase = () => {
  const [activeTab, setActiveTab] = useState("analytics");
  const active = tabs.find((t) => t.id === activeTab)!;

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Subtle bg glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary text-sm font-bold uppercase tracking-wider">
            Platform Preview
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold">
            See AI Marketing <span className="italic text-primary">in Action</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our AI-powered tools give you superpowers — from analytics to automation to audience targeting.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {tab.icon}
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Info */}
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">
              {active.title}
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {active.description}
            </p>
            <div className="grid grid-cols-3 gap-4 pt-4">
              {active.stats.map((stat, i) => (
                <div key={i} className="space-y-1">
                  <p className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                  <p className="text-[10px] text-accent font-medium">{stat.trend}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual */}
          <div className="animate-fade-in">{active.visual}</div>
        </div>
      </div>
    </section>
  );
};

export default DashboardShowcase;
