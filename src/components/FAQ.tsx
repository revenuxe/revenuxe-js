import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
  description?: string;
}

const FAQ = ({ items, title = "Frequently Asked Questions", description }: FAQProps) => {
  return (
    <section className="py-14 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-3">{title}</h2>
            {description && (
              <p className="text-sm md:text-base text-muted-foreground">{description}</p>
            )}
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left text-sm md:text-base font-semibold hover:text-primary py-4 md:py-6">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4 md:pb-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
