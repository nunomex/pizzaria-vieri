import { siteConfig } from '@/data/config'

export default function Footer() {
  return (
    <footer style={{
      background: '#111110', padding: '36px 60px',
      borderTop: '1px solid rgba(255,255,255,0.05)',
    }}>
      <div
        className="footer-inner"
        style={{
          maxWidth: 1100, margin: '0 auto',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}
      >
        <div>
          <div style={{
            fontFamily: 'DM Sans', fontSize: 10, letterSpacing: '0.28em',
            textTransform: 'uppercase', color: '#C8202F', marginBottom: 4,
          }}>
            Pizzaria
          </div>
          <div style={{
            fontFamily: 'Cormorant Garamond', fontSize: 22,
            fontStyle: 'italic', color: 'rgba(255,255,255,0.85)',
          }}>
            Vieri
          </div>
        </div>

        <div style={{
          fontFamily: 'DM Sans', fontSize: 12,
          color: 'rgba(255,255,255,0.28)', textAlign: 'center', lineHeight: 1.75,
        }}>
          © 2025 Pizzaria Vieri · Todos os direitos reservados<br />
          Rua Fernão Veloso 217, Esmoriz 3885-575, Portugal
        </div>

        <a
          href={`https://instagram.com/${siteConfig.instagram}`}
          target="_blank"
          onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.7)')}
          onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.38)')}
          style={{
            fontFamily: 'DM Sans', fontSize: 12, letterSpacing: '0.12em',
            textTransform: 'uppercase', color: 'rgba(255,255,255,0.38)',
            transition: 'color 0.2s',
          }}
        >
          Instagram
        </a>
      </div>
    </footer>
  )
}
