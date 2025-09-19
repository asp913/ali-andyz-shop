import { Link, useLocation } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SizeGuide() {
  const loc = useLocation();
  const initialTab = useMemo(() => {
    const hash = loc.hash?.toLowerCase() || "";
    const params = new URLSearchParams(loc.search);
    if (hash.includes("men") || params.get("gender") === "men") return "men";
    if (hash.includes("women") || params.get("gender") === "women") return "women";
    return "women";
  }, [loc.hash, loc.search]);
  const [tab, setTab] = useState(initialTab);
  useEffect(() => setTab(initialTab), [initialTab]);

  return (
    <main className="min-h-screen bg-background px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-light tracking-wide text-foreground">Size Guide</h1>
          <p className="mt-2 text-muted-foreground">Measurements are in inches.</p>
        </header>

        <Tabs value={tab} onValueChange={setTab} className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="women" id="women">Women</TabsTrigger>
            <TabsTrigger value="men" id="men">Men</TabsTrigger>
          </TabsList>

          <TabsContent value="women">
            <section className="rounded-sm border border-border overflow-hidden bg-card">
              <div className="overflow-x-auto">
                <table className="w-full table-fixed text-sm">
                  <thead className="bg-muted/40 text-foreground">
                    <tr className="grid grid-cols-5 md:table-row">
                      <th className="p-3 font-medium text-left">Size</th>
                      <th className="p-3 font-medium text-left">Bust</th>
                      <th className="p-3 font-medium text-left">Waist</th>
                      <th className="p-3 font-medium text-left">Hip</th>
                      <th className="p-3 font-medium text-left">Inseam</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { s: 'XS', b: '31–33', w: '24–26', h: '34–36', i: '28' },
                      { s: 'S',  b: '33–35', w: '26–28', h: '36–38', i: '28.5' },
                      { s: 'M',  b: '35–37', w: '28–30', h: '38–40', i: '29' },
                      { s: 'L',  b: '37–39', w: '30–32', h: '40–42', i: '29.5' },
                      { s: 'XL', b: '39–41', w: '32–34', h: '42–44', i: '30' },
                    ].map((row) => (
                      <tr key={row.s} className="md:table-row grid grid-cols-5">
                        <td className="p-3 text-foreground">{row.s}</td>
                        <td className="p-3 text-muted-foreground">{row.b}</td>
                        <td className="p-3 text-muted-foreground">{row.w}</td>
                        <td className="p-3 text-muted-foreground">{row.h}</td>
                        <td className="p-3 text-muted-foreground">{row.i}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mt-10">
              <h2 className="text-xl font-medium text-foreground mb-3">How to Measure</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>Bust — measure around the fullest part of your chest.</li>
                <li>Waist — measure around your natural waistline.</li>
                <li>Hip — measure around the fullest part of your hips.</li>
                <li>Inseam — measure from top of inner thigh to ankle.</li>
              </ul>
            </section>
          </TabsContent>

          <TabsContent value="men">
            <section className="rounded-sm border border-border overflow-hidden bg-card">
              <div className="overflow-x-auto">
                <table className="w-full table-fixed text-sm">
                  <thead className="bg-muted/40 text-foreground">
                    <tr className="grid grid-cols-5 md:table-row">
                      <th className="p-3 font-medium text-left">Size</th>
                      <th className="p-3 font-medium text-left">Chest</th>
                      <th className="p-3 font-medium text-left">Waist</th>
                      <th className="p-3 font-medium text-left">Hip</th>
                      <th className="p-3 font-medium text-left">Inseam</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { s: 'S',  c: '35–37', w: '29–31', h: '35–37', i: '30' },
                      { s: 'M',  c: '38–40', w: '32–34', h: '38–40', i: '31' },
                      { s: 'L',  c: '41–43', w: '35–37', h: '41–43', i: '32' },
                      { s: 'XL', c: '44–46', w: '38–40', h: '44–46', i: '33' },
                      { s: 'XXL',c: '47–49', w: '41–43', h: '47–49', i: '34' },
                    ].map((row) => (
                      <tr key={row.s} className="md:table-row grid grid-cols-5">
                        <td className="p-3 text-foreground">{row.s}</td>
                        <td className="p-3 text-muted-foreground">{row.c}</td>
                        <td className="p-3 text-muted-foreground">{row.w}</td>
                        <td className="p-3 text-muted-foreground">{row.h}</td>
                        <td className="p-3 text-muted-foreground">{row.i}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mt-10">
              <h2 className="text-xl font-medium text-foreground mb-3">How to Measure</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>Chest — measure around fullest part, under arms.</li>
                <li>Waist — measure around your natural waistline.</li>
                <li>Hip — measure around fullest part of your hips.</li>
                <li>Inseam — measure from crotch seam to ankle.</li>
              </ul>
            </section>
          </TabsContent>
        </Tabs>

        <p className="mt-10 text-xs text-muted-foreground">All pieces are curated in small runs. Please allow ~21 days for delivery.</p>

        <div className="mt-8">
          <Link to={-1 as unknown as string} className="underline text-sm">Back</Link>
        </div>
      </div>
    </main>
  );
}
