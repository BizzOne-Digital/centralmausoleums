import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ background: '#2c2820', color: '#d4cfc4', padding: '64px 56px 32px' }}>
      <style>{`
        .footer-link { color: #a09890; font-size: 0.875rem; text-decoration: none; transition: color 0.3s; display: block; margin-bottom: 10px; }
        .footer-link:hover { color: #d4aa4a; }
      `}</style>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '48px', marginBottom: '48px' }}>
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <svg width="30" height="30" viewBox="0 0 34 34" fill="none">
                <path d="M17 3L3 11V31H31V11L17 3Z" stroke="#b8922a" strokeWidth="1.2" fill="none"/>
                <rect x="11" y="20" width="12" height="11" stroke="#b8922a" strokeWidth="1" fill="none"/>
                <circle cx="17" cy="7" r="1.8" fill="#b8922a"/>
              </svg>
              <div>
                <div style={{ fontFamily: 'Cinzel, serif', fontSize: '0.78rem', letterSpacing: '0.1em', color: '#faf8f4' }}>CENTRAL MAUSOLEUMS</div>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '0.72rem', color: '#b8922a' }}>& Granite</div>
              </div>
            </div>
            <p style={{ color: '#7a7268', fontSize: '0.875rem', lineHeight: '1.8', maxWidth: '240px' }}>
              Crafting timeless memorials that honor lives with dignity, grace, and lasting beauty.
            </p>
          </div>

          <div>
            <h4 style={{ fontFamily: 'Cinzel, serif', fontSize: '0.65rem', letterSpacing: '0.22em', color: '#b8922a', marginBottom: '20px' }}>NAVIGATION</h4>
            {[['/', 'Home'], ['/about', 'About Us'], ['/products', 'Products'], ['/services', 'Services'], ['/contact', 'Contact']].map(([href, label]) => (
              <Link key={href} href={href} className="footer-link">{label}</Link>
            ))}
          </div>

          <div>
            <h4 style={{ fontFamily: 'Cinzel, serif', fontSize: '0.65rem', letterSpacing: '0.22em', color: '#b8922a', marginBottom: '20px' }}>PRODUCTS</h4>
            {['Single Mausoleum', 'Double Mausoleum', 'Four Crypt', 'Six Crypt', 'Columbarium', 'Cremation Benches'].map(item => (
              <Link key={item} href="/products" className="footer-link">{item}</Link>
            ))}
          </div>

          <div>
            <h4 style={{ fontFamily: 'Cinzel, serif', fontSize: '0.65rem', letterSpacing: '0.22em', color: '#b8922a', marginBottom: '20px' }}>CONTACT</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M6.6 10.8C7.8 13.2 9.8 15.2 12.2 16.4L14 14.6C14.2 14.4 14.6 14.4 14.8 14.6C15.8 15 16.8 15.2 18 15.2C18.4 15.2 18.8 15.6 18.8 16V18.8C18.8 19.2 18.4 19.6 18 19.6C9.4 19.6 2.4 12.6 2.4 4C2.4 3.6 2.8 3.2 3.2 3.2H6C6.4 3.2 6.8 3.6 6.8 4C6.8 5.2 7 6.2 7.4 7.2C7.4 7.4 7.4 7.8 7.2 8L6.6 10.8Z" stroke="#b8922a" strokeWidth="1.2"/></svg>, text: '+1 (910) 734-4426', href: 'tel:+19107344426' },
                { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M3 8L12 13L21 8M3 6H21V18H3V6Z" stroke="#b8922a" strokeWidth="1.2"/></svg>, text: 'Centralmausoleums@gmail.com', href: 'mailto:Centralmausoleums@gmail.com' },
              ].map((item, i) => (
                <a key={i} href={item.href} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', color: '#7a7268', fontSize: '0.875rem', textDecoration: 'none' }}>
                  <span style={{ marginTop: '2px', flexShrink: 0 }}>{item.icon}</span>
                  <span>{item.text}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <p style={{ color: '#4a4540', fontSize: '0.78rem' }}>© {new Date().getFullYear()} Central Mausoleums & Granite. All rights reserved.</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '32px', height: '1px', background: 'rgba(184,146,42,0.3)' }}/>
            <svg width="14" height="14" viewBox="0 0 34 34" fill="none"><path d="M17 3L3 11V31H31V11L17 3Z" stroke="rgba(184,146,42,0.4)" strokeWidth="1.2" fill="none"/></svg>
            <div style={{ width: '32px', height: '1px', background: 'rgba(184,146,42,0.3)' }}/>
          </div>
        </div>
      </div>
    </footer>
  );
}
