import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function BookSession() {
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [notes, setNotes] = useState<string>("");

  const tz = useMemo(() => Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC", []);
  const times = [
    "09:00",
    "10:00",
    "11:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
  ];

  function submit() {
    if (!date || !time || !name || !email) {
      alert("Please provide your name, email, date and time.");
      return;
    }
    const subject = encodeURIComponent("Personal Styling Session Request");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nPreferred Date: ${date}\nPreferred Time: ${time} (${tz})\nNotes: ${notes}`
    );
    const mailto = `mailto:styling@alyandandyz.com?subject=${subject}&body=${body}`;
    window.location.href = mailto;
  }

  return (
    <main className="min-h-screen bg-background">
      <section className="py-10 px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl lg:text-4xl font-light tracking-wide text-foreground">Personal Styling Session</h1>
          <p className="mt-2 text-muted-foreground">A complimentary 15-minute video consultation with our styling team to curate your perfect capsule.</p>

          <div className="mt-8 grid grid-cols-1 gap-6">
            <label className="block">
              <span className="block text-sm text-muted-foreground mb-2">Your Name</span>
              <input value={name} onChange={(e) => setName(e.target.value)} className="w-full px-3 py-2 border border-border rounded-sm bg-background" placeholder="Full name" />
            </label>

            <div className="grid sm:grid-cols-2 gap-6">
              <label className="block">
                <span className="block text-sm text-muted-foreground mb-2">Email</span>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2 border border-border rounded-sm bg-background" placeholder="you@email.com" />
              </label>
              <label className="block">
                <span className="block text-sm text-muted-foreground mb-2">Phone (optional)</span>
                <input value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full px-3 py-2 border border-border rounded-sm bg-background" placeholder="702-279-3697" />
              </label>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              <label className="block sm:col-span-2">
                <span className="block text-sm text-muted-foreground mb-2">Select Date</span>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full px-3 py-2 border border-border rounded-sm bg-background" />
              </label>
              <label className="block">
                <span className="block text-sm text-muted-foreground mb-2">Select Time ({tz})</span>
                <select value={time} onChange={(e) => setTime(e.target.value)} className="w-full px-3 py-2 border border-border rounded-sm bg-background">
                  <option value="">Choose…</option>
                  {times.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </label>
            </div>

            <label className="block">
              <span className="block text-sm text-muted-foreground mb-2">Notes (optional)</span>
              <textarea value={notes} onChange={(e) => setNotes(e.target.value)} className="w-full px-3 py-2 border border-border rounded-sm bg-background min-h-[120px]" placeholder="Sizing, hotel preference, desired capsule, etc." />
            </label>

            <div className="flex items-center gap-3">
              <Button className="rounded-sm" onClick={submit}>Request Booking</Button>
              <Button asChild variant="outline" className="rounded-sm">
                <a href="mailto:styling@alyandandyz.com">Email Instead</a>
              </Button>
              <Link to="/" className="text-sm text-muted-foreground underline hover:no-underline">Back to Home</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
