const items = ['Massa de 48 Horas', 'Forno a Lenha', 'Ingredientes DOP', 'Tradizione Napoletana']

export default function FeaturesBar() {
  return (
    <div
      className="features-bar"
      style={{
        background: '#1C1C18', padding: '26px 80px',
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0,
      }}
    >
      {items.map((item, i) => (
        <span key={item} style={{ display: 'contents' }}>
          <span style={{
            fontFamily: 'DM Sans', fontSize: 11, letterSpacing: '0.22em',
            textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', whiteSpace: 'nowrap',
          }}>
            {item}
          </span>
          {i < items.length - 1 && (
            <span style={{
              color: '#C8202F', fontSize: 22, margin: '0 28px', opacity: 0.8, lineHeight: 1,
            }}>
              ·
            </span>
          )}
        </span>
      ))}
    </div>
  )
}
