import { ShieldCheck, Truck, RotateCcw, Heart } from "lucide-react";

const signals = [
  {
    icon: ShieldCheck,
    title: "Sustainable Materials",
    description: "Ethically sourced fabrics and responsible manufacturing practices"
  },
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Complimentary delivery on orders over $150 worldwide"
  },
  {
    icon: RotateCcw,
    title: "30-Day Returns",
    description: "Easy returns and exchanges within 30 days of purchase"
  },
  {
    icon: Heart,
    title: "Curated Collections",
    description: "Hand-selected pieces that transcend seasonal trends"
  }
];

export default function TrustSignals() {
  return (
    <section className="py-16 px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {signals.map((signal, index) => {
            const Icon = signal.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <Icon className="h-8 w-8 text-foreground/70" />
                </div>
                <h3 className="text-sm font-medium text-foreground mb-2 tracking-wide uppercase">
                  {signal.title}
                </h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  {signal.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
