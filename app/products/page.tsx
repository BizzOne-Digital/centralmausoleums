import Link from 'next/link';
import Image from 'next/image';

const products = [
  {
    name: 'Single Mausoleum',
    category: 'Mausoleum',
    desc: 'An intimate and dignified resting place, crafted for one with enduring granite and refined architectural detail. Perfect for individuals seeking a private above-ground memorial.',
    features: ['Premium granite construction', 'Custom engraving', 'Weather-sealed interior', 'Classical or modern design'],
    img: '/about.png',
  },
  {
    name: 'Double Mausoleum',
    category: 'Mausoleum',
    desc: 'A shared monument of love and legacy, designed to honor two lives with timeless elegance. Perfect for couples and life partners seeking a joint memorial.',
    features: ['Dual crypt capacity', 'Matching interior finishes', 'Joint inscription panels', 'Bronze door options'],
    img: '/product2.png',
  },
  {
    name: 'Four Crypt Mausoleum',
    category: 'Mausoleum',
    desc: 'A distinguished family structure accommodating four crypts with grand proportions and refined granite craftsmanship, ideal for immediate family memorialization.',
    features: ['Four individual crypts', 'Stacked or side-by-side layout', 'Interior ventilation', 'Family name inscription'],
    img: '/product3.png',
  },
  {
    name: 'Six Crypt Mausoleum',
    category: 'Mausoleum',
    desc: 'A grand estate-level memorial accommodating six family members. Stately proportions, premium granite, and architectural grandeur define this impressive structure.',
    features: ['Six individual crypts', 'Grand entryway', 'Interior marble options', 'Stained glass available'],
    img: '/product4.png',
  },
  {
    name: 'Estate Mausoleum',
    category: 'Estate',
    desc: 'The pinnacle of memorial architecture — a grand private estate mausoleum with full interior access, seating, and capacity for an entire family legacy.',
    features: ['Walk-in interior', 'Multiple crypt levels', 'Interior seating & windows', 'Fully custom design'],
    img: '/product5.png',
  },
  {
    name: 'Family Columbarium',
    category: 'Columbarium',
    desc: 'Beautifully designed niches for cremated remains arranged for an entire family. A graceful, space-efficient memorial honoring multiple loved ones.',
    features: ['Multiple niche configurations', 'Individual name plates', 'Sealed niche fronts', 'Photo inset options'],
    img: '/product6.png',
  },
  {
    name: 'Community Columbarium',
    category: 'Columbarium',
    desc: 'Large-scale columbarium structures designed for cemeteries, churches, and community organizations — accommodating hundreds of niches with elegant design.',
    features: ['High-capacity niche design', 'Modular expandable system', 'Weather-resistant granite', 'Custom engraving'],
    img: '/product7.png',
  },
  {
    name: 'Cremation Bench',
    category: 'Cremation',
    desc: 'A serene granite bench serving as both a memorial tribute and a peaceful resting place for reflection, incorporating an urn chamber with discreet elegance.',
    features: ['Integrated urn chamber', 'Custom inscription panel', 'Multiple granite colors', 'Weather-resistant seal'],
    img: '/product8.png',
  },
  {
    name: 'Cemetery Restoration',
    category: 'Service',
    desc: 'Professional restoration of existing mausoleums, memorials, and granite structures — bringing weathered monuments back to their original dignity and beauty.',
    features: ['Structural assessment', 'Surface cleaning & sealing', 'Crack and joint repair', 'Complete refurbishment'],
    img: '/product9.png',
  },
];

const categoryColors: Record<string, string> = {
  Mausoleum: '#2c2820',
  Estate: '#4a3820',
  Columbarium: '#1e3030',
  Cremation: '#2c2030',
  Service: '#2a2840',
};

export default function ProductsPage() {
  return (
    <div style={{ background: '#faf8f4', paddingTop: '80px' }}>
      {/* Hero */}
      <section style={{ position: 'relative', height: '360px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Image
          src="https://images.unsplash.com/photo-1694891443828-81612669f87a?q=80&auto=format&fit=crop"
          alt="Mausoleum products"
          fill style={{ objectFit: 'cover', objectPosition: 'center 40%' }} quality={85}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,8,5,0.62)' }}/>
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', justifyContent: 'center', marginBottom: '18px' }}>
            <div style={{ width: '36px', height: '1px', background: '#b8922a' }}/>
            <span style={{ fontFamily: 'Cinzel, serif', fontSize: '0.58rem', letterSpacing: '0.4em', color: '#d4aa4a' }}>OUR COLLECTION</span>
            <div style={{ width: '36px', height: '1px', background: '#b8922a' }}/>
          </div>
          <h1 style={{ fontFamily: 'Cinzel, serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#faf8f4', letterSpacing: '0.04em' }}>
            Products & Services
          </h1>
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem', color: 'rgba(244,240,232,0.8)', marginTop: '14px' }}>
            From intimate single mausoleums to grand community structures
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-pad" style={{ padding: '80px 56px', maxWidth: '1300px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px' }} className="grid-3">
          {products.map((p, i) => (
            <div key={i} className="product-card">
              {/* Image */}
              <div className="card-img" style={{ height: '240px', position: 'relative', background: '#e8e4dc', overflow: 'hidden' }}>
                <Image src={p.img} alt={p.name} fill style={{ objectFit: 'cover' }} quality={80}/>
                {/* Category badge */}
                <div style={{
                  position: 'absolute', top: '14px', left: '14px',
                  background: categoryColors[p.category] || '#2c2820',
                  padding: '5px 14px',
                  fontFamily: 'Cinzel, serif',
                  fontSize: '0.52rem',
                  letterSpacing: '0.2em',
                  color: '#d4aa4a',
                  textTransform: 'uppercase',
                }}>{p.category}</div>
              </div>

              {/* Content */}
              <div style={{ padding: '28px 26px 30px' }}>
                <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '0.95rem', letterSpacing: '0.07em', color: '#2c2820', marginBottom: '12px' }}>
                  {p.name}
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#7a7268', lineHeight: 1.75, marginBottom: '20px' }}>{p.desc}</p>

                {/* Features */}
                <div style={{ marginBottom: '24px', paddingBottom: '24px', borderBottom: '1px solid rgba(184,146,42,0.12)' }}>
                  {p.features.map((f, fi) => (
                    <div key={fi} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '7px' }}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <circle cx="7" cy="7" r="6" stroke="#b8922a" strokeWidth="0.8" fill="rgba(184,146,42,0.06)"/>
                        <path d="M4 7L6.5 9.5L10 5" stroke="#b8922a" strokeWidth="1" strokeLinecap="round"/>
                      </svg>
                      <span style={{ fontSize: '0.8rem', color: '#4a4540' }}>{f}</span>
                    </div>
                  ))}
                </div>

                <Link href="/contact" className="btn-outline" style={{ fontSize: '0.62rem', padding: '10px 22px' }}>
                  Request a Quote
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#2c2820', padding: '72px 56px', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2rem)', color: '#faf8f4', marginBottom: '14px' }}>Need a Custom Solution?</h2>
        <p style={{ color: '#7a7268', maxWidth: '460px', margin: '0 auto 36px', fontSize: '0.95rem' }}>
          Contact us for a personalized consultation and custom pricing based on your specific requirements.
        </p>
        <div className="btn-row" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/contact" className="btn-gold">Request Custom Quote</Link>
          <a href="tel:+19107344426" style={{ display: 'inline-block', background: 'transparent', color: '#faf8f4', fontFamily: 'Cinzel, serif', fontSize: '0.68rem', letterSpacing: '0.2em', padding: '13px 35px', border: '1.5px solid rgba(250,248,244,0.3)', textDecoration: 'none' }}>Call Us Directly</a>
        </div>
      </section>
    </div>
  );
}
