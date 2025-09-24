export default function TrustSignals() {
  return (
    <section className="py-16 px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="sr-only">Trust & Social Proof</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border border-border rounded-sm p-5">
            <div className="text-sm font-semibold text-foreground">Secure Shopping</div>
            <div className="text-muted-foreground">SSL encrypted checkout</div>
          </div>
          <div className="border border-border rounded-sm p-5">
            <div className="text-sm font-semibold text-foreground">Authenticity Guarantee</div>
            <div className="text-muted-foreground">Every piece verified</div>
          </div>
          <div className="border border-border rounded-sm p-5">
            <div className="text-sm font-semibold text-foreground">50,000+ Happy Customers</div>
            <div className="text-muted-foreground">Worldwide community</div>
          </div>
          <div className="border border-border rounded-sm p-5">
            <div className="text-sm font-semibold text-foreground">Global Shipping</div>
            <div className="text-muted-foreground">Delivery worldwide</div>
          </div>
          <div className="border border-border rounded-sm p-5 lg:col-span-2">
            <div className="text-sm font-semibold text-foreground">4.9/5 from 2,847 reviews</div>
            <div className="text-muted-foreground">Real feedback from our community</div>
          </div>
        </div>

        <figure className="mt-10 border border-border rounded-sm p-6 bg-background">
          <blockquote className="text-lg text-foreground leading-relaxed">
            "Absolutely love the unique pieces! Never seen anything like this elsewhere."
          </blockquote>
          <figcaption className="mt-3 text-sm text-muted-foreground">— Sarah M.</figcaption>
        </figure>
      </div>
    </section>
  );
}
