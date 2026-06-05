import { useEffect, useRef, useState } from 'react';

const brands = [
  { name: 'Visa', color: '#1A1F71', style: { fontWeight: 800, fontSize: '1.5rem', fontStyle: 'italic' } },
  { name: 'Mastercard', color: '#EB001B', style: { fontWeight: 700, fontSize: '0.95rem', letterSpacing: '0.03em' } },
  { name: 'AMEX', color: '#007BC1', style: { fontWeight: 800, fontSize: '1rem', letterSpacing: '0.1em' } },
  { name: 'Bloomberg', color: '#000000', style: { fontWeight: 700, fontSize: '0.95rem' } },
  { name: 'Forbes', color: '#8E1C39', style: { fontWeight: 800, fontSize: '1.1rem', fontStyle: 'italic' } },
  { name: 'BBVA', color: '#004481', style: { fontWeight: 800, fontSize: '1.1rem', letterSpacing: '0.05em' } },
  { name: 'HSBC', color: '#DB0011', style: { fontWeight: 700, fontSize: '1rem', letterSpacing: '0.08em' } },
  { name: 'Citigroup', color: '#003B70', style: { fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.04em' } },
];

export default function BrandIconsGrid() {
  const [visible, setVisible] = useState<boolean[]>(new Array(brands.length).fill(false));
  const ref = useRef<HTMLDivElement>(null);
  const fired = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !fired.current) {
        fired.current = true;
        brands.forEach((_, i) => {
          setTimeout(() => {
            setVisible(prev => {
              const next = [...prev];
              next[i] = true;
              return next;
            });
          }, i * 140);
        });
        obs.disconnect();
      }
    }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        background: '#f9f7f4',
        padding: '4rem 0',
        borderTop: '1px solid #f0ede8',
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem' }}>
        <p style={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 500,
          fontSize: '0.7rem',
          letterSpacing: '0.2em',
          color: '#aaa',
          textTransform: 'uppercase',
          textAlign: 'center',
          marginBottom: '2.5rem',
        }}>
          Alianzas estratégicas de confianza
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1.5rem',
        }}>
          {brands.map((brand, i) => (
            <div
              key={brand.name}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1.75rem 1rem',
                border: '1px solid #ece9e3',
                borderRadius: '12px',
                background: '#ffffff',
                opacity: visible[i] ? 1 : 0,
                transform: visible[i] ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.55s ease, transform 0.55s ease',
              }}
            >
              <span style={{
                fontFamily: "'Poppins', sans-serif",
                color: '#ccc',
                ...brand.style,
              }}>
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
