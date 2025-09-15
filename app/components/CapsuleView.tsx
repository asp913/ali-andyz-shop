/* components/CapsuleView.tsx
   Reusable capsule page component: hero (on-model) → flat lay + includes → shop individually (size buttons) → trust.
   Props are designed to be bound from Builder data.
*/
import React from "react";

export type SizeLink = { label: string; url: string };
export type Include = { name: string; price: number };
export type Item = { name: string; price: number; sizes: SizeLink[] };

export type CapsuleProps = {
  title: string;
  subtitle: string;
  heroUrl: string;
  flatUrl: string;
  bundlePrice: number;
  bundleValue: number;
  bundleSave: number;
  priceRange: string;
  bundleLink: string;
  includes: Include[];
  items: Item[];
};

export default function CapsuleView(props: CapsuleProps) {
  const card: React.CSSProperties = { background:'#111214', border:'1px solid #2a2a2a', borderRadius:6, padding:20 };
  const btn: React.CSSProperties = { display:'inline-block', padding:'12px 18px', textDecoration:'none', textTransform:'uppercase', letterSpacing:'.12em', fontSize:13, borderRadius:4 };

  return (
    <div style={{ background:'#0a0a0a', color:'#e7e7e7', lineHeight:1.6 }}>
      {/* Hero */}
      <div style={{ position:'relative', width:'100%', height:'72vh', minHeight:520, background:'#111' }}>
        <img src={props.heroUrl} alt={`${props.title} on-model`} style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover' }} />
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(180deg,rgba(0,0,0,.15),rgba(0,0,0,.55))' }} />
        <div style={{ position:'absolute', left:0, right:0, bottom:0, padding:'32px 20px 40px' }}>
          <div style={{ maxWidth:1080, margin:'0 auto' }}>
            <p style={{ textTransform:'uppercase', letterSpacing:'.18em', fontSize:12, opacity:.9, margin:'0 0 6px' }}>{props.title}</p>
            <h1 style={{ fontWeight:300, fontSize:'clamp(28px,5vw,52px)', margin:'0 0 8px' }}>{props.subtitle}</h1>
            <p style={{ color:'rgba(255,255,255,.9)', margin:0 }}>
              Bundle ${props.bundlePrice} · Value ${props.bundleValue} · Save ${props.bundleSave} • Price range: {props.priceRange}
            </p>
            <div style={{ marginTop:18, display:'flex', gap:12, flexWrap:'wrap' }}>
              <a href={props.bundleLink} style={{ ...btn, background:'#fff', color:'#000' }}>Add Full Capsule — ${props.bundlePrice}</a>
              <a href="#shop-individually" style={{ ...btn, border:'1px solid rgba(255,255,255,.7)', color:'#fff' }}>Shop Individually</a>
            </div>
          </div>
        </div>
      </div>

      {/* Flat lay + includes */}
      <section style={{ padding:'56px 0' }}>
        <div style={{ maxWidth:1080, margin:'0 auto', padding:'0 20px' }}>
          <img src={props.flatUrl} alt={`${props.title} flat lay`} style={{ width:'100%', borderRadius:6, border:'1px solid #2a2a2a' }} />
          <div style={{ display:'grid', gap:20, marginTop:26 }}>
            <div style={card}>
              <h3 style={{ margin:'0 0 8px', fontWeight:300 }}>Why this capsule</h3>
              <ul style={{ margin:'10px 0 0 18px', color:'#a3a3a3' }}>
                <li>Save ${props.bundleSave} vs. buying separately</li>
                <li>Curated to coordinate—zero guesswork</li>
                <li>Everyday comfort with capsule-level polish</li>
              </ul>
            </div>
            <div style={card}>
              <h3 style={{ margin:'0 0 8px', fontWeight:300 }}>Includes ({props.includes?.length ?? 0} pieces)</h3>
              <div style={{ display:'grid', gap:8, gridTemplateColumns:'1fr', color:'#a3a3a3' }}>
                {props.includes?.map(i => <div key={i.name}>{i.name} — ${i.price}</div>)}
              </div>
              <div style={{ marginTop:14 }}>
                <a href={props.bundleLink} style={{ ...btn, background:'#fff', color:'#000' }}>Add Full Capsule — ${props.bundlePrice}</a>
                <span style={{ marginLeft:10, color:'#a3a3a3', fontSize:14 }}>Only 3 left</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shop individually */}
      <section id="shop-individually" style={{ padding:'56px 0', background:'#0f1012', borderTop:'1px solid #2a2a2a', borderBottom:'1px solid #2a2a2a' }}>
        <div style={{ maxWidth:1080, margin:'0 auto', padding:'0 20px' }}>
          <h2 style={{ fontWeight:300, margin:'0 0 18px' }}>Shop Individually</h2>
          <div style={{ display:'grid', gap:20 }}>
            {props.items?.map(item => (
              <div key={item.name} style={card}>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline' }}>
                  <h3 style={{ margin:0, fontWeight:500 }}>{item.name}</h3>
                  <div>${item.price}</div>
                </div>
                <div style={{ marginTop:6, color:'#a3a3a3' }}>{item.sizes.length > 1 ? 'Choose your size:' : 'Size:'}</div>
                <div style={{ display:'flex', flexWrap:'wrap', gap:8, marginTop:10 }}>
                  {item.sizes.map(s => (
                    <a key={s.label} href={s.url} style={{ border:'1px solid #2a2a2a', padding:'8px 12px', borderRadius:4, textDecoration:'none', color:'#e7e7e7' }}>
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section style={{ padding:'56px 0' }}>
        <div style={{ maxWidth:1080, margin:'0 auto', padding:'0 20px', display:'grid', gap:24 }}>
          <div>
            <div>✓ Free shipping over $100</div><div style={{ height:6 }} />
            <div>✓ 30-day easy returns</div><div style={{ height:6 }} />
            <div>✓ Sustainable materials</div>
          </div>
          <div style={{ color:'#a3a3a3' }}>
            <div>Secure Shopping — SSL encrypted checkout</div>
            <div>Authenticity Guarantee — Every piece verified</div>
            <div style={{ marginTop:10, fontStyle:'italic' }}>"Absolutely love the unique pieces!" — Sarah M.</div>
          </div>
        </div>
      </section>
    </div>
  );
}
