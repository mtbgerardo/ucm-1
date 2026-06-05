const reviews = [
  {
    name: 'María González',
    location: 'Ciudad de México',
    stars: 5,
    text: 'Gracias a UCM pude hacer crecer mis ahorros de manera segura. La atención personalizada que recibo es excepcional y siempre están disponibles para resolver mis dudas.',
    initials: 'MG',
    color: '#980025',
  },
  {
    name: 'Carlos Rodríguez',
    location: 'Monterrey, N.L.',
    stars: 5,
    text: 'Llevo 5 años siendo socio y cada año me sorprenden con mejores rendimientos. Sin duda es la mejor decisión financiera que he tomado para mi familia.',
    initials: 'CR',
    color: '#CEA24A',
  },
  {
    name: 'Ana López',
    location: 'Guadalajara, Jal.',
    stars: 5,
    text: 'La transparencia de UCM es lo que más me convence. Siempre sé exactamente dónde está mi dinero y cómo está creciendo. ¡Excelente institución!',
    initials: 'AL',
    color: '#2D5986',
  },
  {
    name: 'Roberto Martínez',
    location: 'Puebla, Pue.',
    stars: 5,
    text: 'UCM me ayudó a obtener el crédito que necesitaba para hacer crecer mi negocio. El proceso fue ágil, claro y sin complicaciones. Los recomiendo ampliamente.',
    initials: 'RM',
    color: '#3D7A4A',
  },
  {
    name: 'Sofía Hernández',
    location: 'Querétaro, Qro.',
    stars: 5,
    text: 'Diversifiqué mis inversiones gracias a los expertos de UCM y los resultados hablan por sí solos. Mi patrimonio ha crecido más de lo que esperaba.',
    initials: 'SH',
    color: '#980025',
  },
  {
    name: 'Miguel Torres',
    location: 'Ciudad de México',
    stars: 5,
    text: 'Como empresario, confío en UCM para administrar el capital de mi empresa con total transparencia. Es una relación de largo plazo que recomiendo a todos.',
    initials: 'MT',
    color: '#CEA24A',
  },
  {
    name: 'Laura Sánchez',
    location: 'León, Gto.',
    stars: 5,
    text: 'Lo mejor de UCM es que siempre me explican claramente cómo funciona cada producto. No hay letra pequeña ni sorpresas. Una institución honesta y comprometida.',
    initials: 'LS',
    color: '#6B4C9A',
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div style={{ display: 'flex', gap: '2px', marginBottom: '0.75rem' }}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#CEA24A">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: typeof reviews[0] }) {
  return (
    <div style={{
      flexShrink: 0,
      width: 320,
      marginRight: '1.5rem',
      background: '#ffffff',
      border: '1px solid #ece9e3',
      borderRadius: '16px',
      padding: '1.75rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '0',
    }}>
      <StarRating count={review.stars} />
      <p style={{
        fontFamily: "'Poppins', sans-serif", fontWeight: 300,
        fontSize: '0.875rem', color: '#0A0B1E',
        lineHeight: 1.7, flex: 1, marginBottom: '1.25rem',
      }}>
        "{review.text}"
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <div style={{
          width: 40, height: 40, borderRadius: '50%',
          background: review.color, display: 'flex',
          alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}>
          <span style={{
            fontFamily: "'Poppins', sans-serif", fontWeight: 500,
            fontSize: '0.75rem', color: '#fff',
          }}>
            {review.initials}
          </span>
        </div>
        <div>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500, fontSize: '0.8125rem', color: '#333333' }}>{review.name}</p>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300, fontSize: '0.75rem', color: '#999' }}>{review.location}</p>
        </div>
      </div>
    </div>
  );
}

export default function Reviews() {
  const track = [...reviews, ...reviews];

  return (
    <section className="relative pt-20 pb-40 px-4 overflow-hidden rounded-bl-[4rem] rounded-br-[4rem] bg-white z-10">

      <div className="container mx-auto max-w-[800px] text-center py-12 sm:px-8">
        <p className="tracking-tight font-[500] text-sm uppercase mb-3">
          Aquí no eres cliente, eres socio
        </p>
        <h2 className="font-medium text-[clamp(1.8rem,3.5vw,2.90rem)] text-[#0A0B1E] tracking-tighter leading-none mb-8">
          <span className='serif-italic text-[clamp(2.1rem,4vw,3.5rem)]'>
            Únete
          </span>{' '}
          y tú también disfruta{' '}<br />
          de los beneficios exclusivos
        </h2>
      </div>

      <div className="overflow-hidden overflow-x-scroll scroll-smooth scrollbar-none snap-x snap-mandatory  relative">
        <div
          className='flex items-stretch w-max-content pl-8'
        >
          {track.map((review, i) => (
            <ReviewCard key={`${review.name}-${i}`} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
