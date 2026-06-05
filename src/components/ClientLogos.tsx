import { useEffect, useRef } from 'react';
import { animate } from 'motion';

const logos = [
  { name: 'On Deck', style: { fontWeight: 700, fontSize: '1rem', letterSpacing: '-0.02em' } },
  { name: 'NIVEA', style: { fontWeight: 700, fontSize: '1.1rem', letterSpacing: '0.12em' } },
  { name: 'miro', style: { fontWeight: 700, fontSize: '1.25rem', letterSpacing: '-0.03em' } },
  { name: 'HYPER ISLAND', style: { fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.08em' } },
  { name: 'GONG', style: { fontWeight: 700, fontSize: '1.1rem', letterSpacing: '0.05em' } },
  { name: 'FARFETCH', style: { fontWeight: 700, fontSize: '0.95rem', letterSpacing: '0.08em' } },
  { name: 'Shopify', style: { fontWeight: 700, fontSize: '1rem', letterSpacing: '-0.01em' } },
  { name: 'Stripe', style: { fontWeight: 700, fontSize: '1.1rem', letterSpacing: '-0.02em' } },
];

// Duplicate for seamless loop
const track = [...logos, ...logos];

export default function ClientLogos() {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<ReturnType<typeof animate> | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Animate from 0% to -50% (half of duplicated track = one full set)
    animationRef.current = animate(
      el,
      { x: ['0%', '-50%'] },
      {
        duration: 22,
        ease: 'linear',
        repeat: Infinity,
      }
    );

    return () => {
      animationRef.current?.stop();
    };
  }, []);

  const handleMouseEnter = () => {
    animationRef.current?.pause();
  };

  const handleMouseLeave = () => {
    animationRef.current?.play();
  };

  return (
    <div
      style={{
        width: '100%',
        overflow: 'hidden',
        paddingTop: '2.5rem',
        paddingBottom: '2.5rem',
        background: '#ffffff',
        borderTop: '1px solid #f0ede8',
        borderBottom: '1px solid #f0ede8',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={containerRef}
        style={{
          display: 'flex',
          alignItems: 'center',
          width: 'max-content',
          willChange: 'transform',
        }}
      >
        {track.map((logo, i) => (
          <div
            key={`${logo.name}-${i}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0 3.5rem',
              flexShrink: 0,
            }}
          >
            <span
              style={{
                fontFamily: "'Poppins', sans-serif",
                color: '#c0bdb8',
                ...logo.style,
              }}
            >
              {logo.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
