'use client';
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

type GalleryImage = { src: string; alt: string; category: string };

const galleryImages: GalleryImage[] = [
  /* ── Double Mausoleums (22) ── */
  ...Array.from({length: 9}, (_, i) => ({
    src: `/gallery/double-mausoleums/img-${i+1}.jpg`,
    alt: `Double Mausoleum ${i+1}`,
    category: 'Double Mausoleums',
  })),
  { src: '/gallery/double-mausoleums/img-10.jpg', alt: 'Double Mausoleum 10', category: 'Double Mausoleums' },
  { src: '/gallery/double-mausoleums/img-11.jpg', alt: 'Double Mausoleum 11', category: 'Double Mausoleums' },
  { src: '/gallery/double-mausoleums/img-12.jpg', alt: 'Double Mausoleum 12', category: 'Double Mausoleums' },
  { src: '/gallery/double-mausoleums/img-13.jpg', alt: 'Double Mausoleum 13', category: 'Double Mausoleums' },
  { src: '/gallery/double-mausoleums/img-14.jpeg', alt: 'Double Mausoleum 14', category: 'Double Mausoleums' },
  { src: '/gallery/double-mausoleums/img-15.png', alt: 'Double Mausoleum 15', category: 'Double Mausoleums' },
  { src: '/gallery/double-mausoleums/img-16.png', alt: 'Double Mausoleum 16', category: 'Double Mausoleums' },
  { src: '/gallery/double-mausoleums/img-17.png', alt: 'Double Mausoleum 17', category: 'Double Mausoleums' },
  { src: '/gallery/double-mausoleums/img-18.png', alt: 'Double Mausoleum 18', category: 'Double Mausoleums' },
  { src: '/gallery/double-mausoleums/img-19.png', alt: 'Double Mausoleum 19', category: 'Double Mausoleums' },
  { src: '/gallery/double-mausoleums/img-20.png', alt: 'Double Mausoleum 20', category: 'Double Mausoleums' },
  { src: '/gallery/double-mausoleums/img-21.png', alt: 'Double Mausoleum 21', category: 'Double Mausoleums' },
  { src: '/gallery/double-mausoleums/img-22.png', alt: 'Double Mausoleum 22', category: 'Double Mausoleums' },

  /* ── Estates (19) ── */
  ...Array.from({length: 14}, (_, i) => ({
    src: `/gallery/estates/img-${i+1}.jpg`,
    alt: `Estate Mausoleum ${i+1}`,
    category: 'Estates',
  })),
  { src: '/gallery/estates/img-15.png', alt: 'Estate Mausoleum 15', category: 'Estates' },
  { src: '/gallery/estates/img-16.png', alt: 'Estate Mausoleum 16', category: 'Estates' },
  { src: '/gallery/estates/img-17.png', alt: 'Estate Mausoleum 17', category: 'Estates' },
  { src: '/gallery/estates/img-18.png', alt: 'Estate Mausoleum 18', category: 'Estates' },
  { src: '/gallery/estates/img-19.png', alt: 'Estate Mausoleum 19', category: 'Estates' },

  /* ── Family Columbarium (12) ── */
  ...Array.from({length: 7}, (_, i) => ({
    src: `/gallery/family-columbarium/img-${i+1}.jpg`,
    alt: `Family Columbarium ${i+1}`,
    category: 'Family Columbarium',
  })),
  { src: '/gallery/family-columbarium/img-8.png',  alt: 'Family Columbarium 8',  category: 'Family Columbarium' },
  { src: '/gallery/family-columbarium/img-9.png',  alt: 'Family Columbarium 9',  category: 'Family Columbarium' },
  { src: '/gallery/family-columbarium/img-10.png', alt: 'Family Columbarium 10', category: 'Family Columbarium' },
  { src: '/gallery/family-columbarium/img-11.png', alt: 'Family Columbarium 11', category: 'Family Columbarium' },
  { src: '/gallery/family-columbarium/img-12.png', alt: 'Family Columbarium 12', category: 'Family Columbarium' },

  /* ── Community Columbarium (7) ── */
  ...Array.from({length: 7}, (_, i) => ({
    src: `/gallery/community-columbarium/img-${i+1}.jpg`,
    alt: `Community Columbarium ${i+1}`,
    category: 'Community Columbarium',
  })),

  /* ── Cremation Benches (8) ── */
  { src: '/gallery/cremation-benches/img-1.png', alt: 'Cremation Bench 1', category: 'Cremation Benches' },
  { src: '/gallery/cremation-benches/img-2.png', alt: 'Cremation Bench 2', category: 'Cremation Benches' },
  { src: '/gallery/cremation-benches/img-3.png', alt: 'Cremation Bench 3', category: 'Cremation Benches' },
  { src: '/gallery/cremation-benches/img-4.png', alt: 'Cremation Bench 4', category: 'Cremation Benches' },
  { src: '/gallery/cremation-benches/img-5.png', alt: 'Cremation Bench 5', category: 'Cremation Benches' },
  { src: '/gallery/cremation-benches/img-6.png', alt: 'Cremation Bench 6', category: 'Cremation Benches' },
  { src: '/gallery/cremation-benches/img-7.jpg', alt: 'Cremation Bench 7', category: 'Cremation Benches' },
  { src: '/gallery/cremation-benches/img-8.jpg', alt: 'Cremation Bench 8', category: 'Cremation Benches' },
];

const CATS = ['All', 'Double Mausoleums', 'Estates', 'Family Columbarium', 'Community Columbarium', 'Cremation Benches'];

export default function GalleryPage() {
  const [active, setActive] = useState('All');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = active === 'All' ? galleryImages : galleryImages.filter(img => img.category === active);

  const closeLightbox = useCallback(() => setLightbox(null), []);
  const prev = useCallback(() => setLightbox(i => i !== null ? (i - 1 + filtered.length) % filtered.length : null), [filtered.length]);
  const next = useCallback(() => setLightbox(i => i !== null ? (i + 1) % filtered.length : null), [filtered.length]);

  useEffect(() => {
    if (lightbox === null) return;
    const h = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', h);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', h); document.body.style.overflow = ''; };
  }, [lightbox, prev, next, closeLightbox]);

  return (
    <div style={{ background: '#faf8f4', paddingTop: '80px', minHeight: '100vh' }}>

      {/* Hero */}
      <section style={{ background: '#2c2820', padding: 'clamp(56px,8vw,80px) clamp(20px,5vw,56px)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.04 }}>
          <svg width="100%" height="100%" viewBox="0 0 1200 300" preserveAspectRatio="xMidYMid slice">
            <defs><pattern id="gg" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M60 0L0 0 0 60" fill="none" stroke="#b8922a" strokeWidth="0.5"/></pattern></defs>
            <rect width="100%" height="100%" fill="url(#gg)"/>
          </svg>
        </div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', justifyContent: 'center', marginBottom: '18px' }}>
            <div style={{ width: '36px', height: '1px', background: '#b8922a' }}/>
            <span style={{ fontFamily: 'Cinzel, serif', fontSize: '0.58rem', letterSpacing: '0.4em', color: '#d4aa4a' }}>OUR WORK</span>
            <div style={{ width: '36px', height: '1px', background: '#b8922a' }}/>
          </div>
          <h1 style={{ fontFamily: 'Cinzel, serif', fontSize: 'clamp(2rem, 5vw, 3.2rem)', color: '#faf8f4', marginBottom: '14px' }}>Gallery</h1>
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1rem,2vw,1.2rem)', color: 'rgba(212,200,180,0.8)', maxWidth: '540px', margin: '0 auto' }}>
            {galleryImages.length} real images from our portfolio — mausoleums, columbariums, estates, and cremation memorials built with enduring craftsmanship.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section style={{ background: '#fff', borderBottom: '1px solid rgba(184,146,42,0.12)', position: 'sticky', top: '72px', zIndex: 50, padding: '0 clamp(16px,4vw,48px)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', overflowX: 'auto', scrollbarWidth: 'none' }}>
          {CATS.map(cat => (
            <button key={cat} onClick={() => { setActive(cat); setLightbox(null); }} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: 'Cinzel, serif', fontSize: 'clamp(0.55rem,1.5vw,0.65rem)', letterSpacing: '0.18em',
              textTransform: 'uppercase', whiteSpace: 'nowrap',
              padding: '18px clamp(12px,2vw,20px)',
              color: active === cat ? '#b8922a' : '#7a7268',
              borderBottom: active === cat ? '2px solid #b8922a' : '2px solid transparent',
              transition: 'all 0.25s',
            }}>
              {cat}
              <span style={{ marginLeft: '6px', fontSize: '0.5rem', opacity: 0.6 }}>
                ({cat === 'All' ? galleryImages.length : galleryImages.filter(i=>i.category===cat).length})
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Masonry Grid */}
      <section style={{ padding: 'clamp(32px,5vw,64px) clamp(16px,4vw,48px)', maxWidth: '1300px', margin: '0 auto' }}>
        <style>{`
          .gal-grid { columns: 3; column-gap: 16px; }
          .gal-item { break-inside: avoid; margin-bottom: 16px; overflow: hidden; cursor: pointer; position: relative; background: #e8e4dc; }
          .gal-item:hover .gal-overlay { background: rgba(44,40,32,0.45); }
          .gal-overlay { position: absolute; inset: 0; background: rgba(44,40,32,0); transition: background 0.35s; display: flex; align-items: flex-end; padding: 18px; }
          .gal-label { opacity: 0; transform: translateY(8px); transition: opacity 0.35s, transform 0.35s; }
          .gal-item:hover .gal-label { opacity: 1; transform: translateY(0); }
          .gal-item img { display: block; width: 100%; height: auto; transition: transform 0.45s ease; }
          .gal-item:hover img { transform: scale(1.04); }
          .gal-item.has-bg img { background: #f0ece4; }
          @media (max-width: 900px) { .gal-grid { columns: 2; } }
          @media (max-width: 480px) { .gal-grid { columns: 1; } }
        `}</style>
        <div className="gal-grid">
          {filtered.map((img, i) => (
            <div key={img.src} className={`gal-item${img.src.includes('.png') ? ' has-bg' : ''}`}
              onClick={() => setLightbox(i)}
              role="button" tabIndex={0} aria-label={`View ${img.alt}`}
              onKeyDown={e => e.key === 'Enter' && setLightbox(i)}
            >
              <Image
                src={img.src} alt={img.alt}
                width={600} height={400}
                sizes="(max-width:480px) 100vw, (max-width:900px) 50vw, 33vw"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
              <div className="gal-overlay">
                <div className="gal-label">
                  <div style={{ fontFamily: 'Cinzel, serif', fontSize: '0.6rem', letterSpacing: '0.15em', color: '#d4aa4a', marginBottom: '3px' }}>{img.category}</div>
                  <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '0.95rem', color: '#faf8f4', fontStyle: 'italic' }}>{img.alt}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '16px', fontFamily: 'Cinzel, serif', fontSize: '0.65rem', letterSpacing: '0.15em', color: '#a09890' }}>
          Showing {filtered.length} of {galleryImages.length} images
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 200, background: 'rgba(10,8,5,0.96)', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(6px)' }}
          onClick={closeLightbox}
        >
          <div style={{ position: 'relative', maxWidth: '90vw', maxHeight: '88vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            onClick={e => e.stopPropagation()}
          >
            <Image
              src={filtered[lightbox].src}
              alt={filtered[lightbox].alt}
              width={1200} height={800}
              style={{ maxWidth: '90vw', maxHeight: '82vh', width: 'auto', height: 'auto', objectFit: 'contain', display: 'block' }}
              quality={90}
            />
            <div style={{ position: 'absolute', bottom: '-44px', left: 0, right: 0, textAlign: 'center' }}>
              <span style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '0.95rem', color: 'rgba(212,200,180,0.75)' }}>{filtered[lightbox].alt}</span>
              <span style={{ fontSize: '0.75rem', color: '#b8922a', marginLeft: '16px' }}>{lightbox + 1} / {filtered.length}</span>
            </div>
          </div>

          {/* Close */}
          <button onClick={closeLightbox} style={{ position: 'fixed', top: '24px', right: '28px', background: 'rgba(44,40,32,0.7)', border: '1px solid rgba(184,146,42,0.3)', cursor: 'pointer', width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(4px)', zIndex: 201 }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 3L15 15M3 15L15 3" stroke="#d4aa4a" strokeWidth="1.5" strokeLinecap="round"/></svg>
          </button>

          {/* Prev */}
          <button onClick={e => { e.stopPropagation(); prev(); }} style={{ position: 'fixed', left: '16px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(44,40,32,0.7)', border: '1px solid rgba(184,146,42,0.3)', cursor: 'pointer', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(4px)', zIndex: 201 }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M13 4L7 10L13 16" stroke="#d4aa4a" strokeWidth="1.5" strokeLinecap="round"/></svg>
          </button>

          {/* Next */}
          <button onClick={e => { e.stopPropagation(); next(); }} style={{ position: 'fixed', right: '16px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(44,40,32,0.7)', border: '1px solid rgba(184,146,42,0.3)', cursor: 'pointer', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(4px)', zIndex: 201 }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7 4L13 10L7 16" stroke="#d4aa4a" strokeWidth="1.5" strokeLinecap="round"/></svg>
          </button>
        </div>
      )}
    </div>
  );
}