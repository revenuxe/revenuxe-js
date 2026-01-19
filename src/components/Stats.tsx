import { CheckCircle2, Users, Clock, Award } from "lucide-react";
const Stats = () => {
  const stats = [{
    icon: <CheckCircle2 className="w-8 h-8" />,
    value: "50,000+",
    label: "Repairs Completed"
  }, {
    icon: <Users className="w-8 h-8" />,
    value: "25,000+",
    label: "Happy Customers"
  }, {
    icon: <Clock className="w-8 h-8" />,
    value: "10+",
    label: "Years Experience"
  }, {
    icon: <Award className="w-8 h-8" />,
    value: "50+",
    label: "Expert Technicians"
  }];
  return <section className="py-20 md:py-32 bg-gradient-to-br from-background to-[hsl(0,30%,8%)] relative">
      
    </section>;
};
export default Stats;