import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const slides = [
  {
    title: 'Inversiones',
    description: 'Opciones de inversión sanas y seguras, diseñadas para hacer crecer tu dinero con respaldo y acompañamiento en todo momento.',
    image: '/img/que-hacemos-slide-1.webp',
    modal: "modal-inversiones"
  },
  {
    title: 'Crédito empresarial',
    description: 'Diseñadas para ayudarte a avanzar con transparencia, sin complicaciones y con el acompañamiento de un equipo que está contigo en cada paso.',
    image: '/img/que-hacemos-slide-2.webp',
    modal: "modal-credito-empresarial"
  },
  {
    title: 'Leasing Puro',
    description: 'Arrendamiento ágil para equipar tu negocio. Mantiene liquidez, optimiza recursos y sigue creciendo con el respaldo de un esquema claro y flexible.',
    image: '/img/que-hacemos-slide-3.webp',
    modal: "modal-arrendamiento"
  },
];

export default function QueHacemos() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (idx: number) => {
    setCurrent(idx);
    resetInterval();
  };

  const prev = () => goTo((current - 1 + slides.length) % slides.length);
  const next = () => goTo((current + 1) % slides.length);

  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent(c => (c + 1) % slides.length);
    }, 5500);
  };

  useEffect(() => {
    resetInterval();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  const slide = slides[current];

  return (
    <section id="que-hacemos" className="bg-white">
      <div className="container mx-auto max-w-[600px] text-center px-4 py-12 sm:px-8">
        <p className="tracking-tight font-[500] text-sm uppercase mb-3">
          ¿Qué Hacemos?
        </p>
        <h2 className="font-medium text-[clamp(1.8rem,3.5vw,2.90rem)] text-[#0A0B1E] tracking-tighter leading-none mb-8">
          Estrategias{' '}<br />
          <span className='serif-italic text-[clamp(2.1rem,4vw,3.5rem)]'>
            personalizadas
          </span>{' '}
          para sus metas financieras
        </h2>
      </div>

      <div
        className="relative w-full h-screen overflow-hidden"
      >
        <AnimatePresence>
          <motion.img
            key={current}
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-cover flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          />
        </AnimatePresence>
        <div
          className={`w-full h-screen absolute inset-0 z-10 max-w-[90%] max-h-[90%] m-auto rounded-[4rem]`}
        >
          <div className="liquidGlass-effect"></div>
          <div className="liquidGlass-tint"></div>
          <div className="liquidGlass-shine"></div>

          <div
            className="relative z-10 h-full w-full flex flex-col justify-start p-10 md:p-24"
          >
            <div className="max-w-[600px] w-full">
              <h3
                className="text-[clamp(2rem,4vw,3rem)] text-white tracking-tighter mb-5"
              >
                {slide.title}
              </h3>
              <p className="text-lg text-white/82 leading-relaxed mb-6">
                {slide.description}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="w-[260px] mx-auto md:mx-0">
                  <button className="btn-secondary text-center w-full flex items-center justify-center gap-2" data-open-modal={slide.modal}>
                    <span className="w-full">Conocer más</span> <ChevronRightIcon width={18} height={18} />
                  </button>
                </div>
                <div className="w-[260px] mx-auto md:mx-0">
                  <a className="btn-primary text-center w-full flex items-center justify-center gap-2" href="https://wa.me/5215529401288" target="_blank" rel="noopener noreferrer" >
                    <span className="w-full">Contactar a un asesor</span> <ChevronRightIcon width={18} height={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2"
          >
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Slide ${i + 1}`}
                style={{
                  width: i === current ? 28 : 8,
                  height: 8,
                  borderRadius: 4,
                  background: i === current ? '#CEA24A' : 'rgba(255,255,255,0.4)',
                  border: 'none', cursor: 'pointer',
                  transition: 'all 0.3s ease-in-out',
                  padding: 0,
                }}
              />
            ))}
          </div>
          <svg style={{ display: 'none' }}>
            <filter
              id="glass-distortion"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              filterUnits="objectBoundingBox"
            >
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.01 0.01"
                numOctaves="1"
                seed="5"
                result="turbulence"
              />

              <feComponentTransfer in="turbulence" result="mapped">
                <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
                <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
                <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
              </feComponentTransfer>

              <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />

              <feSpecularLighting
                in="softMap"
                surfaceScale="5"
                specularConstant="1"
                specularExponent="100"
                lighting-color="white"
                result="specLight"
              >
                <fePointLight x="-200" y="-200" z="300" />
              </feSpecularLighting>

              <feComposite
                in="specLight"
                operator="arithmetic"
                k1="0"
                k2="1"
                k3="1"
                k4="0"
                result="litImage"
              />

              <feDisplacementMap
                in="SourceGraphic"
                in2="softMap"
                scale="150"
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>
          </svg>
        </div>

        <button
          onClick={prev}
          aria-label="Anterior"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/15 border border-white/30 text-white cursor-pointer md:flex items-center justify-center transition-colors duration-200 hidden"
          onMouseOver={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.25)')}
          onMouseOut={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.15)')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={next}
          aria-label="Siguiente"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/15 border border-white/30 text-white cursor-pointer md:flex items-center justify-center transition-colors duration-200 hidden"
          onMouseOver={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.25)')}
          onMouseOut={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.15)')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
