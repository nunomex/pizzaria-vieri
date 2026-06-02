const stats: [string, string][] = [
  ['48h', 'Fermentação da massa'],
  ['100%', 'Ingredientes naturais'],
  ['Nápoles', 'Receita de origem'],
]

export default function About() {
  return (
    <section
      id="about"
      className="section-pad"
      style={{ padding: '96px 80px', background: '#fff' }}
    >
      <div
        className="about-grid"
        style={{
          maxWidth: 1100, margin: '0 auto',
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: 72, alignItems: 'center',
        }}
      >
        {/* Text column */}
        <div className="fade-in">
          <div style={{
            fontFamily: 'DM Sans', fontSize: 10, letterSpacing: '0.38em',
            textTransform: 'uppercase', color: '#C8202F', marginBottom: 20,
          }}>
            A Nossa História
          </div>

          <h2 style={{
            fontFamily: 'Cormorant Garamond',
            fontSize: 'clamp(34px, 4vw, 52px)', fontWeight: 400,
            lineHeight: 1.15, marginBottom: 24,
          }}>
            Uma receita de família,<br /><em>com alma italiana.</em>
          </h2>

          <p style={{
            fontFamily: 'DM Sans', fontSize: 15, lineHeight: 1.82,
            color: '#5C5C50', marginBottom: 20,
          }}>
            A Pizzaria Vieri nasceu do amor pela autêntica tradição italiana. Cada pizza começa com uma massa de fermentação lenta de 48 horas — leve, aromática, com aquela textura única que só o tempo consegue criar.
          </p>

          <p style={{
            fontFamily: 'DM Sans', fontSize: 15, lineHeight: 1.82,
            color: '#5C5C50', marginBottom: 40,
          }}>
            Os nossos ingredientes são cuidadosamente selecionados: tomates San Marzano da Campânia, mozzarella fior di latte, azeite DOP. Trazemos Itália até Esmoriz, numa fatia de cada vez.
          </p>

          <div className="hero-stats" style={{ display: 'flex', gap: 40 }}>
            {stats.map(([n, l]) => (
              <div key={l}>
                <div style={{
                  fontFamily: 'Cormorant Garamond', fontSize: 33,
                  fontWeight: 600, color: '#C8202F',
                }}>
                  {n}
                </div>
                <div style={{
                  fontFamily: 'DM Sans', fontSize: 11, color: '#aaa',
                  marginTop: 4, maxWidth: 84, lineHeight: 1.4,
                }}>
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image column */}
        <div
          className="fade-in delay-2"
          style={{ position: 'relative', borderRadius: 10, overflow: 'hidden', aspectRatio: '4/5' }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/photos-1780347222438.jpg"
            alt="A nossa pizza"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{
            position: 'absolute', bottom: 20, left: 20, right: 20,
            background: 'rgba(255,255,255,0.93)', borderRadius: 8,
            padding: '16px 20px', backdropFilter: 'blur(10px)',
          }}>
            <div style={{
              fontFamily: 'Cormorant Garamond', fontSize: 18,
              fontStyle: 'italic', lineHeight: 1.45,
            }}>
              &ldquo;Ogni pizza è un&apos;opera d&apos;arte.&rdquo;
            </div>
            <div style={{
              fontFamily: 'DM Sans', fontSize: 11, color: '#aaa', marginTop: 6,
            }}>
              — Família Vieri
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
