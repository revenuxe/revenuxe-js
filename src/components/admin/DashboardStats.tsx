import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Users, FileText, TrendingUp, CheckCircle } from "lucide-react";

export const DashboardStats = () => {
  const [stats, setStats] = useState({
    totalLeads: 0,
    newLeads: 0,
    caseStudies: 0,
    convertedLeads: 0,
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const [leadsResponse, newLeadsResponse, caseStudiesResponse, convertedResponse] =
        await Promise.all([
          supabase.from("leads").select("*", { count: "exact", head: true }),
          supabase
            .from("leads")
            .select("*", { count: "exact", head: true })
            .eq("status", "new"),
          supabase.from("case_studies").select("*", { count: "exact", head: true }),
          supabase
            .from("leads")
            .select("*", { count: "exact", head: true })
            .eq("status", "converted"),
        ]);

      setStats({
        totalLeads: leadsResponse.count || 0,
        newLeads: newLeadsResponse.count || 0,
        caseStudies: caseStudiesResponse.count || 0,
        convertedLeads: convertedResponse.count || 0,
      });
    } catch (error) {
      console.error("Error fetching stats:", error);
    }
  };

  const statCards = [
    {
      title: "Total Leads",
      value: stats.totalLeads,
      icon: Users,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      title: "New Leads",
      value: stats.newLeads,
      icon: TrendingUp,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      title: "Converted",
      value: stats.convertedLeads,
      icon: CheckCircle,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
    {
      title: "Case Studies",
      value: stats.caseStudies,
      icon: FileText,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {statCards.map((stat) => (
        <Card key={stat.title} className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
              <p className="text-3xl font-bold mt-2">{stat.value}</p>
            </div>
            <div className={`p-3 rounded-full ${stat.bgColor}`}>
              <stat.icon className={`h-6 w-6 ${stat.color}`} />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};
